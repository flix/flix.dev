import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class GettingStarted extends Component {
    render() {
        return (
            <Container>
                <h1>Getting Started</h1>

                <Row>
                    <Col md="4">
                        <ol>
                            <li>Ensure you have java installed</li>
                            <li>Download the Flix jar from GitHub</li>
                            <li>Run the command java -jar flix.jar</li>
                        </ol>
                    </Col>

                    <Col md="8">
                        <a href="https://asciinema.org/a/153283" target="_blank"><img
                            src="https://asciinema.org/a/153283.svg"/></a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default GettingStarted;
