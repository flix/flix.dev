import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

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
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                        </ul>

                    </Col>
                    <Col xs="5">
                        <Codebox/>
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
    render() {
        return (
            <Container>
                <select>
                    <option>abc</option>
                </select>
                <pre>
                def foo(): Int = 123
            </pre>
            </Container>
        );
    }
}

export default Home;
