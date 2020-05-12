import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";
import InlineEditor from "../../util/InlineEditor";

class PolymorphicEffects extends Component {

    componentDidMount() {
        document.title = "Flix | Polymorphic Effects";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>
                <Row className="mb-3">
                    <Col sm={12} md={8}>

                        <h1>Polymorphic Effects with Boolean Unification</h1>

                        <p>
                            Posted May 2020 by <i>Magnus Madsen</i>.
                        </p>

                        <p>
                            In the blog post <a
                            href="https://www.digitalmars.com/articles/b60.html">Patterns of Bugs</a>, Walter Bright,
                            the author of the <a href="https://dlang.org/">D programming Language</a>, writes about his
                            experience working at Boeing and their attitude towards failure:
                        </p>

                        <blockquote className="blockquote">
                            <p>
                                "[...] The best people have bad days and make mistakes, so the solution is to
                                change the process so the mistakes cannot happen or cannot propagate."
                            </p>

                            <p>
                                "One simple example is an assembly that is bolted onto the frame with 4 bolts. The
                                obvious bolt pattern is a rectangle. Unfortunately, a rectangle pattern can be assembled
                                in two different ways, one of which is wrong. The solution is to offset one of the bolt
                                holes — then the assembly can only be bolted on in one orientation. The possible
                                mechanic's mistake is designed out of the system."
                            </p>

                            <p>
                                "This idea permeates Boeing designs. <i>Parts can only be assembled one way, the correct
                                way.</i>"
                            </p>
                        </blockquote>

                        <p>
                            (Emphasis mine).
                        </p>

                        <p>
                            Walter goes on to discuss that these ideas are equally applicable to software: We should
                            try to build software such that it can only be assembled correctly. Today I will talk about
                            how that applies to pure and impure code.
                        </p>

                        <h2>Pure and Impure Functions</h2>

                        <p>
                            In Flix, functions are pure by default. For example, we can write:
                        </p>

                        <InlineEditor>
                            {`def inc(x: Int): Int = x + 1`}
                        </InlineEditor>

                        <p>
                            If we wanted to be explicit (but non-idiomatic) we could write:
                        </p>

                        <InlineEditor>
                            {`def inc(x: Int): Int & Pure = x + 1`}
                        </InlineEditor>

                        <p>
                            where <code>& Pure</code> specifies that <code>inc</code> is pure.
                        </p>


                        <p>
                            We can also write an impure function:
                        </p>

                        <InlineEditor>
                            {`def sayHello(): Unit & Impure = Console.printLine("Hello World!")`}
                        </InlineEditor>

                        <p>
                            where <code>& Impure</code> specifies that <code>sayHello</code> is impure.
                        </p>

                        <p>
                            The Flix type and effect system is <i>sound</i>, hence if we forget the <code>&
                            Impure</code> annotation on <code>sayHello</code> the compiler would emit a type (or rather
                            effect) error.
                        </p>

                        <p>
                            The type and effect system separates pure and impure code. If an expression is pure then it
                            always evaluates to the same value and it cannot have a side-effect. If a function is pure
                            then it always evaluates to the same value when given the same arguments. This is what
                            makes Flix functional-first: We can know and trust that pure functions behave like
                            mathematical functions.
                        </p>

                        <h2>What is Pure and What is Impure?</h2>

                        <p>
                            Any expression that does not satisfy referential transparency is impure. Informally, an
                            expression is pure if it allows equational reasoning. Obvious examples of impurity are
                            printing to the screen, reading a file from disk, or communicating over channels. Less
                            obvious examples are allocating an array, reading from an array, calling JVM methods, and so
                            on.
                        </p>

                        <h2>Higher-Order Functions</h2>

                        <p>
                            We can use the Flix type and effect system to restrict the purity/impurity of function
                            arguments passed to higher-order functions. This is useful for two reasons: (i) it can
                            more accurately capture the contract between caller and callee, and (ii) it can help prevent
                            subtle bugs in the program. We will now look at several examples of such type signatures.
                        </p>

                        <p>
                            We can enforce that the predicate <code>f</code> passed
                            to <code>Set.exists</code> is <i>pure</i>:
                        </p>

                        <InlineEditor>
                            {`def exists(f: a -> Bool, xs: Set[a]): Bool = ...`}
                        </InlineEditor>

                        <p>
                            The signature <code>f: a -> Bool</code> denotes a pure function
                            from <code>a</code> to <code>Bool</code>. Passing an impure function to Set.exists is a
                            compile-time type error. We enforce that <code>f</code> is pure because the contract
                            for <code>exists</code> makes no guarantees about how <code>f</code> is called. The
                            implementation of <code>exists</code> may call <code>f</code> on the elements
                            in <code>xs</code> in any order and any number of times. This requirement
                            is <i>beneficial</i> because its allows freedom in the implementation of <code>Set</code>,
                            including in the choice of the underlying data structure and in the implementation of its
                            operations. For example, we can implement sets using search trees or with hash tables, and
                            we can perform existential queries in parallel using fork-join. <i>If <code>f</code> was
                            impure such implementation details would leak and be observable to the client.</i>
                        </p>

                        <p>
                            We can enforce that the function <code>f</code> passed to the
                            function <code>List.foreach</code> is <i>impure</i>:
                        </p>

                        <InlineEditor>
                            {`def foreach(f: a ~> Unit, xs: List[a]): Unit & Impure = ...`}
                        </InlineEditor>

                        <p>
                            The signature <code>f: b ~> Bool</code> denotes an impure function
                            from <code>b</code> to <code>Unit</code>. Passing a pure function to <code>foreach</code> is
                            a compile-time type error. Given that <code>f</code> is impure and <code>f</code> is called
                            within <code>foreach</code>, it must itself also be impure. We enforce
                            that <code>f</code> is impure because it is pointless to apply a pure function
                            with <code>Unit</code> return type to every element of a list. While such behavior may be
                            seen as harmless, we want our type and effect system to help the programmer avoid mistakes.
                        </p>

                        <p>
                            We can enforce that event listeners are impure:
                        </p>

                        <InlineEditor>
                            {`def onMouseDn(f: MouseEvent ~> Unit): Unit & Impure = ...
def onMouseUp(f: MouseEvent ~> Unit): Unit & Impure = ...`}
                        </InlineEditor>

                        <p>
                            Event listeners are always executed for their side-effect: it would be pointless to register
                            a pure function as an event listener.
                        </p>

                        <p>
                            We can enforce that assertion and logging facilities are given pure functions:
                        </p>

                        <InlineEditor>
                            {`def assert(f: Unit -> Bool): Unit & Pure = ...
def log(f: Unit -> String , l: LogLevel): Unit & Pure = ...`}
                        </InlineEditor>

                        <p>
                            We want to support assertions and log statements that can be enabled and disabled at
                            run-time. For efficiency, it is critical that when assertions or logging is disabled, we do
                            not perform any computations that are redundant. We can achieve this by having the assert
                            and log functions take callbacks that are only invoked when required. A critical property of
                            these functions is that they must not influence the execution of the program. Otherwise, we
                            risk situations where enabling or disabling assertions or logging may impact the presence or
                            absence of a buggy execution. We can prevent such situations by requiring that the functions
                            passed to assert and log are pure.
                        </p>

                        <p>
                            We can enforce that user-defined equality functions are pure. We want purity because the
                            programmer should not make any assumptions about how such functions are used. Moreover, most
                            collections (e.g. sets and maps) require that equality does not change over time to maintain
                            internal data structure invariants. Similarly, and for similar reasons, we can enforce that
                            user-defined hash and comparator functions are pure.
                        </p>

                        <p>
                            We can also enforce that one-shot comparator functions are pure:
                        </p>

                        <InlineEditor>
                            {`def minBy(f: a -> b, l: List[a]): a = ...
def maxBy(f: a -> b, l: List[a]): a = ...
def sortBy(f: a -> Int32, l: List[a]): List[a] = ...
def groupBy(f: a -> k, l: List[a]): Map[k, List[a]] = ...`}
                        </InlineEditor>

                        <p>
                            We can enforce that the <code>next</code> function passed
                            to <code>List.unfoldWithIter</code> is impure:
                        </p>

                        <InlineEditor>
                            {`def unfoldWithIter(next: Unit ~> Option[a]): List[a] & Impure`}
                        </InlineEditor>

                        <p>
                            The unfoldWithIter function is a variant of the <code>unfoldWith</code> function where each
                            invocation of <code>next</code> changes some mutable state until the unfold completes. For
                            example, <code>unfoldWithIter</code> is frequently used to convert Java-style iterators into
                            lists. We enforce that next is impure since otherwise the iterator cannot advance.
                        </p>

                        <p>
                            We can reject statement expressions that are pure. For example, the program:
                        </p>

                        <InlineEditor>
                            {`def main(): Int =
    List.map(x -> x + 1, 1 :: 2 :: Nil);
    123`}
                        </InlineEditor>

                        <p>
                            is rejected with the compiler error:
                        </p>

                        <InlineEditor>
                            {`-- Redundancy Error ------------------ foo.flix

 >> Useless expression: It has no side-effect(s) and its result is discarded.

    2 | List.map(x -> x + 1, 1 :: 2 :: Nil);
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        useless expression.`}
                        </InlineEditor>

                        <p>
                            Notice that the <code>List.map</code> expression is pure because the function <code>x -> x +
                            1</code> is itself pure.
                        </p>

                        <h2>Polymorphic Effects</h2>

                        <p>
                            Flix supports effect polymorphism which means that the effect of a higher-order function can
                            depend on the effect of its function arguments.
                        </p>

                        <p>
                            For example, here is the type signature of <code>List.map</code>:
                        </p>

                        <InlineEditor>
                            {`def map(f: a -> b & e, xs: List[a]): List[b] & e = ...`}
                        </InlineEditor>

                        <p>
                            The syntax <code>f: a -> b & e</code> denotes a function
                            from <code>a</code> to <code>b</code> with latent effect <code>e</code>. The signature of
                            the <code>map</code> function captures that its
                            effect <code>e</code> depends on the effect of its argument <code>f</code>.
                            That is, if <code>map</code> is called with a pure function then its evaluation is pure,
                            whereas if it is called with an impure function then its evaluation is impure. The effect
                            signature is <i>conservative</i> (i.e. over-approximate). That is, <code>map</code> is
                            considered impure even in the special case when the list is empty and its execution would
                            actually be pure.
                        </p>

                        <InlineEditor>
                            {`  def >>(f: a -> b & e1, g: b -> c & e2): a -> c & {e1 /\\ e2} = x -> g(f(x))`}
                        </InlineEditor>


                        <InlineEditor>
                            {` def mapCompose(f: a -> b & e1, g: b -> c & {{(not e1) \\/ e2}}, l: List[a]):
2 List[c] & {{e1 /\\ e2}}`}
                        </InlineEditor>

                        <h2>Type Equivalences</h2>


                        <h2>Interior Mutability (better title)</h2>

                        <p>
                            A fairly common occurrence is that a function internally uses impure constructs
                            but externally is observationally pure. That is, from the outside there is no way to
                            see that the function actually used side-effects. We are allowed to treat such
                            functions as pure and we achieve it with an effect cast.
                        </p>

                        <p>
                            For example, we can call a Java method, which may have arbitrary side-effects, but mark
                            it as explicitly pure with an effect cast:
                        </p>

                        <InlineEditor>
                            {`///
/// Returns the character at position \`i\` in the string \`s\`.
///
def charAt(i: Int, s: String): Char =
    import java.lang.String.charAt(Int32);
    s.charAt(i) as & Pure`}
                        </InlineEditor>

                        <p>
                            Flix treats any Java method as impure, but in this case the programmer knows that calling
                            <code>charAt</code> on a <code>String</code> has no side-effect. The effect cast <code>as &
                            Pure</code> casts the impure expression to a pure expression. Consequently, the Flix
                            function is pure, as expected and desired.
                        </p>

                        <p>
                            An effect cast, like an ordinary cast, must be used with care. It is an escape hatch that
                            allows the programmer to override the type (and effect) system of the language. The
                            programmer is responsible for ensuring that the cast is safe.
                        </p>

                        <p>
                            Effect casts are also useful when a pure function is implemented more efficiently using
                            mutation. For example, here is the implementation of <code>stripIndent</code>:
                        </p>

                        <InlineEditor>
                            {`def stripIndent(n: Int32, s: String): String =
        if (n <= 0 || length(s) == 0)
            s
        else
            stripIndentHelper(n, s) as & Pure
        
def stripIndentHelper(n: Int32, s: String): String & Impure =
    let sb = StringBuilder.new();
    let limit = Int32.min(n, length(s));
    let step = s1 -> {
        let line = stripIndentDropWhiteSpace(s1, limit, 0);
        StringBuilder.appendLine!(sb, line)
    };
    List.foreach(step, lines(s));
    StringBuilder.toString(sb)`}
                        </InlineEditor>

                        <p>
                            Internally, <code>stripIndentHelper</code> uses a mutable string builder which is impure,
                            but externally, <code>stripIndent</code> is a pure function.
                        </p>

                        <h2>Type Inference and Boolean Unification</h2>

                        <p>
                            The Flix type and effect system supports type inference. That is, explicit type annotations
                            are never required (although as a design choice we demand such annotations for all top-level
                            definitions). The benefit is that, within a function, the programmer never has to worry
                            about pure and impure expressions. The compiler automatically infers whether every
                            expression is pure, impure, or effect polymorphic.
                        </p>

                        <p>
                            The details of the type and effect system are the subject of a research paper (currently in
                            submission). The paper will be made available here when accepted for publication.
                        </p>

                        <h2>Closing Thoughts</h2>

                        <p>
                            We can now substantiate the claim that Flix aims to be "functional-first": the Flix type and
                            effect system cleanly separates pure and impure code, even in polymorphic contexts. The
                            upshot is that functional programmer, like in Haskell, can trust that if a function is pure
                            then it behaves as a mathematical function, i.e. when given the same arguments it returns
                            the result and it has no (observable) side-effects.
                        </p>

                        <p>
                            Until next time, happy hacking.
                        </p>

                    </Col>
                </Row>
            </Container>
        );
    }

}

export default PolymorphicEffects
