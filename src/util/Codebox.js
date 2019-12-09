import React, {Component} from "react";
import SamplesData from "../data/Samples";
import ReactGA from "react-ga";
import Editor from "./Editor";
import {Badge, Button, Card, CardText, Container} from "reactstrap";
import nl2br from 'react-newline-to-break';

class Codebox extends Component {

    constructor(props) {
        super(props);
        let samples = SamplesData();
        let randomChoice = getRandomInt(samples.length);
        this.state = {
            choice: randomChoice,
            samples: samples,
            input: "",
            output: undefined
        };
    }

    onDropdownChoice(event) {
        let newChoice = event.target.value;
        this.setState({
            choice: newChoice,
            output: undefined
        });
        ReactGA.event({
            category: 'Codebox',
            action: 'Selected an example',
            label: this.state.samples[newChoice].name
        });
    }

    onTextChanged(input) {
        this.setState({input: input});
    }

    onRunClick = () => {
        this.props.flix.run(this.state.input, data =>
            this.setState({output: data})
        );
    };

    getConnectedStatus() {
        if (this.props.flix.connected) {
            return <Badge color="info" className="float-right mt-1">Connected</Badge>
        } else {
            return <Badge color="secondary" className="float-right mt-1">Disconnected</Badge>
        }
    }

    getEditor() {
        let choice = this.state.choice;
        let sample = this.state.samples[choice];
        // NB: The use of the key ensures that the editor is refreshed when the dropdown is changed.
        return <Editor key={sample.name}
                       code={sample.code}
                       notifyTextChanged={this.onTextChanged.bind(this)}/>
    }

    getOutput() {
        if (!this.state.output) {
            return undefined;
        } else {
            if (this.state.output.status === "success") {
                return (
                    <Card body outline color="success" className="mt-2">
                        <CardText>
                            <code>{this.state.output.result}</code>
                        </CardText>
                    </Card>);
            } else {
                return (
                    <Card body outline color="danger" className="mt-2">
                        <CardText>
                            <code>
                                {nl2br(this.state.output.result)}
                            </code>
                        </CardText>
                    </Card>);
            }
        }
    }

    render() {
        return (
            <Container>
                <select className="mb-2" value={this.state.choice} onChange={this.onDropdownChoice.bind(this)}>
                    {this.state.samples.map((sample, index) =>
                        <option key={index} value={index}>{sample.name}</option>)
                    }
                </select>
                {this.getConnectedStatus()}
                <Button color="primary" outline className="btn-xs" onClick={this.onRunClick}>Run</Button>
                {this.getEditor()}
                {this.getOutput()}
            </Container>
        );
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default Codebox;
