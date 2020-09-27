import React, {Component} from 'react';
import {Card, CardImg, Col, Container, Row} from "reactstrap";
import VSCode from '../gif/vscode.png'
import ReactGA from 'react-ga';

class GetStarted extends Component {

    componentDidMount() {
        document.title = "Flix | Getting Started";
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <Container>
                <h1>Getting Started</h1>

                <Row className="mb-4">
                    <Col>
                        <h5>Online Playground</h5>
                        <p>
                            You can try Flix online at <a href="https://play.flix.dev/">play.flix.dev</a>.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h5>Visual Studio Code</h5>

                        <p>
                            Using Flix in <a href="https://code.visualstudio.com/">Visual Studio Code</a> is easy:
                        </p>

                        <Card className="ml-2 mr-2">
                            <CardImg top src={VSCode}/>
                        </Card>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default GetStarted;
