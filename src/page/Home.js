import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import ReactGA from 'react-ga';
import {Link} from "react-router-dom";
import NewsData from '../data/News.js'
import Codebox from "../util/Codebox";

class Home extends Component {

    componentDidMount() {
        document.title = "The Flix Programming Language";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>
                <Row className="mb-3">
                    <Col md="6">
                        <h1>The Flix Programming Language</h1>

                        <h2 className="motto">Next-generation reliable, safe, concise, and functional-first programming
                            language.</h2>

                        <p>
                            Flix is a principled and flexible functional-, logic-, and imperative- programming language
                            that takes inspiration from F#, Go, OCaml, Haskell, Rust, and Scala. Flix looks like Scala,
                            but its type system is closer to that of OCaml and Haskell. Its concurrency model is
                            inspired by Go-style processes and channels.
                        </p>

                        <p>
                            Flix compiles to JVM bytecode, runs on the Java Virtual Machine, and supports full tail call
                            elimination.
                        </p>

                        <p>
                            Research on Flix explores connections between functional and logic programming in the
                            area of declarative fixpoint computations.
                        </p>

                        <p>
                            <Button color="success" tag={Link} to="/getting-started/">
                                Getting Started
                            </Button>

                            <a href="https://play.flix.dev/">
                                <Button color="info" className="ml-2">
                                    Play
                                </Button>
                            </a>

                            <Button outline color="info" tag={Link} to="/documentation/" className="ml-2">
                                Documentation
                            </Button>

                            <a href="https://flix.dev/api/">
                                <Button outline color="info" className="ml-2">
                                    Standard Library
                                </Button>
                            </a>
                        </p>

                    </Col>
                    <Col xs="6">
                        <Codebox flix={this.props.flix}/>
                    </Col>
                </Row>

                <hr className="mb-3"/>

                <Row className="mb-3">
                    <Col md="12">
                        <h2>Features at a Glance</h2>
                    </Col>
                    <Col md="4" style={{"fontSize": '1.2em'}}>
                        <ul>
                            <li>algebraic data types</li>
                            <li>pattern matching</li>
                            <li>first-class functions</li>
                            <li>extensible records</li>
                            <li>parametric polymorphism</li>
                            <li>Hindley-Milner type inference</li>
                            <li>opaque types and type aliases</li>
                            <li>keyword-based syntax</li>
                            <li>light-weight polymorphic effects</li>
                        </ul>
                    </Col>
                    <Col md="4" style={{"fontSize": '1.2em'}}>
                        <ul>
                            <li>CSP-style concurrency</li>
                            <li>buffered &amp; unbuffered channels</li>
                            <li>first-class datalog constraints</li>
                            <li>polymorphic datalog predicates</li>
                            <li>constraints with lattice semantics</li>
                            <li>stratified negation</li>
                            <li>interoperability with Java</li>
                            <li>unboxed primitives</li>
                            <li>redundancy checks</li>
                        </ul>
                    </Col>
                    <Col md="4" style={{"fontSize": '1.2em'}}>
                        <ul>
                            <li>monadic let* expressions</li>
                            <li>expressions holes</li>
                            <li>compilation to JVM bytecode</li>
                            <li>full tail call elimination</li>
                            <li>core standard library</li>
                            <li>parallel compiler architecture</li>
                            <li>human friendly errors</li>
                            <li>interactive mode</li>
                        </ul>
                    </Col>
                </Row>

                <hr className="mb-3"/>

                <Row className="mb-3">
                    <Col xs="6">
                        <h3>Recent News</h3>
                        <ul>
                            {NewsData().map(item =>
                                <li key={item.name}>
                                    {item.date} - {item.name}
                                    <br/>
                                </li>
                            )}
                        </ul>
                    </Col>

                    <Col xs="6">
                        <h3>Bread- and Butter Functional Programming</h3>

                        <p>
                            Flix supports the basic building blocks of typed functional programs:
                            algebraic data types, pattern matching, and parametric polymorphism (generics).
                            It uses a Hindley-Milner style type system which supports type inference within
                            a function. The type and effect separates pure and impure code with allowing effect
                            polymorphism. Its syntax is inspired by Scala with an emphasis on the use of keywords.
                        </p>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col xs="6">
                        <h3>Process and Channel-based Concurrency</h3>
                        <p>
                            Flix embraces a Go-style concurrency model based on processes and channels. Processes
                            communicate by sharing immutable messages which help prevent race conditions. The current
                            implementation is based on threads, but when the JVM gains support for light-weight
                            threads or continuations, we plan to switch to one of those.
                        </p>
                    </Col>

                    <Col xs="6">
                        <h3>Principled Design</h3>

                        It is our goal to build Flix on a solid foundation of ideas from programming language research.
                        In our design, we try to identify and guide ourselves by a collection of principles each
                        with a well-documented rationale. We want Flix to adopt great ideas from
                        languages such as F#, Go, OCaml, Haskell, Rust, and Scala.
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col xs="6">
                        <h3>Research and Flix</h3>

                        <p>
                            Flix is also a research project which explores various aspects of programming language
                            design.
                            A large part of the research is on connections between functional and logic programming,
                            specifically Datalog. Flix, as probably the only language in the world, supports first-class
                            Datalog constraints enriched with lattice semantics.
                        </p>
                    </Col>
                </Row>

                <hr className="mb-3"/>

                <Row className="mb-3 pb-3">
                    <Col xs="12">
                        <p className="small float-right">
                            We kindly thank <a href="https://www.ej-technologies.com/">EJ Technologies</a> for providing
                            us with <a
                            href="https://www.ej-technologies.com/products/jprofiler/overview.html">JProfiler</a> and <a
                            href="https://www.jetbrains.com/">JetBrains</a> for providing us with <a
                            href="https://www.jetbrains.com/idea/">IntelliJ IDEA</a>.
                        </p>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Home;
