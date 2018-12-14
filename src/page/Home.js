import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Editor from "../util/Editor";

import NewsData from '../data/News.js'
import SamplesData from '../data/Samples.js'

class Home extends Component {
    render() {
        return (
            <Container>
                <Row className="mb-3">
                    <Col xs="6">
                        <h1 className="font-weight-bold">A functional programming language that runs on the JVM.</h1>

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
                    <Col xs="6">
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
                        <h3>Bread- and Butter Functional Programming</h3>

                        <p>
                            Flix supports the basic building blocks of most typed functional programming languages:
                            algebraic data types, pattern matching, and parametric polymorphism (generics).
                            Knowledge of just these three features makes it easy to get started on writing
                            real programs in flix.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col xs="6">
                        <h3>Safety First</h3>

                        <p>
                            With Flix, we are trying to design a programming language that puts program correctness
                            first. For example, flix does not support nulls to prevent null pointer exceptions. Flix has
                            no global mutable state. Flix discourages mutable state. We believe an expressive type
                            system can be used to prevent many programming errors, and so forth.
                        </p>
                    </Col>
                    <Col xs="6">
                        <h3>Process and Channel-based Concurrency</h3>
                        <p>
                            Flix embraces Go-style concurrency with processes and channels which is also known as the <a
                            href="https://en.wikipedia.org/wiki/Communicating_sequential_processes">communicating
                            sequential process (CSP)</a> model. Processes communicate by sharing immutable messages
                            which helps prevent some race conditions. In the current implementation, processes are
                            backed by threads, but when/if the JVM gains more lightweight green-threads or fibers, we
                            plan to switch to those.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col xs="6">
                        <h3>News</h3>
                        <ul>
                            {NewsData().map(item =>
                                <li>
                                    {item.date} - {item.name}
                                    <br/>
                                </li>
                            )}
                        </ul>
                    </Col>

                    <Col xs="6">
                        <h3>Flix for Research</h3>

                        <p>
                            Flix is also a language for research exploring various aspects of programming language
                            design. A large part of the research on Flix is on connections between functional
                            programming
                            and logic programming in the form of Datalog. Flix, as probably the first language, features
                            first-class Datalog constraints enriched with lattice semantics.

                            We believe these features make Flix an interesting platform for experimentation with
                            and implementation of program analyses as these often rely on fixpoint computation.
                            For more information on this aspect of flix, we refer to our research papers.

                        </p>

                    </Col>
                </Row>

            </Container>
        );
    }
}

class Codebox extends Component {

    constructor(props) {
        super(props);
        let samples = SamplesData();
        let randomChoice = getRandomInt(samples.length);
        this.state = {choice: randomChoice, samples: samples};
    }

    onChange(event) {
        let newChoice = event.target.value;
        this.setState({choice: newChoice});
    }

    getEditor() {
        let choice = this.state.choice;
        let sample = this.state.samples[choice];
        // NB: The use of the key ensures that the editor is refreshed when the dropdown is changed.
        return <Editor key={sample.name} flix={this.props.flix} code={sample.code} lines={18}>{sample.code}</Editor>
    }

    render() {
        return (
            <Container>
                <select className="mb-2" value={this.state.choice} onChange={this.onChange.bind(this)}>
                    {this.state.samples.map((sample, index) =>
                        <option key={index} value={index}>{sample.name}</option>)
                    }
                </select>
                {this.getEditor()}
            </Container>
        );
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default Home;
