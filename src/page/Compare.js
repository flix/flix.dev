import React, {Component} from "react";
import ReactGA from "react-ga";
import {
    Button,
    Card,
    CardBody,
    CardSubtitle, CardText,
    CardTitle,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Row,
    Table
} from "reactstrap";
import {FaCheck} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";

class Compare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "Scala"
        }
    }

    notifyChangeLanguage(language) {
        this.setState({language: language});
    }

    componentDidMount() {
        document.title = "Flix | Compare";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>

                <Row className="mb-3">
                    <Col>
                        <h1>Comparing: Flix versus {this.state.language}</h1>
                    </Col>

                    <Button onClick={() => this.notifyChangeLanguage("OCaml")}>OCaml</Button>
                    <Button onClick={() => this.notifyChangeLanguage("Haskell")}>Haskell</Button>
                    <Button onClick={() => this.notifyChangeLanguage("Scala")}>Scala</Button>
                </Row>

                <Row className="mb-3">
                    <Col>
                        text goes here.
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={4}>
                        <h2>Common Strengths and Weaknesses</h2>

                        <h5>Strengths</h5>

                        <ListGroup>
                            <ListGroupItem>Keyword-based Syntax</ListGroupItem>
                            <ListGroupItem>Local Type Inference</ListGroupItem>
                            <ListGroupItem>Access to Java Ecosystem</ListGroupItem>
                        </ListGroup>

                        <h5>Weaknesses</h5>
                        <ListGroup>
                            <ListGroupItem>Relatively slow compilation-times.</ListGroupItem>
                            <ListGroupItem>Slow application startup due to the JVM.</ListGroupItem>
                        </ListGroup>

                    </Col>


                    <Col sm={4}>
                        <h2>Flix is Better</h2>

                        <Card>
                            <CardBody>
                                <CardTitle>Flix Strengths</CardTitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>

                        <ListGroup>
                            <ListGroupItem>Polymorphic effect system</ListGroupItem>
                        </ListGroup>

                        <h5 className="text-primary">Scala Weaknesses</h5>

                        <ListGroup>
                            <ListGroupItem>Null</ListGroupItem>
                            <ListGroupItem>Incomplete type inference</ListGroupItem>
                            <ListGroupItem>Unsound type system (?)</ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col sm={4}>
                        <h2>Scala Better</h2>

                        <h5 className="text-primary">Scala Strengths</h5>

                        <ListGroup>
                            <ListGroupItem>Mature ecosystem</ListGroupItem>
                        </ListGroup>

                        <h5 className="text-primary">Flix Weaknesses</h5>

                        <ListGroup>
                            <ListGroupItem>Lack of separate compilation</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <Table>
                            <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Flix</th>
                                <th>Scala</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">Null</th>
                                <td>N</td>
                                <td>
                                    <Row>
                                        <FaCheck style={{fontSize: '2em'}}/>
                                    </Row>
                                    <Row>
                                        <p className="text-muted">
                                            In Scala null is a subtype of any which can lead to null pointer
                                            exceptions.
                                        </p>

                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Polymorphic Effects</th>
                                <td>
                                    <FaTimes style={{fontSize: '1em'}}/>
                                    <p className="text-muted  w-50">
                                        Flix separates pure and impure code.
                                    </p>
                                </td>
                                <td>N</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>);
    }
}

export default Compare;
