import React, {Component} from "react";
import SamplesData from "../data/Samples";
import ReactGA from "react-ga";
import Editor from "./Editor";
import {
    Badge,
    Button,
    Card,
    CardText,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from "reactstrap";
import nl2br from 'react-newline-to-break';

class Codebox extends Component {

    constructor(props) {
        super(props);
        let samples = SamplesData();
        let randomChoice = getRandomInt(samples.length);
        this.state = {
            choice: randomChoice,
            samples: samples,
            dropdown: false,
            input: "",
            output: undefined
        };
    }

    onDropdownChoice(event) {
        let newChoice = event.target.getAttribute("choice");
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

    getDropDown() {
        return <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropDown.bind(this)} size="sm">
            <DropdownToggle caret>
                {this.getNameOfSelection()}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Programs</DropdownItem>
                {this.state.samples.map((sample, index) =>
                    <DropdownItem key={index} choice={index}
                                  onClick={this.onDropdownChoice.bind(this)}>{sample.name}</DropdownItem>)
                }
            </DropdownMenu>
        </Dropdown>
    }

    getConnectedStatus() {
        if (this.props.flix.connected) {
            return <Badge color="info" className="float-right mt-1">Connected</Badge>
        } else {
            return <Badge color="secondary" className="float-right mt-1">Disconnected</Badge>
        }
    }

    getNameOfSelection() {
        return this.state.samples[this.state.choice].name;
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

    toggleDropDown() {
        this.setState({dropdown: !this.state.dropdown});
    }

    render() {
        return (
            <Container>
                {this.getDropDown()}
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
