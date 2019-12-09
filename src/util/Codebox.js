import React, {Component} from "react";
import SamplesData from "../data/Samples";
import ReactGA from "react-ga";
import Editor from "./Editor";
import {
    Button,
    Col,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle, InputGroup, InputGroupAddon, InputGroupButtonDropdown, Row
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
        let newChoice = Number(event.target.getAttribute("choice"));
        this.setState({
            choice: newChoice,
            input: this.state.samples[newChoice].code,
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
        return <InputGroupButtonDropdown addonType="append"
                                         isOpen={this.state.dropdown}
                                         toggle={this.toggleDropDown.bind(this)}
                                         size="sm">
            <DropdownToggle caret color="success" outline className="dropdown-samples text-body">
                {this.getNameOfSelection()}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Example Programs</DropdownItem>
                <DropdownItem divider/>
                {this.state.samples.map((sample, index) =>
                    <DropdownItem key={index}
                                  choice={index}
                                  onClick={this.onDropdownChoice.bind(this)}
                                  active={index === this.state.choice}
                                  className="small">
                        {sample.name}
                    </DropdownItem>)
                }
            </DropdownMenu>
        </InputGroupButtonDropdown>
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
                <InputGroup className="mb-2">
                    <InputGroupAddon addonType="prepend">
                        {this.getRunButton()}
                    </InputGroupAddon>
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
