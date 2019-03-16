import React, {Component} from 'react';
import {Container, Row, Col, Badge} from 'reactstrap';
import Editor from "../util/Editor";
import ReactGA from 'react-ga';

import NewsData from '../data/News.js'
import SamplesData from '../data/Samples.js'

class Home extends Component {

    componentDidMount() {
        document.title = "The Flix Programming Language";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>
                <Row className="mb-3">
                    <Col xs="6">
                        <h1>The Flix Programming Language</h1>

                        <p>
                            Flix is a principled and opinionated functional programming language that takes inspiration
                            from F#, Go, OCaml, Haskell, Rust, and Scala.
                        </p>

                        <p>
                            Flix visually resembles Scala, but its type system is closer to that of OCaml and Haskell.
                            Its concurrency model is inspired by Go-style processes and channels.
                        </p>

                        <p>
                            Flix compiles to JVM bytecode and runs on the Java Virtual Machine.
                            Flix supports full tail call elimination which means that tail calls (even to other
                            functions) never overflow the stack.
                        </p>

                        <p>
                            Flix performance is typically within 1-3x of equivalent Scala code.
                        </p>

                        <p>
                            Research on Flix explores connections between functional and logic programming in the
                            area of declarative fixpoint computations.
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
                        </ul>
                    </Col>
                    <Col md="4" style={{"fontSize": '1.2em'}}>
                        <ul>
                            <li>CSP-style concurrency</li>
                            <li>buffered &amp; unbuffered channels</li>
                            <li>first-class datalog constraints</li>
                            <li>polymorphic datalog predicates</li>
                            <li>stratified negation</li>
                            <li>unboxed primitives</li>
                        </ul>
                    </Col>
                    <Col md="4" style={{"fontSize": '1.2em'}}>
                        <ul>
                            <li>expressions holes</li>
                            <li>full tail call elimination</li>
                            <li>compilation to JVM bytecode</li>
                            <li>core standard library</li>
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
                            a function. Its syntax is inspired by Scala with an emphasis on the use of keywords.
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
                        <h3>Planned Features</h3>

                        <p>
                            At the moment, Flix has the feature set of a ML-style language. We are actively working
                            on adding support for two features essential to real-world programming:
                            an abstraction mechanism based on <a href="https://en.wikipedia.org/wiki/Type_class">type
                            classes</a> and an <a href="https://en.wikipedia.org/wiki/Effect_system">effect
                            system</a> to allow safe interaction with the outside world.
                        </p>
                    </Col>

                    <Col xs="6">
                        <h3>Research and Flix</h3>

                        <p>
                            Flix is also a research project which explores various aspects of programming language
                            design.
                            A large part of the research is on connections between functional and logic programming,
                            specifically Datalog. Flix, as probably the only language in the world, supports first-class
                            Datalog constraints enriched with lattice semantics.
                        </p>

                        <p>
                            For more information, we refer to our research papers.
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
        ReactGA.event({
            category: 'Codebox',
            action: 'Selected an example',
            label: this.state.samples[newChoice].name
        });
    }

    getEditor() {
        let choice = this.state.choice;
        let sample = this.state.samples[choice];
        // NB: The use of the key ensures that the editor is refreshed when the dropdown is changed.
        return <Editor key={sample.name} flix={this.props.flix} code={sample.code} lines={18}>{sample.code}</Editor>
    }

    isConnected() {
        if (this.props.flix.connected) {
            return <Badge color="info" className="float-right mt-1">Connected</Badge>
        } else {
            return <Badge color="secondary" className="float-right mt-1">Disconnected</Badge>
        }
    }

    render() {
        return (
            <Container>
                <select className="mb-2" value={this.state.choice} onChange={this.onChange.bind(this)}>
                    {this.state.samples.map((sample, index) =>
                        <option key={index} value={index}>{sample.name}</option>)
                    }
                </select>
                {this.isConnected()}
                {this.getEditor()}
            </Container>
        );
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default Home;
