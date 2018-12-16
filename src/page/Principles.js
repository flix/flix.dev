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

                    <Principle name="Safety First, Performance Second">
                        We value safety higher than performance. Unlike language such as C and C++ we are willing to
                        pay (small) performance overheads if it improves the safety and robustness of programs.
                        Two classical examples of this array bounds checks and garbage collection. In Flix we plan
                        to support additional safety mechanisms.

                        <br/>
                        <Badge>in progress</Badge>
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

                    <Principle name="Keyword-based Syntax">
                        The Flix syntax is inspired by Scala and Python. We believe in short keywords that make it
                        visually easy to identify the overall structure of a
                        piece of code.
                    </Principle>

                    <Principle name="Consistent Syntax">
                        Flix aims to have consistent syntax. For example, a function application is written as <code>f(a,
                        b, c)</code>. Similarly, a type application is written as <code>f[a, b, c]</code> mirroring the
                        syntax of the function application. In the samey way, a function expression is written as <code>x
                        -&gt; x + 1</code> and its type is written <code>Int -&gt; Int</code>.
                    </Principle>

                    <Principle name="Human-Readable Error Messages">
                        In the spirit of <a href="https://elm-lang.org/blog/compilers-as-assistants">Elm</a>, Clang, and
                        Rust, Flix aims to have human readable error message. We believe compiler messages should offer
                        rich detail about the problem at hand, including potentially relevant information know to the
                        compiler, and suggestions for how to correct the problem.
                        <br/>
                        <Badge>in progress</Badge>
                    </Principle>

                    <Principle name="Private Visibility by Default">
                        In Flix, declarations are assigned the least visibility by default.
                        That is, e.g. declarations cannot be accessed outside their own namespace (or a sub-namespace).
                        For a declaration to be globally visible it must explicitly be declared as public.
                        We believe this forces the programmer to make a choice about whether some definition or data
                        type
                        should be considered internal (the default) or available to other parts of the program.
                    </Principle>

                    <Principle name="Illegal States should be Unrepresentable.">

                        We believe that a good design should aim to make illegal states unrepresentable.
                        Ideally we enforce most of these properties in the type system. For example, with algebraic
                        data types we can easily define a type <code>Color</code> and that is has three variants
                        <code>Red</code>, <code>Green</code>, and <code>Blue</code>. The type system ensures that
                        nothing else is a color.

                        In Flix, we would like to take this further, and allow refinement on some types. For example,
                        we could express that not only must some type be an integer, but also that it must fall
                        within a range, e.g. <code>[0-99]</code>. Checking such refinement types at compile-time
                        is an open research problem, but in Flix we aim to at least provide the means to express
                        such invariants, and then to rely on run-time checks until the theory matures more.

                        <br/>
                        <Badge>in progress</Badge>
                    </Principle>

                    <Principle name="Nothing is Executed Before Main">
                        In Flix the <code>main</code> function is the entry point of the program.
                        No other (user-defined) code is executed before <code>main</code>.
                        This makes it easier to reason about startup behaviour, compared to say, Java where
                        things such as static initializers may be executed before entering <code>main</code>.
                    </Principle>

                    <Principle name="Standard Library">
                        We believe its important that a programming language provides a core library that has common
                        abstractions to provide better interoperability. Flix aims to provide a small core library
                        with the most common data types, e.g. <code>Option</code>, <code>List</code>, <code>Set</code>,
                        and <code>Map</code> along with their most common operations. On the other hand, we don't
                        believe that a standard library should be a kitchen-sink and provide everything.
                    </Principle>

                    <Principle name="Declare and then Use">
                        Flix requires things to be declared before they can be used.
                        Algebraic data types, functions, and other programming elements must be declared
                        before they can be used by other program parts. Declarations make it easy to assign blame.
                        We assume the declaration to be correct and then check any usage against its specification.
                        E.g. the cases of an algebraic data type or the arguments to a function.
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
