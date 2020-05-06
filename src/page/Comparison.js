import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";

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
                            <ListGroupItem>Null</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>

            </Container>);
    }
}

export default Compare;
