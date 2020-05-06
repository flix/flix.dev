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
                            Flix supports polymorphic effects based on boolean unification. The effect system is used to
                            separate pure code from impure code. The system is fine-grained and expressive. By the
                            former, we mean that it can accurately assign effects to every sub-expression. By the
                            latter, we mean that it can precisely capture the effect behavior of polymorphic functions.
                            For example, it is possibly to precisely express the effect of functions such
                            as <code>map</code> and <code>&gt;&gt;</code> (forward function composition).
                        </p>

                        <h2>First-class Datalog Constraints</h2>

                        <p>
                            Flix supports Datalog constraints as first-class values that can be passed around, compose
                            with other constraints, and solved. The minimal model of constraint set is another
                            constraint set, hence it is possible to construct pipelines of Flix programs.
                        </p>

                    </Col>
                </Row>

            </Container>);
    }
}

export default Innovations;
