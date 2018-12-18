import React, {Component} from 'react';
import {Card, CardText, CardBody, CardTitle, CardColumns, Badge} from 'reactstrap';
import {Container} from 'reactstrap';

class Principles extends Component {
    render() {
        return (
            <Container>
                <h1>Design Principles</h1>

                <p className="mb-3">
                    We think that a programming language should followed a principled design.
                    That is, when a design decision is made, there should be some rationale for why that
                    decision was made. By outlining some of the principles that influence Flix,
                    we hope to keep ourselves honest and also to communicate to you what kind of language Flix is.
                </p>

                <p className="mb-3">
                    Many of these ideas and principles come from languages that have inspired Flix, including Ada, Elm,
                    Haskell, OCaml, Rust, and Scala.
                </p>

                <CardColumns>

                    <Principle name="Simple is not easy">
                        We believe in Rich Hickey's creed: <a
                        href="https://www.infoq.com/presentations/Simple-Made-Easy">simple
                        is not easy</a>. We prefer a language that gets things right to one that makes things
                        easy. Such a language might take longer to learn in the short run, but its simplicity pays of
                        in the long run.
                    </Principle>

                    <Principle name="Everything is an expression">
                        Flix is a functional language and embraces the idea that everything should be an expression.
                        Flix has no local variable declarations or if-then-else statements, instead it has
                        let-bindings and if-then-else expressions.

                        However, Flix does not take this idea as far as the Scheme languages. Flix still has
                        declarations, namespaces, and so forth that are not expressions.
                    </Principle>

                    <Principle name="Local type inference">
                        The Flix type system is based on <a
                        href="https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system">Hindley-Milner</a> which
                        supports full type inference. As a design choice, we require all functions to be annotated with
                        their argument and return types. We believe that requiring type signatures has three distinct
                        advantages the outweigh the disadvantages.
                        <ol>
                            <li>Type signatures are useful as documentation and to aid program understanding.</li>
                            <li>Type signatures more accurately assign blame.</li>
                            <li>Type signatures enable parallel type checking.</li>
                        </ol>
                        Of these, we think the former two are significantly more important than the latter.
                    </Principle>

                    <Principle name="Uniform function call syntax">
                        Flix supports <a href="https://en.wikipedia.org/wiki/Uniform_Function_Call_Syntax">uniform
                        function call syntax (UFCS)</a>. In Flix, the syntax for function application is: <code>f(a, b,
                        c)</code>. UFCS enables an "object-oriented" style where we can write the same function
                        call as <code>a.f(b, c)</code>.
                        <br/>
                        For example, the function call <code>length(xs)</code> can also be written
                        as <code>xs.length()</code>. UFCS is a purely syntatic mechanism and does not influence the
                        semantics of a call.
                    </Principle>

                    <Principle name="Keyword-based syntax">
                        The Flix syntax is inspired by Scala and Python. We believe that short key words make it
                        easy to visually identify the overall structure of a piece of code. Flix tries to use
                        three letter keywords were appropriate: <code>def</code>, <code>let</code>, <code>law</code>,
                        <code>rel</code>, but not for commonly established concepts: <code>if ... else </code>
                        and <code>match .... with</code>.
                    </Principle>

                    <Principle name="Consistent syntax">
                        Flix aims to have consistent and predictable syntax. As a concrete example, we try to have the
                        syntax of types mirror that of expressions:
                        <ul>
                            <li>
                                A function application is written as <code>f(a, b, c)</code> whereas a type application
                                is written as <code>f[a, b, c]</code>.
                            </li>
                            <li>
                                A function expression is written as <code>x -&gt; x + 1</code> whereas a function type
                                is written as <code>Int -&gt; Int</code>.
                            </li>
                            <li>
                                A tuple is written as <code>(true, 12345)</code> whereas a tuple type
                                is written as <code>(Bool, Int)</code>.
                            </li>
                        </ul>
                    </Principle>

                    <Principle name="Human-readable errors">
                        In the spirit of <a href="https://elm-lang.org/blog/compilers-as-assistants">Elm</a> and <a
                        href="https://blog.rust-lang.org/2016/08/10/Shape-of-errors-to-come.html">Rust</a>,
                        Flix aims to have human readable compiler messages. Messages should describe the problem in
                        detail and provide information about the context, including suggestions for how to correct
                        the problem.
                    </Principle>

                    <Principle name="Private by default">
                        Flix embraces the principle of least privilege. In Flix, declarations are by default
                        hidden (i.e. private) and cannot be accessed from outside of their namespace (or
                        sub-namespaces). We believe it is important that programmers are forced to make a conscious
                        choice about whether to make a declaration publicly visible.
                    </Principle>

                    <Principle name="Illegal states should be unrepresentable">
                        We believe that a language should make it easy to make illegal states unrepresentable.
                        For example, algebraic data types can be used to precisely define the possible values of a type.
                        In Flix, in the future, we want to take this a step further, and allow refinement of some types.
                        For example, to express that some value must not only be an integer, but also that it must
                        fall within a range, e.g. <code>[0-99]</code>.
                        <br/>
                        <Badge>in progress</Badge>
                    </Principle>

                    <Principle name="Nothing is executed before main">
                        In Flix, <code>main</code> is the entry point of a program.
                        No (user-defined) code is ever executed before <code>main</code>.
                        No static initializers, no static fields. No class loaders. Main is always first.
                        This makes it easy to reason about startup behavior.
                    </Principle>

                    <Principle name="Small, but comprehensive standard library">
                        Flix has a small standard library with a few common data types,
                        e.g. <code>Option</code>, <code>List</code>, <code>Set</code>,
                        and <code>Map</code>, but for these it offers a comprehensive collection of functionality.
                        For example, the standard library has more than 65 functions for working with lists.
                        We want the standard library to offer a common set of abstractions which are usable
                        by most programs, but not much else.
                    </Principle>

                    <Principle name="Declare before use">
                        In Flix things must be defined before they can be used.
                        Algebraic data types, functions, local variables, and other programming elements must be
                        declared before they can be used by other program parts. Declarations make it easy to assign
                        blame; we assume declarations to be correct and check every use against its declaration.
                        For example, an algebraic data type declares a set of cases, and the compiler checks that
                        every use refers to one of these cases, and that every case is covered.
                    </Principle>

                    <Principle name="No Undefined Behaviour">
                        We value safety higher than performance. Unlike language such as C and C++ we are willing to
                        pay (small) performance overheads if it improves the safety and robustness of programs.
                        Two classical examples of this array bounds checks and garbage collection. In Flix we plan
                        to support additional safety mechanisms.

                        <br/>
                        <Badge>in progress</Badge>
                    </Principle>

                    <Principle name="No Global State">
                        In flix there is no global state.
                        This avoids a large class of problems related to initialization,
                        dependencies, and concurrency.
                        A flix programmer is of course free construct some state in the main function
                        and pass this throughout the program, but there is no built-in mechanism to declare
                        a global variable.

                        Of course a real system still has to deal with some global state since the file system,
                        network, etc. is all part of a larger global state.
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

                    <Principle name="No Implicit Coercions">
                        In flix a value of one type is never coerced or converted into another type automatically.
                        For example,

                        <ul>
                            <li>Only booleans may be used in an if-then-else expression.</li>
                            <li>Integers are never truncated or promoted.</li>
                            <li>Values are never coerced to strings.</li>
                        </ul>
                    </Principle>

                    <Principle name="No Compiler Warnings, Only Compile-Time Errors">
                        The Flix compiler never emits warnings; only compile-time errors. The problem with warnings
                        is that they can be ignored or that people disagree on what warnings are important. For Flix
                        our goal is that anything that looks incorrect or troublesome should outright be rejected.
                        In this we are inspired by language such as Rust where e.g. dead code is considered not as a
                        warning,
                        but a compile-time error.
                    </Principle>

                    <Principle name="Dead and Unreachable Code is Rejected">
                        Flix aims to enforce that programs with dead and unreachable code are rejected, similarly to how
                        Rust rejects such code.
                        <br/>
                        <Badge>in progress</Badge>
                    </Principle>

                    <Principle name="Pattern Matches must be Exhaustive">
                        Flix enforces that a pattern match handles all cases of an algebraic data type.
                        If a match is non-exhaustive, the program is rejected.
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
