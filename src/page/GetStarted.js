import React, {Component} from 'react';
import {Card, CardImg, Col, Container, Row} from "reactstrap";
import VSCode from '../gif/vscode.png'

class GetStarted extends Component {

    componentDidMount() {
        document.title = "Flix | Getting Started";
    }

    render() {
        return (
            <Container>
                <h1>Get Started</h1>

                <Row className="mb-5">
                    <Col>
                        <p>
                            We recommend to use Flix from Visual Studio Code. In addition, Flix has an <a
                            href="https://play.flix.dev/">online playground</a> and can be <a
                            href="https://doc.flix.dev/getting-started.html">installed locally</a>.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3 className="text-center mb-3">Installing the Flix Visual Studio Code Extension</h3>
                        <Card className="ml-5 mr-5">
                            <CardImg top src={VSCode}/>
                        </Card>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default GetStarted;
