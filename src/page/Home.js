import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Editor from "../util/Editor";

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="7">
                        <h1>A functional programming language with emphasis on safety.</h1>

                        <p>

                            Flix is a statically typed functional- and logic programming language inspired by Scala,
                            OCaml, F#,
                            Haskell, and Datalog. The syntax of Flix resembles Scala and Datalog. The type system
                            supports local
                            type inference and is based on Hindley-Milner. Flix runs on the Java Virtual Machine and
                            compiles
                            directly to JVM bytecode. Flix supports hybrid functional and logic programming featuring a
                            built-in
                            fixed point engine based on semi-naive evaluation. The functional and logic languages can be
                            used
                            independently, if so desired. For example, a Flix program can be purely functional, or Flix
                            can be used
                            as a standalone Datalog engine.

                        </p>

                        <h2>Features</h2>

                        <ul>
                            <li>algebraic data types &amp; pattern matching</li>
                            <li>parametric polymorphism</li>
                            <li>channel-based concurrency</li>
                            <li>Hindley-Milner type inference</li>
                            <li>first-class datalog constraints</li>
                            <li>full tail call elimination</li>
                            <li>standard library</li>
                            <li>compilation to JVM bytecode</li>
                        </ul>

                    </Col>
                    <Col xs="5">
                        <Codebox flix={this.props.flix}/>
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
def main(): Str = "Hello World!"`
            },
            {
                name: "Working with Lists",
                code: `def main(): Str =fdafds`
            },
            {
                name: "Writing your own type",
                code: `def main(): Str = "abc!"`
            },
            {
                name: "Using Spawn and Channels",
                code: `def main(): Str = "Hfs!"`
            },
            {
                name: "Using Channels and Select",
                code: `def main(): Str = fsa"`
            },
            {
                name: "Using First-class Constraints",
                code: `def main(): Str = faWorld!"`
            },
            {
                name: "Recursion and Tail-call Elimination",
                code: `def main(): Str = fallo World!"`
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
