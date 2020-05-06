import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, ListGroup, ListGroupItem, Row, Table} from "reactstrap";

class Compare extends Component {

    componentDidMount() {
        document.title = "Flix | Compare";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>

                <Row className="mb-3">
                    <Col>
                        <h1>Comparing: Flix versus Scala</h1>
                    </Col>
                </Row>

                <Row className="mb-3">

                    <Col sm={4}>
                        <h2>Flix Better</h2>

                        <h5 className="text-primary">Flix Strengths</h5>

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
                        <h2>Common</h2>

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
                                    Y<br/>
                                    In Scala null is a subtype of any which can lead to null pointer exceptions.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Polymorphic Effects</th>
                                <td>
                                    Y
                                    <br/>
                                    Flix separates pure and impure code.
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
