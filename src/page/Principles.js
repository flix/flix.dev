import React, {Component} from 'react';
import {Badge, Card, CardBody, CardColumns, CardTitle, Container} from 'reactstrap';
import ReactGA from 'react-ga';

class Principles extends Component {

    componentDidMount() {
        document.title = "Flix | Principles";
        ReactGA.pageview(window.location.pathname);
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

                <h2 className="mt-3">Language Principles</h2>

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

                    <Principle name="Separate pure and impure code">
                        Flix supports functional, imperative, and logic programming. The type and effect system of Flix
                        cleanly and safely separates pure code from impure code. That is, if a function is pure then the
                        programmer can trust that the function behaves like a mathematical function: it returns the same
                        value when given the same arguments and it has no side-effects.
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

                    <Principle name="One language">
                        Flix is <i>one</i> programming language. The Flix compiler does not have feature flags or
                        compiler plugins that change or extend the semantics of the language. We want to avoid
                        fragmentation in the ecosystem where programs end up being written in different "dialects" of
                        the language. There is one language, now and forever. Of course that does not imply that the
                        language will not evolve over time.
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

                    <Principle name="Type parameter elision">
                        While we require type signatures, we also believe that such signatures should be as minimal
                        as possible. Thus, while the full type signature of <code>List.map</code> is <code>def map[a,
                        b](f: a -{'>'} b, xs: List[a]): List[b]</code>, we can use <i>type parameter elision</i> to write it
                        simply as: <code>def map(f: a -{'>'} b, xs: List[a]): List[b]</code> omitting the type arguments.
                    </Principle>

                    <Principle name="Syntax vs. Semantics">
                        Syntax is important. Semantics are important. But we should not confuse the two. A syntactic
                        issue should not be resolved by a enrichment of the semantics. For example, <a
                        href=" https://en.wikipedia.org/wiki/Extension_method">extension methods</a> and <a
                        href="https://docs.scala-lang.org/overviews/core/implicit-classes.html">implicit
                        classes</a> seem to be semantic solutions to (mostly) syntactic issues. Flix aims to avoid such
                        pitfalls.
                    </Principle>

                    <Principle name="Keyword-based syntax">
                        The Flix syntax is inspired by Scala. We believe that short key words make it
                        easy to visually identify the overall structure of a piece of code. Flix tries to use
                        three letter keywords where appropriate: <code>def</code>, <code>let</code>, <code>law</code>,
                        <code>rel</code>, but not for commonly established concepts: <code>if ... else </code>
                        and <code>match</code>.
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

                    <Principle name="No unnecessary declarations">
                        We believe that a programming language should reduce the volume of declarations
                        it <i>requires</i>. Declarations may be useful and are sometimes necessary, but Flix aims to
                        minimize its internal dependence on them. To give an example, Flix supports <i>extensible
                        records</i> which permits the usage of flexible and type-safe records <i>without</i> a strict
                        requirement that record types must be declared upfront.
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

                    <Principle name="No pre-processor">
                        Flix does not have and will not have a pre-processor. Programs that use pre-processing for
                        textual code generation are notoriously difficult to understand and debug. We want to avoid
                        that for Flix. Instead, Flix may some day have a macro system, but so far there has been little
                        need.
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

                    <Principle name="No unused declarations">
                        Inspired by <a href="https://doc.rust-lang.org/rust-by-example/attribute/unused.html">Rust</a>,
                        the Flix compiler will reject programs that contain unused declarations. We believe
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

                    <Principle name="No labelled function arguments">
                        Flix does not support labelled function arguments. The motivation for labelled arguments is a
                        reasonable: to avoid calling a function with arguments of the same type, but in the wrong order.
                        Unfortunately, labelled function arguments do not work in the presence of higher-order
                        functions. Instead, we suggest to overcome the problem by either (i) using richer types
                        (e.g. <code>Celsius</code> instead of <code>Int</code>) or alternatively (ii) using record types
                        which can be used to emulate the same functionality and works with higher-order functions.
                    </Principle>

                    <Principle name="No binary or octal literals">
                        Flix does not support binary or octal literals. It is our understanding that these features are
                        rarely used in practice.
                    </Principle>

                    <Principle name="Exhaustive pattern matches">
                        The Flix compiler enforces that pattern matches handle all cases of an algebraic data type.
                        If a match expression is found to be non-exhaustive, the program is rejected. We believe this
                        encourages more robust code and enables safer refactoring of algebraic data types.
                    </Principle>

                    <Principle name="Timeless design">
                        A few years ago HTML was all the rage. Hence it was only natural that Java adopted HTML-style
                        comments. A bit later, XML was all the rage, hence it was only natural that Scala
                        added support for native XML literals. Today, JSON and Markdown are all the rage, but if
                        history is any guide, we should not add any special support for these to Flix.
                    </Principle>

                    <Principle name="Built-in documentation">
                        Flix supports comments as part of the language. We believe such integration avoids fragmentation
                        of the ecosystem and ultimately leads to better tool support.
                    </Principle>

                    <Principle name="Built-in unit tests">
                        Flix supports unit tests as part of the language. We believe such integration avoids
                        fragmentation of the ecosystem and ultimately leads to better tool support.
                    </Principle>

                </CardColumns>

                <h2 className="mt-3">Compiler Message Principles</h2>

                <p>
                    Compiler messages are the main interface between Flix and programmers. We should invest into it.
                </p>

                <CardColumns>
                    <Principle name="The 80 / 20 Rule">
                        <p>
                            The rule states that 80% of the time a developer will need minimal information to understand
                            a compiler message. Most likely the developer will already have seen the specific
                            error message hundreds of times before. But 20% of the time, the developer will
                            never have seen the message before and will need more information.
                        </p>

                        <p>
                            Flix compiler messages should accommodate both scenarios.
                        </p>
                    </Principle>

                    <Principle name="Message Structure">
                        <p>
                            A compiler message consists of three components:

                            <ul>
                                <li><b>Summary:</b> A one sentence summary. The message shown on hover in Visual Studio
                                    Code.
                                </li>
                                <li><b>Message:</b> A multi-line text that contains all relevant details, including
                                    the program symbol(s) and fragment(s) relevant for the message.
                                </li>
                                <li><b>Explanation:</b> A description of why the problem occurs and what can be done
                                    to fix it.
                                </li>
                            </ul>
                        </p>
                    </Principle>

                    <Principle name="Style and Tone">
                        <p>
                            A message should be <b>crisp</b>, <b>concise</b>, and <b>clear</b>.
                            The language should be friendly or neutral. An error message should not blame
                            the programmer. For example, we should prefer <code>Unexpected foo</code> over <code>Illegal
                            foo</code>, since the latter implies that the programmer did something wrong.
                        </p>
                    </Principle>

                    <Principle name="Straight to the Point">
                        <p>
                            The error message: <code>Duplicate definition: 'foo'</code> is better than the error
                            message: <code>The definition 'foo' is defined twice</code> because in the former the
                            programmer only has to scan the first word to understand what is wrong.
                        </p>
                    </Principle>

                    <Principle name="Compare to Other Languages">
                        <p>
                            When relevant, a Flix compiler error should explain how Flix differs from other languages
                            and explain how the specific problem can be solved in Flix.
                        </p>
                    </Principle>
                </CardColumns>

                <h2 className="mt-3">Type Class Principles</h2>

                <CardColumns>
                    <Principle name="Type Classes are Conceptually Functions">
                        <p>
                            A type class is <i>conceptually</i> a function from a type to a set of lawful
                            operations (called signatures) on values of that type.
                        </p>

                        <p>
                            For example, the <code>Eq</code> type class takes a type and returns
                            the <code>eq</code> and <code>neq</code> functions where <code>eq</code> must be reflexive,
                            symmetric, and transitive, and <code>neq</code> must be
                            the negation of <code>eq</code>.
                        </p>
                    </Principle>

                    <Principle name="Lawful and Lawless Type Classes">
                        <p>
                            Every type class must specify a collection of laws that instances of the type
                            class must satisfy. If a type class does not specify any laws it is lawless.
                        </p>

                        <p>
                            Here are some examples of lawful and lawless type classes:

                            <ul>
                                <li>Lawful: <code>Eq</code>, <code>Order</code>, <code>Functor</code>, <code>Foldable</code>.
                                </li>
                                <li>Lawless: <code>FromString</code>, <code>ToString</code>, <code>Add</code>.</li>
                            </ul>
                        </p>

                        <p>
                            A type class is lawful if every signature of the class is used in at least one law.
                        </p>

                        <p>
                            Note: Laws are not checked by the compiler &ndash; that is an undecidable
                            problem &ndash; but they may be used in a future SmallCheck / QuickCheck library.
                        </p>

                    </Principle>

                    <Principle name="Type Classes are Hierarchical">
                        <p>
                            A sub-class (i.e. a type class <code>A</code> that refines a type class <code>B</code>) must
                            specify additional laws that its instances must satisfy.
                        </p>

                        <p>
                            For example, the <code>Applicative</code> type class extends the <code>Functor</code> type
                            class with additional operations and laws.
                        </p>
                    </Principle>

                    <Principle name="No Orphan Instances">
                        An instance must be declared in the same namespace as either:

                        <ol>
                            <li>the type class declaration, or</li>
                            <li>the type declaration of the instance</li>
                        </ol>
                    </Principle>

                    <Principle name="Sealed Type Classes">
                        A type class may be declared <code>sealed</code> in which case no further instances, other than
                        those in the same namespace, can be defined. A sealed type class can be used when the programmer
                        wants to maintain tight control over what instances should be permitted.
                    </Principle>

                    <Principle name="No Overlapping Instances">
                        <p>
                            The Flix compiler ensures that the selection of type class instances is always unambiguous.
                        </p>

                        <p>
                            In the future, we may allow a limited form of overlapping instances.
                        </p>
                    </Principle>

                    <Principle name="Type Classes, Namespaces, and Companion Namespaces">
                        <p>
                            Every type class belongs to a namespace. Hence it is possible to define multiple operations
                            with the same name, as long as they belong to type classes in different namespaces.
                        </p>

                        <p>
                            Every type class also defines a <i>companion namespace</i> which typically holds functions
                            that are not part of the type class, but nevertheless are related to the functionality of
                            the type class.
                        </p>
                    </Principle>

                    <Principle name="Default Implementations">
                        <p>
                            Type classes may provide default implementations of functions.
                        </p>

                        <p>
                            For example, the <code>Foldable</code> type class may provide default function
                            implementations, e.g. <code>count</code> and <code>length</code>, based on
                            the <code>foldLeft</code> and <code>foldRight</code> signatures defined in that class.
                        </p>

                        <p>
                            A default implementation can always be overriden by a specific type class instance.
                            For example, to provide a more efficient version.
                        </p>
                    </Principle>

                    <Principle name="Explicit Override">
                        A type class instance that wants to override a default implementation must explicitly do
                        so using the <code>override</code> keyword. This ensures that there are no dangling overrides,
                        i.e. functions definitions that do not match any signature of the type class.
                    </Principle>

                </CardColumns>

                <h2 className="mt-3">Library Principles</h2>

                <CardColumns>

                    <Principle name="No blessed library">
                        The Flix standard library is implemented in Flix. It has no special support from the compiler.
                        If you don't like it or if you don't need it, you can replace it.
                    </Principle>

                    <Principle name="Minimal prelude">
                        The Flix prelude contains algebraic data types and functions that are imported into every
                        compilation unit. Therefore we aim to keep the prelude very small and only include extremely
                        common functionality.
                    </Principle>

                    <Principle name="Mutable data is functional data">
                        In Flix, every mutable data structure supports functional operations.
                        For example, mutable collections, such as <code>Array</code> and <code>MutSet</code> support
                        the <code>map</code> operation. Flix, being functional-first, reserves functional names for
                        functional operations. Across the standard library <code>map</code> has the same name and the
                        same type signature.
                    </Principle>

                    <Principle name="Destructive operations are marked with '!'">
                        In Flix, every destructive operation is suffixed with an exclamation point. For
                        example, <code>Array.reverse(a)</code> returns a new array with the elements
                        of <code>a</code> in reverse
                        order, whereas <code>Array.reverse!(a)</code> destructively re-orders the elements
                        of <code>a</code>. Note: This principle applies to destructive operations that operate on data
                        structures, not to impure functions in general, e.g. <code>Console.printLine</code>.
                    </Principle>

                    <Principle name="Consistent names of functional and destructive operations">
                        In Flix, functional and destructive operations that share (i) similar behavior and (ii) similar
                        type signatures share similar names. For
                        example, <code>Array.reverse</code> and <code>Array.reverse!</code> share the
                        same name. On the other hand, <code>Array.transform!</code> is
                        called <code>transform!</code> and not <code>map!</code> because its type signature is
                        dissimilar to map (i.e. map works on functions of type <code>a -{'>'} b</code>, but transform
                        requires functions of type <code>a -{'>'} a</code>.)
                    </Principle>

                </CardColumns>

            </Container>
        );
    }
}

class Principle extends Component {
    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    {this.props.children}
                </CardBody>
            </Card>
        );
    }
}

export default Principles;
