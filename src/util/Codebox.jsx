import { useState } from "react";
import SamplesData from "../data/Samples";
import Editor from "./Editor";
import {
    Button, Col, Container, InputGroup, Row
} from "reactstrap";
import { FaExternalLinkAlt } from 'react-icons/fa';
import PulseLoader from 'react-spinners/PulseLoader';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function Codebox({ flix }) {
    const [initialChoice] = useState(() => getRandomInt(SamplesData.length));
    const [choice, setChoice] = useState(initialChoice);
    const [input, setInput] = useState(SamplesData[initialChoice].code);
    const [output, setOutput] = useState(undefined);

    function onDropdownChoice(event) {
        let newChoice = Number(event.target.value);
        setChoice(newChoice);
        setInput(SamplesData[newChoice].code);
        setOutput(undefined);
    }

    function onRunClick() {
        setOutput(null);
        flix.run(input, data => setOutput(data));
    }

    function getRunButton() {
        return <a href={"http://play.flix.dev/"}><Button color="success" size="sm">
            Play <FaExternalLinkAlt className="ml-2"/>
        </Button>
        </a>;
    }

    function getDropDown() {
        return <select
            value={choice}
            onChange={onDropdownChoice}
            style={{"textOverflow": "ellipsis"}}
            className="mr-2 w-75">
            {SamplesData.map((sample, index) =>
                <option key={index} value={index}>{sample.name}</option>)
            }
        </select>
    }

    function getEditor() {
        return <Editor key={input.leading}
                       code={input}
                       notifyTextChanged={setInput}/>
    }

    function getOutput() {
        if (output === undefined) {
            return undefined;
        } else if (output === null) {
            return <Row>
                <Col md="12" className="text-center">
                    <PulseLoader
                        size={16}
                        color={'#28a745'}
                        loading={true}
                        className="loader"
                    />
                </Col>
            </Row>
        } else {
            return (
                <Container className="mt-3 editor-output">
                    <h5>Standard Output</h5>
                    <pre>{output.result}</pre>
                </Container>);
        }
    }

    return (
        <div>
            <InputGroup className="mt-2 mb-3">
                {getDropDown()}
                {getRunButton()}
            </InputGroup>
            {getEditor()}
            {getOutput()}
        </div>
    );
}

export default Codebox;
