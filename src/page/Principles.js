import React, {Component} from 'react';
import {Card, CardText, CardBody, CardTitle, CardColumns, Badge} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';

import lipsum from 'lorem-ipsum';

class Principles extends Component {
    render() {
        return (
            <Container>
                <h1>Design Principles</h1>

                <p>
                    Flix embraces a set of design principles. The purpose is to outline these design principles and
                    relate them to other existing languages.
                    Understanding these principles will help you decide if Flix is something for you.
                    You will that many of these principles come from or are also embraced by languages such as Haskell,
                    OCaml, Rust, Elm, Scala.
                </p>

                <CardColumns>

                    <Principle name="Safety first, performance second">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                        <Badge>in progress</Badge>
                    </Principle>

                    <Principle name="    No order of declarations">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="No Implicit Coercions">

                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="   No global state.">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="     Keyword-based syntax">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="    Every function is curried">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="Local Type Inference">
                        The Flix type system is based on <a
                        href="https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system">Hindley-Milner</a> which
                        supports full type inference. However, as a design choice, we require all functions to be
                        annotated with their argument and return types. We believe that requiring these types signatures
                        has three benefits that outweigh the disadvantages:

                        <ol>
                            <li>It is useful as documentation and for understanding the code.</li>
                            <li>It accurately assigns blame for type errors.</li>
                            <li>It enables parallel type checking.</li>
                        </ol>
                    </Principle>

                    <Principle name="Uniform Function Call Syntax">
                        Flix supports <a href="https://en.wikipedia.org/wiki/Uniform_Function_Call_Syntax">Uniform
                        Function Call Syntax (UFCS)</a>. In Flix a function application is of the form: <code>f(a, b,
                        c)</code>, but UFCS allows us to adopt an object-oriented style for functions that "feel like"
                        they belong on an object. For example, we can get the length of a list
                        with <code>length(xs)</code> or using UFCS with <code>xs.length()</code>. In other words,
                        UFCS allows us to write any function <code>f(a, b, c)</code> as <code>a.f(b, c)</code>.
                        It is purely a syntactic mechanism and has no influence on the semantics of a call.
                    </Principle>

                    <Principle name="         Consistent syntax for expressions and types">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="Private Visibility by Default">
                        In Flix, declarations are assigned the least visibility by default.
                        That is, e.g. declarations cannot be accessed outside their own namespace (or a sub-namespace).
                        For a declaration to be globally visible it must explicitly be declared as public.
                        We believe this forces the programmer to make a choice about whether some definition or data
                        type
                        should be considered internal (the default) or available to other parts of the program.
                    </Principle>

                    <Principle name=" Simple is not easy, will not sacrifice a principle for practicality">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name=" Arbitrary-precision Arithmetic.">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="     Illegal states should be unrepresentable.">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                        <Badge>in progress</Badge>
                    </Principle>

                    <Principle name="No Nulls">
                        Flix does not have a special <code>null</code> value.
                        The presence of null as a subtype of any type is now widely considered a mistake.
                        The inventor of null, Sir Tony Hoare, has famously called it his billion dollar mistake.
                        Languages with null, such as C#, Dart, Kotlin, Scala, etc. are rapidly scrambling to adopt
                        mechanism to ensure non-nullness. In Flix, we adopt the standard solution to the represent
                        the absence of a value using the <code>Option</code> type. This solution is simple to
                        understand, works well, and guarantees the absence of dreaded <code>NullPointerException</code>s.
                    </Principle>

                    <Principle name="Nothing is Executed Before Main">
                        In Flix the <code>main</code> function is the entry point of the program.
                        No other (user-defined) code is executed before <code>main</code>.
                        This makes it easier to reason about startup behaviour, compared to say, Java where
                        things such as static initializers may be executed before entering <code>main</code>.
                    </Principle>

                    <Principle name="No Compiler Warnings, Only Compile-Time Errors">
                        The Flix compiler never emits warnings; only compile-time errors. The problem with warnings
                        is that they can be ignored or that people disagree on what warnings are important. For Flix
                        our goal is that anything that looks incorrect or troublesome should outright be rejected.
                        In this we are inspired by language such as Rust where e.g. dead code is considered not as a
                        warning,
                        but a compile-time error.
                    </Principle>

                    <Principle name="Human-Readable Error Messages">
                        In the spirit of <a href="https://elm-lang.org/blog/compilers-as-assistants">Elm</a>, Clang, and
                        Rust, Flix aims to have human readable error message. We believe compiler messages should offer
                        rich detail about the problem at hand, including potentially relevant information know to the
                        compiler, and suggestions for how to correct the problem.
                        <br/>
                        <Badge>in progress</Badge>
                    </Principle>

                    <Principle name="Pattern Matches must be Exhaustive">
                        Flix enforces that a pattern match handles all cases of an algebraic data type.
                        If a match is non-exhaustive, the program is rejected.
                    </Principle>

                    <Principle name="Dead and Unreachable Code is Rejected">
                        Flix aims to enforce that programs with dead and unreachable code are rejected, similarly to how
                        Rust rejects such code.
                        <br/>
                        <Badge>in progress</Badge>
                    </Principle>

                </CardColumns>
            </Container>
        );
    }
}

class Principle extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.name}</CardTitle>
                        <CardText>{this.props.children}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Principles;
