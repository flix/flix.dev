import React, {Component} from "react";
import SamplesData from "../data/Samples";
import Editor from "./Editor";
import {
    Button, Col, Container, InputGroup, Row
} from "reactstrap";
import FontAwesome from 'react-fontawesome';
import PulseLoader from 'react-spinners/PulseLoader';

class Codebox extends Component {

    constructor(props) {
        super(props);
        let samples = SamplesData();
        let randomChoice = getRandomInt(samples.length);
        this.state = {
            choice: randomChoice,
            samples: samples,
            dropdown: false,
            input: samples[randomChoice].code,
            output: undefined
        };
    }

    toggleDropDown() {
        this.setState({dropdown: !this.state.dropdown});
    }

    onDropdownChoice(event) {
        let newChoice = Number(event.target.value);
        this.setState({
            choice: newChoice,
            input: this.state.samples[newChoice].code,
            output: undefined
        });
    }

    onTextChanged(input) {
        this.setState({input: input});
    }

    onRunClick = () => {
        this.setState({output: null}, () => {
            this.props.flix.run(this.state.input, data =>
                this.setState({output: data})
            );
        });
    };

    getRunButton() {
        let enabled = this.props.flix.connected;
        return <Button color="success" onClick={this.onRunClick} size="sm" disabled={!enabled}>
            Run <FontAwesome name="play" className="ml-2"/>
        </Button>;
    }

    getDropDown() {
        return <select
            value={this.state.choice}
            onChange={this.onDropdownChoice.bind(this)}
            style={{"textOverflow": "ellipsis"}}
            className="ml-2">
            {this.state.samples.map((sample, index) =>
                <option key={index} value={index}>{sample.name}</option>)
            }
        </select>
    }

    getNameOfSelection() {
        return this.state.samples[this.state.choice].name;
    }

    getEditor() {
        return <Editor key={this.state.input.leading}
                       code={this.state.input}
                       notifyTextChanged={this.onTextChanged.bind(this)}/>
    }

    getOutput() {
        if (this.state.output === undefined) {
            return undefined;
        } else if (this.state.output === null) {
            return <Row>
                <Col md="12" className="text-center">
                    <PulseLoader
                        size={16}
                        sizeUnit={"px"}
                        color={'#28a745'}
                        loading={true}
                        className="loader"
                    />
                </Col>
            </Row>
        } else {
            if (this.state.output.status === "success") {
                return (
                    <Container className="mt-3 editor-output">
                        <h5>Standard Output</h5>
                        <pre>{this.state.output.result}</pre>
                    </Container>);
            } else {
                return (
                    <Container className="mt-3 editor-output">
                        <h5>Standard Output</h5>
                        <pre>{this.state.output.result}</pre>
                    </Container>);
            }
        }
    }

    render() {
        return (
            <Container>
                <InputGroup className="mt-2 mb-3">
                    {this.getRunButton()}
                    {this.getDropDown()}
                </InputGroup>
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
