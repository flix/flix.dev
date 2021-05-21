import React, {Component} from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row} from 'reactstrap';
import ReactGA from 'react-ga';
import {Link} from "react-router-dom";
import NewsData from '../data/News.js'
import Codebox from "../util/Codebox";
import InlineEditor from "../util/InlineEditor";

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

                        <p className="text-justify">
                            Flix is a principled functional, imperative, and logic programming language
                            developed at <a href="https://cs.au.dk/">Aarhus University</a>, at the <a
                            href="https://uwaterloo.ca/">University of Waterloo</a>, and by a community of <a
                            href="https://github.com/flix/flix">open source contributors</a>.
                        </p>

                        <p className="text-justify">
                            Flix is inspired by OCaml and Haskell with ideas from Rust and Scala. Flix looks like
                            Scala, but its type system is based on Hindley-Milner. Two unique features
                            of Flix are its polymorphic effect system and its support for first-class Datalog
                            constraints.
                        </p>

                        <p className="text-justify">
                            Flix compiles to efficient JVM bytecode, runs on the Java Virtual Machine, and supports full
                            tail call elimination.
                        </p>

                        <p>
                            A Visual Studio Code plugin for Flix is available.
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
                    <Col md={12}>

                        <h2>Why Flix? </h2>

                        <p className="p-2 text-justify">
                            Flix aims to offer a <span className="font-weight-bold text-success">unique combination of
                                features</span> that no other programming language offers, including: <span
                            className="font-weight-bold">algebraic
                                data types and pattern matching</span> (like Haskell, OCaml), <span
                            className="font-weight-bold">extensible records</span> (like Elm), <span
                            className="font-weight-bold">type classes</span> (like Haskell, Rust), <span
                            className="font-weight-bold">higher-kinded types</span> (like Haskell), <span
                            className="font-weight-bold">local type inference</span> (like Haskell, OCaml), <span
                            className="font-weight-bold">channel and process-based concurrency</span> (like Go), <span
                            className="font-weight-bold">a polymorphic effect system</span> (unique feature), and <span
                            className="font-weight-bold">first-class Datalog constraints</span> (unique feature),
                            and <span
                            className="font-weight-bold">compilation to JVM bytecode</span> (like Scala).
                        </p>

                    </Col>
                </Row>

                <hr className="mb-3"/>

                <Row className="mb-4">
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Algebraic Data Types and Pattern Matching</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Algebraic data types and pattern matching are the bread-and-butter of functional
                                        programming and are supported by Flix with minimal elegant syntax.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md="6">
                        <InlineEditor>
                            {`enum Shape {
    case Circle(Int32),
    case Square(Int32),
    case Rectangle(Int32, Int32)
}

def area(s: Shape): Int32 = match s {
    case Circle(r)       => 3 * (r * r)
    case Square(w)       => w * w
    case Rectangle(h, w) => h * w
}`}
                        </InlineEditor>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <InlineEditor>
                            {`def oneByOne():  {w: Int32, h: Int32} =
    {w = 1, h = 1}

def twoByFour(): {w: Int32, h: Int32} =
    {w = 2, h = 4}

def area(rect: {w: Int32, h: Int32 | r}): Int32 =
    rect.w * rect.h

def f(): Int32 = area({h = 1, color = "Blue", w = 2})
`}
                        </InlineEditor>
                    </Col>

                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Extensible Records</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Flix supports records with minimal fuss.
                                    </p>

                                    <p>
                                        Records are structural, easy to use, and extensible.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Type Classes and Higher-Kinded Types</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Flix supports type classes and higher-kinded types.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md="6">
                        <InlineEditor>
                            {`class Eq[a] {
    def eq(x: a, y: a): Bool
    def neq(x: a, y: a): Bool = not Eq.eq(x, y)
}

instance Eq[(a1, a2)] with Eq[a1], Eq[a2] {
    def eq(t1: (a1, a2), t2: (a1, a2)): Bool =
        let (x1, x2) = t1;
        let (y1, y2) = t2;
        x1 == y1 and x2 == y2
}`}
                        </InlineEditor>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <InlineEditor>
                            {`def inc1(x: Int32): Int32 & Pure = x + 1

def inc2(x: Int32): Int32 & Impure =
    println("x = \${x}");
    x + 1

def f(): Int32 & Impure = // f is impure
    let r1 = inc1(123);   // pure
    let r2 = inc2(456);   // impure
    r1 + r2               // pure`}
                        </InlineEditor>
                    </Col>

                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Polymorphic Effects</h4></CardTitle>
                                <CardText>
                                    <p>
                                        The Flix type and effect system tracks the purity (or impurity) of
                                        every expression &mdash; even in the presence of polymorphism.
                                    </p>

                                    <p>
                                        The Flix compiler provides an ironclad guarantee that when an expression is pure
                                        it cannot have (observable) side-effects and it supports equational reasoning.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>First-class Datalog Constraints</h4></CardTitle>
                                <CardText>
                                    <p>
                                        ...
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md="6">
                        <InlineEditor>
                            {`...`}
                        </InlineEditor>
                    </Col>
                </Row>

                <hr className="mb-3"/>

                <Row className="mb-3">
                    <Col md="12">
                        <h2>Complete Feature List</h2>
                    </Col>
                    <Col md="4">
                        <ul>
                            <li>algebraic data types</li>
                            <li>pattern matching</li>
                            <li>first-class functions</li>
                            <li>extensible records</li>
                            <li>parametric polymorphism</li>
                            <li>type classes</li>
                            <li>higher-kinded types</li>
                            <li>light-weight polymorphic effects</li>
                            <li>opaque types and type aliases</li>
                            <li>Hindley-Milner type inference</li>
                        </ul>
                    </Col>

                    <Col md="4">
                        <ul>
                            <li>CSP-style concurrency</li>
                            <li>buffered &amp; unbuffered channels</li>
                            <li>first-class datalog constraints</li>
                            <li>polymorphic datalog predicates</li>
                            <li>constraints with lattice semantics</li>
                            <li>stratified negation</li>
                            <li>interoperability with Java</li>
                            <li>unboxed primitives</li>
                            <li>keyword-based syntax</li>
                            <li>redundancy checks</li>
                        </ul>
                    </Col>

                    <Col md="4">
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
                                    <table className="table-sm">
                                        <tbody>
                                        {NewsData().map(item =>
                                            <tr key={item.name}>
                                                <td className="small" style={{"minWidth": "7em"}}>
                                                    {item.date.replaceAll("-", "–")}
                                                </td>
                                                <td>{item.name}</td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle>Bread- and Butter Functional Programming</CardTitle>
                                <CardText className="text-justify">
                                    Flix supports the basic building blocks of typed functional programs: algebraic data
                                    types, pattern matching, and parametric polymorphism (generics). It uses a
                                    Hindley-Milner style type system which supports type inference within a function.
                                    The type and effect separates pure and impure code while allowing effect
                                    polymorphism.
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
                                <CardText className="text-justify">
                                    It is our goal to build Flix on a solid foundation of ideas from programming
                                    language research. We aim to identify and document a collection of design
                                    principles. We try to adopt great and proven ideas from other programming languages
                                    such as F#, Go, OCaml, Haskell, Rust, and Scala.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle>Visual Studio Code Support</CardTitle>
                                <CardText className="text-justify">
                                    Flix supports integration with Visual Studio Code through LSP. This includes support
                                    for features such as: (i) inline compiler errors, (ii) hover to show the type and
                                    effect of an expression, (iii) jump to definition, (iv) find all usages of local
                                    variables, functions, algebraic data types, and (v) rename support.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <hr className="mb-3"/>

                <Row className="mb-3">
                    <Col md="12">
                        <h2>Sponsors and Funding</h2>
                    </Col>
                    <Col md="2">
                        <Card className="border-0 p-3 img-fluid">
                            <CardImg src="/logo/dff.png" alt="Independent Research Fund Denmark"/>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card className="border-0 p-3 img-fluid">
                            <CardImg src="/logo/aarhusu.png" alt="Aarhus University"/>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="border-0 p-3 img-fluid">
                            <CardImg src="/logo/uwaterloo.png" alt="University of Waterloo"/>
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
