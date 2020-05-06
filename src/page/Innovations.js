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
                            We say that Flix is a next-generation programming language because it pioneers several new
                            features that are not found in any other contemporary programming language. However,
                            innovation is not a goal in itself; Flix also builds on decades of research in programming
                            language theory and relies on well-established theoretical foundations.
                        </p>

                        <h2>Polymorphic Effects with Boolean Unification</h2>

                        <p>
                            Flix comes with a polymorphic type and effect system. The effect system separates pure
                            and impure code, i.e. if an expression is pure then it cannot have a side-effect.
                        </p>

                        <p>
                            Flix supports <i>effect polymorphism</i> which means that the effect of a higher-order
                            function can depend on the effect of it(s) function argument(s). For example, the effect
                            of <code>List.map</code> depends on the effect of the function passed to it. That is,
                            if <code>List.map</code> is given a pure function then computation is pure, whereas if
                            it is given an impure function then computation is impure. As an another example,
                            the effect of <code>&gt;&gt;</code> (forward function composition) depends on <i>both</i> of
                            its arguments: composition is only pure if both functions are pure.
                        </p>

                        <p>
                            The Flix effect system is both fine-grained and expressive. It is fine-grained because it
                            precisely computes the purity of every expression (unlike other systems that may be
                            over-approximate). It is expressive because it allows arbitrary boolean formulas to describe
                            the effect of an expression. For example, the system can express a higher-order function
                            that requires <i>atmost</i> one impure function.
                        </p>

                        <p>
                            The Flix effect system supports <i>type and effect inference</i>. That is, explicit effect
                            annotations are not required for every program fragment. (However, as a design choice,
                            type and effect annotations are required for every top-level definition.)
                        </p>

                        <p>
                            The theory behind the Flix type and effect system is Hindley-Milner extended with boolean
                            constraints. Type inference is supported by an extension of Algorithm W with boolean
                            unification. For more details, we refer to our research papers.
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
