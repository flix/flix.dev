import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Editor from "../util/Editor";

class Home extends Component {
    render() {
        return (
            <Container>
                <Row className="mb-3">
                    <Col xs="7">
                        <h1>A typed functional programming language that runs on the JVM.</h1>

                        <p>
                            Flix is a principled and opinionated functional programming language that takes inspiration
                            from F#, Go, OCaml, Haskell, Rust, and Scala.
                        </p>

                        <p>
                            Flix visually resembles Scala, but its type system is closer to OCaml and Haskell.
                            Its concurrency model is based on Go-style processes and channels.
                        </p>

                        <p>
                            Flix runs on the Java Virtual Machine and compiles to JVM bytecode.
                            It uses a custom calling convention to guarantee full tail call elimination.
                            Its performance is close to Scala, but up to a factor two slower, for comparable programs.
                        </p>

                        <p>
                            Flix is also a research project exploring the connections between functional progrmaming and
                            declarative programming in the shape of Datalog.
                        </p>

                    </Col>
                    <Col xs="5">
                        <Codebox flix={this.props.flix}/>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md="12">
                        <h2>Features at a Glance</h2>
                    </Col>
                    <Col md="6">
                        <ul>
                            <li>algebraic data types &amp; pattern matching</li>
                            <li>first-class functions &amp; currying</li>
                            <li>parametric polymorphism</li>
                            <li>channel-based concurrency</li>
                            <li>first-class datalog constraints</li>
                        </ul>
                    </Col>
                    <Col md="6">
                        <ul>
                            <li>Hindley-Milner type inference</li>
                            <li>full tail call elimination</li>
                            <li>compilation to JVM bytecode</li>
                            <li>a standard library</li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col xs="6">
                        <h3>Bread- and Butter Functional Programming</h3>

                        <p>
                            Algebraic Data Types and Pattern Matching
                        </p>
                    </Col>
                    <Col xs="6">
                        <h3>Process and Channel-based Concurrency</h3>
                        <p>
                            Flix is a statically typed programming language with. Flix is a statically typed
                            programming
                            language with. Flix is a statically typed programming language with. Flix is a
                            statically
                            typed programming language with.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col xs="6">
                        <h3>Principled Design</h3>

                        <p>
                            Flix is a statically typed programming language with. Flix is a statically typed
                            programming
                            language with. Flix is a statically typed programming language with. Flix is a
                            statically
                            typed programming language with.
                        </p>
                    </Col>
                    <Col xs="6">
                        <h3>News</h3>
                    </Col>
                </Row>

                <Row>
                    <Col xs="12">

                        <h3>News</h3>

                        <div>
                            <div className="panel panel-info">
                                <div className="panel-heading"> Recent News</div>
                                <div className="panel-body">
                                    <ul>
                                        <li>
                                            2018-05-01 The paper <a href="https://flix.github.io/pub/cc2018/paper.pdf">Tail
                                            Call
                                            Elimination and Data Representation for Functional Languages on the Java
                                            Virtual
                                            Machine
                                        </a> is now available!
                                        </li>
                                        <li>
                                            2017-10-11 Flix <a href="https://github.com/flix/flix/releases/tag/v0.2">version
                                            0.2</a> is
                                            now available!
                                        </li>
                                        <li>
                                            2017-04-18 Flix <a href="https://github.com/flix/flix/releases/tag/v0.1">version
                                            0.1</a> is
                                            now available!
                                        </li>
                                        <li>2016-09-25 Ming-Ho Yee's master thesis <a
                                            href="https://flix.github.io/pub/theses/ming-ho-yee.pdf">
                                            Implementing a Functional Language for Flix
                                        </a> is now available.
                                        </li>
                                        <li>2016-09-13 The extended abstract
                                            <a href="https://flix.github.io/pub/tapas2016/abstract.pdf">
                                                Programming a Dataflow Analysis in Flix
                                            </a>
                                            from <a href="http://staticanalysis.org/tapas2016/">TAPAS 2016</a> is now
                                            available.
                                        </li>
                                        <li>2016-07-14 The poster <a
                                            href="https://flix.github.io/pub/ecoop2016/poster.pdf">
                                            Flix and its Implementation: A Language for Static Analysis</a> from ECOOP
                                            2016
                                            is now available!
                                        </li>
                                        <li>2016-07-14 The <a
                                            href="https://www.youtube.com/watch?v=9EC8gnKIUII">video</a> from
                                            PLDI 2016 is now online!
                                        </li>
                                        <li>2016-06-20 The <a
                                            href="https://flix.github.io/pub/pldi2016/slides.pdf">slides</a> from
                                            the presentation at PLDI 2016 are now available!
                                        </li>
                                        <li>2016-06-10 The first preview version of Flix is now available!
                                        </li>
                                        <li>2016-06-10 The paper <a
                                            href="https://flix.github.io/pub/pldi2016/paper.pdf">From
                                            Datalog to
                                            Flix: A Declarative Language for Fixed
                                            Points on Lattices</a> is now available.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

class Codebox extends Component {

    constructor(props) {
        super(props);
        let samples = [
            {
                name: "Hello World",
                code: `
// Returns a string which is printed.
def main(): Str = "Hello World!"
`
            },
            {
                name: "Working with Lists",
                code: `
def f(): Str = 1 :: 2 :: 3 :: Nil
`
            },
            {
                name: "Writing your own type",
                code: `
def f(): Str = 1 :: 2 :: 3 :: Nil
`
            },
            {
                name: "Using Spawn and Channels",
                code: `
def f(): Str = 1 :: 2 :: 3 :: Nil
`
            },
            {
                name: "Using Channels and Select",
                code: `
def main(): Unit = 
    let c = channel;
        spawn f(c);
    ()

def f(c: Channel[Int]): Unit = 
    select {
        case x <- c => ...
    }
`
            },
            {
                name: "Using First-class Constraints",
                code: `
def f(): Str = 1 :: 2 :: 3 :: Nil
`
            },
            {
                name: "Mutual Recursion with Full Tail-Call Elimination",
                code: `/// Flix, despite being a JVM-language, 
/// supports full tail call elimination.

/// We can demonstrate this with a naive implementation
/// of a program that computes whether a number is odd 
/// or even.

/// Returns true if n is odd.
def isOdd(n: Int): Bool = 
    if (n == 0) false else !isEvn(n - 1)

/// Returns true if n is even.
def isEvn(n: Int): Bool = 
    if (n == 0) true else !isOdd(n - 1)

/// We can now compute if 12345 is odd.
/// In a language without TCE this would
/// quick consume all stack space.
def main(): Bool = isOdd(123456)
`
            }
        ];
        this.state = {choice: 0, samples: samples};
    }

    onChange(event) {
        let newChoice = event.target.value;
        this.setState({choice: newChoice});
    }

    getExample() {
        let choice = this.state.choice;
        let sample = this.state.samples[choice];
        return <Editor flix={this.props.flix} code={sample.code} lines={14}>{sample.code}</Editor>
    }

    render() {
        return (
            <Container>
                <select className="mb-1" value={this.state.choice} onChange={this.onChange.bind(this)}>
                    {this.state.samples.map((sample, index) =>
                        <option key={index} value={index}>{sample.name}</option>)
                    }
                </select>
                {this.getExample()}
            </Container>
        );
    }
}

export default Home;
