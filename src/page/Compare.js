import React, {Component} from "react";
import ReactGA from "react-ga";
import {
    Button,
    Col,
    Container,
    Row,
    Table
} from "reactstrap";

class Compare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "Scala"
        }
    }

    changeLanguage(language) {
        this.setState({language: language});
    }

    componentDidMount() {
        document.title = "Flix | Compare";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>

                <Row className="mb-3">
                    <Col>
                        <h1>Flix compared to other programming languages</h1>

                        <p>
                            Here you will find a comparison of Flix to other programming languages. The comparisons aim
                            to be fair, but not unbiased. That is, for each comparison we aim to give a fair assessment,
                            but the choice of comparison points is biased. For example, we categorically believe that
                            static typing is better than dynamic typing.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-md-center mb-3">
                    <Button outline className="btn-sm mr-2" onClick={() => this.changeLanguage("OCaml")}>
                        OCaml
                    </Button>

                    <Button outline className="btn-sm mr-2" onClick={() => this.changeLanguage("Haskell")}>
                        Haskell
                    </Button>

                    <Button outline className="btn-sm mr-2" onClick={() => this.changeLanguage("Scala")}>
                        Scala
                    </Button>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <h2 className="text-center">Overview</h2>
                        <Table>
                            <thead>
                            <tr>
                                <th className="w-33"/>
                                <th className="w-33 text-center">Flix</th>
                                <th className="w-33 text-center">Scala</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <th scope="row">Paradigm</th>
                                <td>functional, imperative, logic</td>
                                <td>functional, imperative, object-oriented</td>
                            </tr>

                            <tr>
                                <th scope="row">Typing Discipline</th>
                                <td>strong, static, sound</td>
                                <td>strong, static, unsound</td>
                            </tr>

                            <tr>
                                <th scope="row">Concurrency</th>
                                <td>channel and process-based</td>
                                <td>threads</td>
                            </tr>

                            <tr>
                                <th scope="row">Platform</th>
                                <td>JVM</td>
                                <td>JVM</td>
                            </tr>

                            <tr>
                                <th scope="row">Type Inference</th>
                                <td>local, complete</td>
                                <td>local, incomplete</td>
                            </tr>

                            <tr>
                                <th scope="row">Polymorphic Effects</th>
                                {this.yes()}
                                {this.no()}
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <h2 className="text-center">Language Features</h2>
                        <Table>
                            <thead>
                            <tr>
                                <th className="w-33"/>
                                <th className="w-33 text-center">Flix</th>
                                <th className="w-33 text-center">Scala</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <th scope="row">Syntax</th>
                                <td>keyword-based with braces</td>
                                <td>keyword-based with braces</td>
                            </tr>

                            <tr>
                                <th scope="row">Primitive Types</th>
                                <td>Float32, Float64, Int8, Int16, Int32, Int64</td>
                                <td>Float32, Float64, Int8, Int16, Int32, Int64</td>
                            </tr>

                            <tr>
                                <th scope="row">Algebraic Data Types</th>
                                {this.yes()}
                                {this.yes("case classes")}
                            </tr>

                            <tr>
                                <th scope="row">Pattern Matching</th>
                                {this.yes()}
                                {this.yes("case classes")}
                            </tr>

                            <tr>
                                <th scope="row">Records</th>
                                {this.yes("row polymorphic")}
                                {this.no()}
                            </tr>

                            <tr>
                                <th scope="row">Opaque Types</th>
                                {this.yes()}
                                {this.yes()}
                            </tr>

                            <tr>
                                <th scope="row">Type Aliases</th>
                                {this.yes()}
                                {this.yes()}
                            </tr>

                            <tr>
                                <th scope="row">Uniform Function Call Syntax</th>
                                {this.yes()}
                                {this.no()}
                            </tr>

                            <tr>
                                <th scope="row">Monadic Notation</th>
                                {this.yes("let*")}
                                {this.yes("for-comprehensions")}
                            </tr>

                            <tr>
                                <th scope="row">Module System</th>
                                {this.red("None", "planned")}
                                {this.green("Yes", "objects, classes, traits")}
                            </tr>

                            <tr>
                                <th scope="row">User-Defined Operators</th>
                                {this.green("Yes")}
                                {this.green("Yes")}
                            </tr>

                            <tr>
                                <th scope="row">User-Defined Precedence</th>
                                {this.no()}
                                {this.no()}
                            </tr>


                            <tr>
                                <th scope="row">Implicit Coercions</th>
                                {this.green("No")}
                                {this.red("Yes")}
                            </tr>

                            <tr>
                                <th scope="row">
                                    Tail Call Elimination
                                    {this.note("A call in tail position never consumes stack space.")}
                                </th>
                                {this.green("Yes")}
                                {this.red("No")}
                            </tr>

                            <tr>
                                <th scope="row">
                                    Safe Nulls
                                    {this.note("The type system prevents dereference of null.")}
                                </th>
                                {this.no()}
                                {this.yellow("Yes", "with feature flag")}
                            </tr>

                            <tr>
                                <th scope="row">String Interpolation</th>
                                {this.yes("limited")}
                                {this.yes("extensive")}
                            </tr>

                            <tr>
                                <th scope="row">Raw Strings</th>
                                {this.no("planned")}
                                {this.yes()}
                            </tr>

                            <tr>
                                <th scope="row">Currying (by default)</th>
                                {this.yes()}
                                {this.no()}
                            </tr>

                            <tr>
                                <th scope="row">Variadic Arguments (Vargs)</th>
                                {this.no("by design")}
                                {this.yes()}
                            </tr>

                            <tr>
                                <th scope="row">Labelled Arguments</th>
                                {this.no("by design")}
                                {this.yes()}
                            </tr>

                            <tr>
                                <th scope="row">Reflection</th>
                                {this.no("by design")}
                                {this.yes()}
                            </tr>
                            <tr>
                                <th scope="row">Macros</th>
                                {this.no()}
                                {this.yes("several")}
                            </tr>

                            <tr>
                                <th scope="row">Runtime Performance</th>
                                <td>Aims to be with 1x-5x of Java</td>
                                <td>On par with Java</td>
                            </tr>

                            <tr>
                                <th scope="row">Other Notable Features</th>
                                <td>first-class Datalog constraints</td>
                                <td>implicit parameters, implicit conversions, type members, macros, union and
                                    intersection types
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <h2 className="text-center">Development Experience</h2>
                        <Table>
                            <thead>
                            <tr>
                                <th className="w-33"/>
                                <th className="w-33 text-center">Flix</th>
                                <th className="w-33 text-center">Scala</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <th scope="row">Integrated Development Environments (IDEs)</th>
                                {this.no()}
                                {this.yes("several")}
                            </tr>

                            <tr>
                                <th scope="row">Compiler Throughput</th>
                                <td>20,000 lines/sec</td>
                                <td>10,000 lines/sec</td>
                            </tr>
                            <tr>
                                <th scope="row">Incremental Compilation</th>
                                {this.no()}
                                {this.yes()}
                            </tr>
                            <tr>
                                <th scope="row">Parallel Compilation</th>
                                {this.yes()}
                                {this.no()}
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <h2 className="text-center">Philosophical Differences</h2>
                        <Table>
                            <thead>
                            <tr>
                                <th className="w-33"/>
                                <th className="w-33 text-center">Flix</th>
                                <th className="w-33 text-center">Scala</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <th scope="row">Global State</th>
                                {this.no()}
                                {this.yes()}
                            </tr>

                            <tr>
                                <th scope="row">Nothing is executed before main</th>
                                {this.yes()}
                                {this.no()}
                            </tr>

                            <tr>
                                <th scope="row">Error Model</th>
                                <td>Return values (e.g. <code>Result</code>)</td>
                                <td>Primarily Exceptions</td>
                            </tr>

                            <tr>
                                <th scope="row">Compiler Warnings</th>
                                <td>No warnings. Everything is an error.</td>
                                <td>Warnings and errors. Distinction unclear.</td>
                            </tr>

                            <tr>
                                <th scope="row">Separates Pure and Impure Code</th>
                                {this.yes("effect system")}
                                {this.no("but desired")}
                            </tr>

                            <tr>
                                <th scope="row">Feature Flags</th>
                                {this.no("by design")}
                                {this.yes("several")}
                            </tr>

                            <tr>
                                <th scope="row">Default Visibility</th>
                                <td>Private</td>
                                <td>Public</td>
                            </tr>

                            <tr>
                                <th scope="row">Unused and Dead Code</th>
                                <td>Compile-time Error</td>
                                <td>Sporadic Warnings</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>);
    }

    note(text) {
        return <p className="font-weight-normal text-muted small">({text})</p>
    }

    yes(text) {
        return this.green("Yes", text)
    }

    no(text) {
        return this.red("No", text)
    }

    green(text, comment) {
        if (comment === undefined)
            return (
                <td className="text-center">
                    <span className="font-weight-bold text-success">{text}</span>
                </td>);
        else
            return (
                <td className="text-center">
                    <span className="font-weight-bold text-success">{text}</span> <span
                    className="text-muted">({comment})</span>
                </td>
            );
    }

    yellow(text, comment) {
        if (comment === undefined)
            return (
                <td className="text-center">
                    <span className="font-weight-bold text-warning">{text}</span>
                </td>);
        else
            return (
                <td className="text-center">
                    <span className="font-weight-bold text-warning">{text}</span> <span
                    className="text-muted">({comment})</span>
                </td>
            );
    }


    red(text, comment) {
        if (comment === undefined)
            return (
                <td className="text-center">
                    <span className="font-weight-bold text-danger">{text}</span>
                </td>);
        else
            return (
                <td className="text-center">
                    <span className="font-weight-bold text-danger">{text}</span> <span
                    className="text-muted">({comment})</span>
                </td>
            );
    }

}

export default Compare;
