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
    DropdownItem,
    DropdownMenu,
    DropdownToggle, InputGroup, InputGroupAddon, InputGroupButtonDropdown
} from "reactstrap";
import nl2br from 'react-newline-to-break';
import FontAwesome from 'react-fontawesome';

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
        let newChoice = Number(event.target.getAttribute("choice"));
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

    getRunButton() {
        return <Button color="success" onClick={this.onRunClick} size="sm">
            Run <FontAwesome name="play" className="ml-2"/>
        </Button>;
    }

    getDropDown() {
        return <InputGroupButtonDropdown addonType="append"
                                         isOpen={this.state.dropdown}
                                         toggle={this.toggleDropDown.bind(this)}
                                         size="sm">
            <DropdownToggle caret color="secondary" outline className="dropdown-samples">
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
                <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                        {this.getRunButton()}
                    </InputGroupAddon>
                    {this.getDropDown()}
                </InputGroup>
                {this.getEditor()}
                {this.getOutput()}
                {this.getConnectedStatus()}

            </Container>
        );
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default Codebox;
