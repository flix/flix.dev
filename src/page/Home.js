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
