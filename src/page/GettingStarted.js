import React, {Component} from 'react';
import {Col, Container, Media, Row} from "reactstrap";
import InstallGif from '../gif/install.gif'

class GettingStarted extends Component {
    render() {
        return (
            <Container>
                <h1>Getting Started</h1>

                <Row className="mb-lg-5">
                    <Col md="12">
                        <h2>Installation</h2>
                    </Col>

                    <Col md="6">
                        <ol>
                            <li>
                                Ensure that you have Java 1.8 or later installed.
                                You can check your Java version with
                                the command <code>java -version</code>.
                                You should see something like <code>openjdk version "1.8.0_102"</code>.
                            </li>
                            <li>
                                Download <a href="https://github.com/flix/flix/releases">flix.jar</a> from the GitHub
                                releases page.
                            </li>
                            <li>Run the command <code>java -jar flix.jar --version</code> to verify that you have the
                                expected Flix version.
                            </li>
                            <li>
                                Run the command <code>java -jar flix.jar</code> to start Flix in interactive mode.
                            </li>
                            <li>
                                You can now enter an expression, e.g. <code>21 + 42</code>, to have it evaluated.
                            </li>
                        </ol>
                    </Col>

                    <Col md="6">
                        <Media object src={InstallGif} alt="install.gif" style={{width: '100%'}}/>
                    </Col>
                </Row>

                <Row>

                    <Col md="12">
                        <h2>Next Steps</h2>
                    </Col>

                    <Col md="6">
                        <Media object src={InstallGif} alt="install.gif" style={{width: '100%'}}/>
                    </Col>
                    <Col md="6">

                        <ol>
                            <li>Ensure you have java installed</li>
                            <li>Download the Flix jar from GitHub</li>
                            <li>Run the command java -jar flix.jar</li>
                        </ol>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default GettingStarted;
