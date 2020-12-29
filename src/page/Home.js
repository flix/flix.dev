import React, {Component} from 'react';
import {Button, Card, CardBody, CardText, CardTitle, Col, Container, Row} from 'reactstrap';
import ReactGA from 'react-ga';
import {Link} from "react-router-dom";
import NewsData from '../data/News.js'
import Codebox from "../util/Codebox";

class Home extends Component {

    componentDidMount() {
        document.title = "The Flix Programming Language";
        ReactGA.pageview(window.location.pathname);
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
                            <Button color="success" tag={Link} to="/get-started/">
                                Install
                            </Button>

                            <a href="https://play.flix.dev/">
                                <Button color="info" className="ml-2">
                                    Play
                                </Button>
                            </a>

                            <Button outline color="info" tag={Link} to="/documentation/" className="ml-2">
                                Docs
                            </Button>

                            <a href="https://api.flix.dev/">
                                <Button outline color="info" className="ml-2">
                                    Library
                                </Button>
                            </a>
                        </p>

                    </Col>
                    <Col md="6">
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
                            <li>Visual Studio Code support</li>
                        </ul>
                    </Col>
                </Row>

                <hr className="mb-3"/>

                <Row className="mb-4">
                    <Col md={6}>
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle>Recent News</CardTitle>
                                <CardText>
                                    <ul>
                                        {NewsData().map(item =>
                                            <li key={item.name}>
                                                {item.date} - {item.name}
                                                <br/>
                                            </li>
                                        )}
                                    </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle>Bread- and Butter Functional Programming</CardTitle>
                                <CardText>
                                    Flix supports the basic building blocks of typed functional programs: algebraic data
                                    types, pattern matching, and parametric polymorphism (generics). It uses a
                                    Hindley-Milner style type system which supports type inference within a function.
                                    The type and effect separates pure and impure code with allowing effect
                                    polymorphism. Its syntax is inspired by Scala with an emphasis on the use of
                                    keywords.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md={6}>
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle>Principled Design</CardTitle>
                                <CardText>
                                    It is our goal to build Flix on a solid foundation of ideas from programming
                                    language research. In our design, we try to identify and guide ourselves by a
                                    collection of principles each with a well-documented rationale. We want Flix to
                                    adopt great ideas from languages such as F#, Go, OCaml, Haskell, Rust, and Scala.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle>Visual Studio Code Support</CardTitle>
                                <CardText>
                                    The Flix compiler supports integration with Visual Studio Code through the Language
                                    Server Protocol. This includes features such as: (i) inline compiler errors, (ii)
                                    hover to show the type and effect of an expression, (iii) jump to definition, (iv)
                                    find all usages of local variables, functions, algebraic data types, and (v) rename
                                    support.
                                </CardText>
                            </CardBody>
                        </Card>
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
