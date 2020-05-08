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
                            and impure code. If an expression is pure then it always evaluates to the same value and it
                            cannot have a side-effect. If a function is pure then it always evaluates to the same value
                            when given the same arguments.
                        </p>

                        <p>
                            Flix supports <i>effect polymorphism</i> which means that the effect of a higher-order
                            function can depend on the effect of its function arguments. For example, the effect
                            of <code>List.map</code> depends on the effect of the function passed to it. That is,
                            if <code>List.map</code> is given a pure function then computation is pure, whereas if
                            it is given an impure function then computation is impure. As an another example,
                            the effect of <code>&gt;&gt;</code> (forward function composition) depends on <i>both</i> of
                            its arguments: composition is only pure if both its function arguments are pure.
                        </p>

                        <p>
                            The Flix type and effect system is fine-grained and expressive. It is fine-grained because
                            it precisely captures the purity of every expression and sub-expression. It is expressive
                            because it allows arbitrary boolean formulas to describe
                            the effect of an expression. For example, the system can express that a higher-order
                            function requires <i>at most</i> one impure function.
                        </p>

                        <p>
                            The Flix type and effect system supports <i>type and effect inference</i>. That is, explicit
                            type or effect annotations are never required for any program fragment. (However, as a
                            design choice, type and effect annotations are required for every top-level definition.) The
                            inference is <i>complete</i> which means that it never infers the wrong type or effect, i.e.
                            annotations are never required to guide the type checker.
                        </p>

                        <p>
                            The theoretical foundation of the Flix type and effect system is based on the Hindley-Milner
                            type system extended with boolean constraints. Type inference is supported by
                            an extension of Algorithm W with boolean unification. For more details, we refer to our
                            research papers.
                        </p>

                        <h2>First-class Datalog Constraints</h2>

                        <p>
                            Datalog is a simple, yet surprisingly powerful, declarative logic programming language. A
                            Datalog program is a collection of constraints. Each constraint is either a fact or a rule.
                            A Datalog rule is logic formula that allows us to derive new facts from existing facts.
                        </p>

                        <p>
                            Every Datalog program has a unique solution; its so-called <i>minimal model</i>.
                            The minimal model always exists and is always computable, i.e. evaluation of a Datalog
                            program always terminates with the same solution. In Datalog, unlike in Prolog, the order
                            of constraints and of clauses within a rule is immaterial. That is, a Datalog program
                            can be freely reordered without changing its meaning.
                        </p>

                        <p>
                            Datalog, unlike Prolog, is <i>not</i> Turing-complete. In other words, there are a programs
                            that cannot be expressed in Datalog. This is useful because otherwise we would not have a
                            guarantee of termination and uniqueness.
                        </p>

                        <p>
                            Flix supports Datalog constraints as <i>first-class values</i> that can be passed around,
                            compose with other constraints, and solved. The solution (i.e. minimal model) of a
                            constraint set is another constraint set, hence it is possible to construct pipelines of
                            Flix programs. This enables Flix to be used as a meta-programming language for Datalog.
                        </p>

                        <p>
                            First-class Datalog constraints enable the programmer to express and solve complicated
                            reachability queries within Flix in a declarative and performant manner. Datalog constraints
                            enable a form of database programming within Flix.
                        </p>

                    </Col>
                </Row>

            </Container>);
    }
}

export default Innovations;
