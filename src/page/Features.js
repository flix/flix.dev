import React, {Component} from 'react';

class Features extends Component {
    render() {
        return (
            <div>
                A functional and logic programming language inspired by Scala, OCaml, and Datalog.

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Languages Features</h3>
                            <ul>
                                <li><h4>Functional and Declarative</h4></li>
                                <li><h4>Algebraic Data Types</h4></li>
                                <li><h4>Pattern Matching</h4></li>
                                <li><h4>Namespaces</h4></li>
                                <li><h4>Parallel Rule Evaluation</h4></li>
                                <li><h4>Tail recursion optimization</h4></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h3>Additional Features</h3>
                            <ul>
                                <li><h4>Datalog Support</h4></li>
                                <li><h4>Stratified Negation</h4></li>
                                <li><h4>Standard Library</h4></li>
                                <li><h4>Static Type System</h4></li>
                                <li><h4>Formal Semantics</h4></li>
                                <li><h4>Scala and Prolog-style Syntax</h4></li>
                                <li><h4>Free &amp; Open Source</h4></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h3>Tools &amp; Ecosystem</h3>
                            <ul>
                                <li><h4>Integrated browser-based Debugger and Profiler</h4></li>
                                <li><h4>Built-in Delta Debugger</h4></li>
                                <li><h4>Built-in QuickChecker</h4></li>
                                <li><h4>Built-in Static Program Verifier</h4></li>
                                <li><h4>Runs on the Java Virtual Machine</h4></li>
                                <li><h4>Tutorials &amp; Documentation</h4></li>
                            </ul>
                        </div>
                    </div>
                </div>

                We kindly thank EJ Technologies for providing us with JProfiler and JetBrains for providing us with
                IntelliJ IDEA.


            </div>
        );
    }
}

export default Features;
