import React, {Component} from 'react';
import {Card, CardImg, Col, Container, Row} from "reactstrap";
import inlineDiagnostics from '../gif/inlineDiagnostics.png'
import autoComplete from '../gif/autoComplete.png'

class VSCode extends Component {

    componentDidMount() {
        document.title = "Flix | Visual Studio Code Features";
    }

    render() {
        return (<Container>
            <Row className="mb-3">
                <Col md={12}>
                    <h1>Visual Studio Code Features</h1>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <h4>Inline Diagnostics</h4>
                    <p>
                        Flix shows inline diagnostics.
                    </p>
                    <Card>
                        <CardImg top src={inlineDiagnostics}/>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <h4>Auto Completion</h4>
                    <p>
                        Flix supports auto-completion of a range of program elements.
                    </p>
                    <Card>
                        <CardImg top src={autoComplete}/>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                <h4>Snippet Completion</h4>
                    <p>
                        Flix supports auto-completion of most program elements.
                    </p>
                    <Card>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <h4>Hover</h4>
                    <p>
                        Flix supports auto-completion of most program elements.
                    </p>
                    <Card>

                    </Card>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <h4>Rename</h4>
                    <p>
                        Flix supports auto-completion of most program elements.
                    </p>
                    <Card>

                    </Card>
                </Col>
            </Row>


            <Row className="mb-3">
                <Col md={6}>
                    <h4>Highligh Uses</h4>
                    <p>
                        Flix supports auto-completion of most program elements.
                    </p>
                    <Card>

                    </Card>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <h4>Quick Fixes</h4>
                    <p>
                        Flix supports auto-completion of most program elements.
                    </p>
                    <Card>

                    </Card>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <h4>Code Lens</h4>
                    <p>
                        Flix supports auto-completion of most program elements.
                    </p>
                    <Card>

                    </Card>
                </Col>
            </Row>
        </Container>);
    }
}

export default VSCode;
