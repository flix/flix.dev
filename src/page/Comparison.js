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
                        <h1>Compare</h1>

                        Comparing Flix to Scala
                    </Col>
                </Row>

                <Row className="mb-3">

                    <Col sm={4}>
                        <h4>Flix Strengths</h4>

                        <ListGroup>
                            <ListGroupItem>Access to Java Ecosystem</ListGroupItem>
                            <ListGroupItem>Sound Type System</ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col sm={4}>
                        <h4>Common Strengths</h4>

                        <ListGroup>
                            <ListGroupItem>Keyword-based Syntax</ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col sm={4}>
                        <h4>Flix Weaknesses</h4>

                        <ListGroup>
                            <ListGroupItem>Null</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>

            </Container>);
    }
}

export default Compare;
