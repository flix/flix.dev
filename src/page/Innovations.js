import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";

class Innovations extends Component {

    componentDidMount() {
        document.title = "Flix | Innovations";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>
                <Row className="mb-3">
                    <Col sm={12} md={8}>

                        <h1>Innovations</h1>

                        <p>
                            We say that Flix is a next-generation reliable, safe, concise, and functional-first
                            programming language because it pioneers several new features that are not found in any
                            other contemporary programming language. This includes the rigorous application of ideas
                            firmly established in programming language theory and the invention of completely new
                            features.
                        </p>

                        <h2>Polymorphic Effects</h2>

                        <p>
                            TODO
                        </p>

                        <h2>First-class Datalog Constraints</h2>

                        <p>
                            TODO
                        </p>

                    </Col>
                </Row>

            </Container>);
    }
}

export default Innovations;
