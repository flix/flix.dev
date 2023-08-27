import React, {Component} from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import Rename from '../gif/vscode-rename.webp';
import Derive from '../gif/vscode-derive.webp';
import Context from '../gif/vscode-context.webp';

class VSCode extends Component {

    componentDidMount() {
        document.title = "Flix | VS Code Support";
    }

    render() {
        return (
            <Container className="mb-4">
                <Row>
                    <img src="/logo/vscode.svg" width="40" alt="Visual Studio Code" className="mx-3"/>
                    <h1 className="my-auto">The Visual Studio Code Extension</h1>
                </Row>

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
                            <img src={Context} width={500} alt="Demonstration of context info"/>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <img src={Rename} width={500} alt="Demonstration of renaming"/>
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
                        <img src={Derive} width={500} alt="Demonstration of renaming"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default VSCode;
