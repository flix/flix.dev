import React, {Component} from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import Rename from '../gif/vscode-rename.mp4';
import Derive from '../gif/vscode-derive.mp4';
import Context from '../gif/vscode-context.mp4';

class VSCode extends Component {

    componentDidMount() {
        document.title = "Flix | VS Code Support";
    }

    render() {
        return (
            <Container>
                <h1>The Visual Studio Code Extension</h1>

                <p>
                    Flix comes with an extension for Visual Studio Code providing a rich set of features.
                </p>

                <hr/>

                <Row className="mb-4">
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Context Information</h4></CardTitle>
                                <CardText>
                                        View the type of an expression or the documentation of a function by hovering over it.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md="6">
                        <video width="100%" muted autoPlay loop>
                            <source src={Context} type="video/mp4"/>
                        </video>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <video width="100%" muted autoPlay loop>
                            <source src={Rename} type="video/mp4"/>
                        </video>
                    </Col>

                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Renaming</h4></CardTitle>
                                <CardText>
                                        Replace all occurrences of a symbol with a new name.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Automatically Derive Missing Type Classes</h4></CardTitle>
                                <CardText>
                                    Sometimes you forget to derive a type class. Let Flix do it for you.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md="6">
                        <video width="100%" muted autoPlay loop>
                            <source src={Derive} type="video/mp4"/>
                        </video>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default VSCode;
