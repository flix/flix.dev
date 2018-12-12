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
                        <h3>Something or other</h3>

                        <p>
                            Flix is a statically typed programming language with. Flix is a statically typed
                            programming
                            language with. Flix is a statically typed programming language with. Flix is a
                            statically
                            typed programming language with.
                        </p>
                    </Col>
                    <Col xs="6">
                        <h3>Something or other</h3>
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
                        <h3>Something or other</h3>

                        <p>
                            Flix is a statically typed programming language with. Flix is a statically typed
                            programming
                            language with. Flix is a statically typed programming language with. Flix is a
                            statically
                            typed programming language with.
                        </p>
                    </Col>
                    <Col xs="6">
                        <h3>Something or other</h3>
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
                    Copyright 2018
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
                name: "Recursion and Tail-call Elimination",
                code: `
def f(): Str = 1 :: 2 :: 3 :: Nil
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
        return <Editor flix={this.props.flix} code={sample.code} lines={10}>{sample.code}</Editor>
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
