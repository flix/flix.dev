import React, {Component} from 'react';
import {Badge, Card, CardBody, CardColumns, CardTitle, Container} from 'reactstrap';
import ReactGA from 'react-ga';

class Principles extends Component {

    componentDidMount() {
        document.title = "Flix | Principles";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>
                <h1>Design Principles</h1>

                <p className="mb-3">
                    We believe that the development of a programming language should follow a set of principles.
                    That is, when a design decision is made there should exist some rationale for why that
                    decision was made. By outlining these principles, as we develop Flix, we hope to keep ourselves
                    honest and to communicate the kind of language Flix aspires to be.
                </p>

                <p className="mb-3">
                    Many of these ideas and principles come from languages that have inspired Flix, including Ada, Elm,
                    F#, Go, Haskell, OCaml, Rust, and Scala.
                </p>

                <CardColumns>

                    <Principle name="Simple is not easy">
                        We believe in Rich Hickey's creed: <a
                        href="https://www.infoq.com/presentations/Simple-Made-Easy">simple
                        is not easy</a>. We prefer a language that gets things right to one that makes things
                        easy. Such a language might take longer to learn in the short run, but its simplicity pays off
                        in the long run.
                    </Principle>

                    <Principle name="Everything is an expression">
                        Flix is a functional language and embraces the idea that everything should be an expression.
                        Flix has no local variable declarations or if-then-else statements, instead it has
                        let-bindings and if-then-else expressions.

                        However, Flix does not take this idea as far as the Scheme languages. Flix still has
                        declarations, namespaces, and so forth that are not expressions.
                    </Principle>

                    <Principle name="Developer productivity over runtime performance">
                        Flix aims to support developer productivity; the ability to do a lot with little ceremony or
                        boilerplate. A hand-crafted C program might run faster than a Flix program, but it won't be as
                        short, concise, or expressive as the Flix program. Flix aims to be a language with powerful
                        constructs and high-level abstractions. This does not mean that Flix is slow.
                    </Principle>

                    <Principle name="Correctness over performance">
                        Flix aims to ensure program correctness and considers it more important than raw performance.
                        Languages such as C and C++ often rely on undefined behaviour to achieve stellar performance,
                        whereas most other languages, including Flix, try to eschew undefined behaviour in favor of
                        runtime checks for things that are hard to statically ensure. For example, most languages will
                        dynamically check that array accesses are not out of bounds. The cost is a small performance
                        hit, but in our view the benefit towards correctness is immense. Inspired by Ada, Flix aims to
                        offer strong guarantees, ideally ensured statically, but when necessary with dynamic checks.
                    </Principle>

                    <Principle name="Principle of least surprise">
                        We should strive to adhere to the <a
                        href="https://en.wikipedia.org/wiki/Principle_of_least_astonishment">principle of least
                        surprise</a>. That is, we should favor sane defaults, and when there is no immediately obvious
                        default, we should not have a default at all, but force the programmer to be explicit about his
                        or her intention.
                    </Principle>

                    <Principle name="Local type inference">
                        The Flix type system is based on <a
                        href="https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system">Hindley-Milner</a> which
                        supports full type inference. As a design choice, we require all functions to be annotated with
                        their argument and return types. We believe that requiring type signatures has three distinct
                        advantages that outweigh the disadvantages.
                        <ol>
                            <li>Type signatures are useful as documentation and to aid program understanding.</li>
                            <li>Type signatures accurately assign blame for type errors.</li>
                            <li>Type signatures enable parallel type checking.</li>
                        </ol>
                        Of these, we think the former two are significantly more important than the latter.
                    </Principle>

                    <Principle name="Syntax vs. Semantics">
                        Syntax is important. Semantics are important. But we should not confuse the two. A syntactic
                        issue should not be resolved by a enrichment of the semantics. For example, <a
                        href=" https://en.wikipedia.org/wiki/Extension_method">extension methods</a> and <a
                        href="https://docs.scala-lang.org/overviews/core/implicit-classes.html">implicit
                        classes</a> seem to be semantic solutions to (mostly) syntactic issues. Flix aims to avoid such
                        pitfalls.
                    </Principle>

                    <Principle name="Uniform function call syntax">
                        Flix supports <a href="https://en.wikipedia.org/wiki/Uniform_Function_Call_Syntax">uniform
                        function call syntax (UFCS)</a>. In Flix, the syntax for function application is: <code>f(a, b,
                        c)</code>. UFCS enables an "object-oriented" style where we can write the same function
                        call as <code>a.f(b, c)</code>.
                        As another example, the function call <code>length(xs)</code> can also be written
                        as <code>xs.length()</code>. UFCS is a purely syntactic mechanism and does not influence the
                        semantics of a call.
                    </Principle>

                    <Principle name="Keyword-based syntax">
                        The Flix syntax is inspired by Scala. We believe that short key words make it
                        easy to visually identify the overall structure of a piece of code. Flix tries to use
                        three letter keywords were appropriate: <code>def</code>, <code>let</code>, <code>law</code>,
                        <code>rel</code>, but not for commonly established concepts: <code>if ... else </code>
                        and <code>match .... with</code>.
                    </Principle>

                    <Principle name="Consistent syntax">
                        Flix aims to have consistent and predictable syntax. As an example, we try to have the
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
                        Flix aims to have human readable and understandable compiler messages.
                        Messages should describe the problem in
                        detail and provide information about the context, including suggestions for how to correct
                        the problem.
                    </Principle>

                    <Principle name="Private by default">
                        Flix embraces the principle of least privilege. In Flix, declarations are hidden by default
                        (i.e. private) and cannot be accessed from outside of their namespace (or
                        sub-namespaces).
                        We believe it is important that programmers are forced to make a conscious
                        choice about when to make a declaration publicly visible.
                    </Principle>

                    <Principle name="Closed world assumption">
                        Flix requires all code to be available at compile-time. This enables a range of
                        compilation techniques, such as:

                        <ul>
                            <li>Monomorphization to avoid unnecessary boxing of primitives.</li>
                            <li>Aggressive dead code elimination ("tree shaking") to remove unused functions.</li>
                            <li>Inlining across namespaces.</li>
                            <li>Whole-program analysis.</li>
                        </ul>
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

                    <Principle name="No global state">
                        In Flix there is no global shared state.
                        This avoids a plethora of issues, including difficulties with initialization order and race
                        conditions in the presence of concurrency. A Flix programmer is free to construct some
                        state in the main function and pass it around, but there is no built-in mechanism to declare
                        global variables. In a real system, the programmer still has to deal with the state of
                        the world, e.g. the state of the file system, the network, and other resources.
                    </Principle>

                    <Principle name="Share memory by communicating">
                        Flix follows the Go mantra: <a href="https://blog.golang.org/share-memory-by-communicating"><i>Do
                        not communicate by sharing memory; instead, share memory by
                        communicating.</i></a> In other words: mutable memory should never be shared between processes.
                        Processes should only share immutable messages (and data structures). We believe this
                        significantly reduces the risk of <a href="https://en.wikipedia.org/wiki/Race_condition">race
                        conditions</a>.
                    </Principle>

                    <Principle name="Bugs are not recoverable errors">
                        We believe in the <a href="http://joeduffyblog.com/2016/02/07/the-error-model/">Midori Error
                        Model</a>; that is, there are two kinds of errors: <i>recoverable errors</i> and <i>program
                        bugs</i>. Recoverable errors are things like illegal user input, network errors, etc. Errors
                        that can be anticipated and where there is a chance of recovery. Program bugs, on the other
                        hand, are unanticipated and we cannot expect to recover from them. We should treat these two
                        types of errors differently: For recoverable errors, we should enforce that they are checked
                        and handled. For program bugs, we should terminate execution as quickly as possible to prevent
                        data corruption and security issues.
                    </Principle>

                    <Principle name="Fail fast, fail hard">
                        To aid debugging and prevent potential harmful behaviour, Flix aborts execution when an
                        unrecoverable error is encountered.

                        In the presence of concurrency, if a process fails, Flix aborts the entire program.
                        This ensures that the outside environment is duly notified and can take corrective action, e.g.
                        to restart the program.
                    </Principle>

                    <Principle name="No null value">
                        Flix does not have the <code>null</code> value. The null value is now widely considered a
                        mistake and languages such as C#, Dart, Kotlin and Scala are scrambling to adopt mechanisms to
                        ensure non-nullness.
                        In Flix, we adopt the standard solution from functional languages which is to represent
                        the absence of a value using the <code>Option</code> type. This solution is simple to
                        understand, works well, and guarantees the absence of dreaded <code>NullPointerException</code>s.
                    </Principle>

                    <Principle name="No implicit coercions">
                        In Flix, a value of one type is never implicitly coerced or converted into a value of another
                        type. For example,

                        <ul>
                            <li>No value is ever coerced to a boolean.</li>
                            <li>No value is ever coerced to a string.</li>
                            <li>Integers and floating-point are never truncated or promoted.</li>
                        </ul>
                    </Principle>

                    <Principle name="No reflection">
                        Flix does not support reflection, i.e. the ability to inspect the structure of the program
                        at run-time. Reflection tends to break the kind of program reasoning that both compilers and
                        humans rely on. At some point in the future, Flix might support some notion of compile-time
                        meta programming.
                    </Principle>

                    <Principle name="No warnings, only errors">
                        The Flix compiler never emits warnings; only compile-time errors which abort compilation.
                        Warnings can be ignored or turned off. People disagree on whether a warning is harmless or not.
                        For Flix, we believe that any code that appears troublesome or incorrect to the compiler should
                        outright be rejected.
                    </Principle>

                    <Principle name="No dead or unreachable code">
                        Inspired by <a href="https://doc.rust-lang.org/rust-by-example/attribute/unused.html">Rust</a>,
                        the Flix compiler will reject programs that contain dead or unreachable code. We believe
                        that rejecting such programs will help programmers avoid mistakes where some algebraic data
                        type or function is unintentionally left unused.
                    </Principle>

                    <Principle name="No unused variables">
                        Flix disallows unused local variables, whether they are introduced by let, introduced by pattern
                        matching, or part of the formal parameters of a function. Research [<a
                        href="https://dl.acm.org/citation.cfm?id=587060">1</a>] [<a
                        href="https://dl.acm.org/citation.cfm?id=1052895">2</a>] has repeatedly shown that minor
                        mistakes are a common source of bugs, e.g. using the wrong local variable. Disallowing unused
                        local variables help avoid such mistakes.
                    </Principle>

                    <Principle name="No variable shadowing">
                        Flix disallows variable shadowing for the same reasons why it disallows unused local variables:
                        it is a persistent and common source of minor mistakes leading to bugs.
                    </Principle>

                    <Principle name="No unprincipled overloading">
                        Flix does not support function overloading (using the same name for different functions).
                        Instead, Flix encourages the use of meaningful names,
                        e.g. <code>Map.filter</code> and <code>Map.filterWithKey</code>, for functions that share
                        similar functionality.
                    </Principle>

                    <Principle name="No variadic (varargs) functions">
                        Flix does not support variadic (varargs) functions. It is not clear to us how a language design
                        can support both currying and variadic functions cleanly. Moreover, it seems that the supposed
                        benefits of variadic functions is not that great in a language which already has concise syntax
                        for list and array literals.
                    </Principle>

                    <Principle name="Exhaustive pattern matches">
                        The Flix compiler enforces that pattern matches handle all cases of an algebraic data type.
                        If a match expression is found to be non-exhaustive, the program is rejected. We believe this
                        encourages more robust code and enables safer refactoring of algebraic data types.
                    </Principle>

                    <Principle name="No fashion-driven development">
                        A few years ago HTML was all the rage. Hence it was only natural that Java adopted HTML-style
                        comments. A bit later, XML was all the rage, hence it was only natural that Scala
                        added support for native XML literals. Today, JSON and Markdown are all the rage, but if
                        history is any guide, we should not add any special support for these to Flix.
                    </Principle>

                    <Principle name="No blessed library">
                        The Flix standard library is implemented in Flix. It has no special support from the compiler.
                        If you don't like it or if you don't need it, you can replace it.
                    </Principle>

                    <Principle name="Minimal prelude">
                        The Flix prelude contains algebraic data types and functions that are imported into every
                        compilation unit. Therefore we aim to keep the prelude very small and only include extremely
                        common functionality.
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
                        {this.props.children}
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Principles;
