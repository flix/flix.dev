import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";
import InlineEditor from "../../util/InlineEditor";

class DesignFlaws extends Component {

    componentDidMount() {
        document.title = "Flix | Blog | Design Flaws in Flix";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>
                <Row className="mb-3">
                    <Col xs={8}>

                        <h1>Design Flaws in Flix</h1>

                        <p>
                            Posted January 2020 by <i>Magnus Madsen</i>.
                        </p>

                        <p>
                            Inspired by the blog post <a
                            href="https://futhark-lang.org/blog/2019-12-18-design-flaws-in-futhark.html">Design Flaws in
                            Futhark</a>, I decided to take stock and reflect on some of the design flaws I believe that
                            we have made during the development of the Flix programming language. I went through old
                            Github issues and pull requests to discover the challenging issues that have been or still
                            are struggling with. I will classify the design flaws into four categories:
                            (i) design flaws that still plague the Flix languages, (ii) design flaws that have been
                            fixed, (iii) flawed designs that were thankfully never implemented, and (iv) designs
                            where the jury is still out.
                        </p>

                        <p>
                            I want to emphasize that language design and implementation is a huge task and that there
                            are features which are planned for Flix, but not yet implemented. The lack of such features
                            is not a design flaw, it is merely a question of time
                            before we can get around to it.
                        </p>

                        <h2>Design Flaws Present in Flix</h2>

                        <p>
                            The following design flaws are still present in Flix. Hopefully some day they will be fixed.
                        </p>

                        <h5>The Switch Expression</h5>

                        <p>
                            Flix supports the <code>switch</code> expression:
                        </p>

                        <InlineEditor>
                            {`switch {
    case cond1 => exp1
    case cond2 => exp2
    case cond3 => exp3
}`}
                        </InlineEditor>

                        <p>
                            where the boolean expressions <code>cond1</code>, <code>cond2</code>,
                            and <code>cond3</code> are
                            evaluated from top to bottom until one of them returns true and then its associated body
                            expression is evaluated. The idea, quite simply, is to have a control-flow structure that
                            visually resembles an ordinary pattern match, but where there is no match value.
                        </p>

                        <p>
                            But in hind-sight, the <code>switch</code> expression is nothing more than a
                            glorified <code>if-then-else-if</code> construct that does not carry its own weight:
                            it is an expenditure on the complexity and "strangeness" budget that offers too little gain.
                            We plan to remove it in future versions of Flix.
                        </p>

                        <h5>String Concatenation with Plus</h5>

                        <p>
                            Flix uses <code>+</code> for string concatenation like most contemporary languages. While
                            this is an uncontroversial design choice, it does not make much sense since strings are not
                            commutative, e.g. <code>"abc" + "def"</code> is <i>not</i> the same as <code>"def" +
                            "abc"</code>. A better alternative would be to use <code>++</code> as in Haskell. But, I
                            believe an even better design choice would be to forgo string concatenation and
                            instead rely entirely on string interpolation. String interpolation is a more powerful and
                            elegant solution to the problem of building strings with rich structure.
                        </p>

                        <h2>Design Flaws No Longer Present in Flix</h2>

                        <p>
                            The following design flaws have been fixed.
                        </p>

                        <h5>Compilation of Option to Null</h5>

                        <p>
                            Flix compiles to JVM bytecode and runs on the virtual machine. In an earlier version of Flix
                            we had an optimization that would take the <code>Option</code> enum:
                        </p>

                        <InlineEditor>
                            {`Option[a] {
    case None,
    case Some(a)
}`}
                        </InlineEditor>

                        <p>
                            and compile the <code>None</code> value to <code>null</code> and <code>Some(a)</code> to
                            just the underlying value of <code>a</code>. The idea was to save allocation and
                            de-allocation of <code>Some</code> values, just speeding evaluation.
                        </p>

                        <p>
                            But this does not work out of the box, if you intend to have interoperability with Java
                            library. The reason is that many Java libraries assign meaning to <code>null</code> which is
                            not necessarily compatible with the intended meaning of <code>None</code>. Consequently, we
                            had to take this optimization out.
                        </p>

                        <h5>Useless Library Functions</h5>

                        <p>
                            Flix aims to have a robust standard library that avoids some of the pitfalls of other
                            standard libraries. We have been particularly focused on two aspects: (i) ensuring that
                            functions and types have consistent names, e.g. <code>map</code> is
                            called <code>map</code> for both <code>Option</code> and <code>List</code>, and (ii) to
                            avoid partial functions, such as <code>List.head</code> and <code>List.tail</code> which are
                            not defined for empty lists.
                        </p>

                        <p>
                            Yet, despite these principles, we still managed to implement some problematic functions in
                            the library. For example, we used to have the
                            functions <code>Option.isNone</code> and <code>Options.isSome</code>. The problem with these
                            functions is that they are not really useful and they lead to brittle code. For
                            example, <i>if</i> <code>Options.isSome</code> returns <code>true</code> then that
                            information cannot be used to unwrap the option anyway. Thus having such functions is not
                            really helpful.
                        </p>

                        <h2>Function Call Syntax</h2>

                        <p>
                            Inspired by Scala, early versions of Flix did not always parenthesis to mark a
                            function call. For example, the function:
                        </p>

                        <InlineEditor>
                            {`def f: Int = 21`}
                        </InlineEditor>

                        <p>
                            could be called by writing:
                        </p>

                        <InlineEditor>
                            {`def g: Int = f + 42 // returns 63`}
                        </InlineEditor>

                        <p>
                            The problem with this design is at least two-fold: it hides when a function is applied,
                            which is really bad in a language with side-effects, and (ii) how do you express if you want
                            a closure of <code>f</code>?
                        </p>

                        <p>
                            Today, in Flix, the code above is written as:
                        </p>


                        <InlineEditor>
                            {`def f(): Int = 21
def g: Int = f() + 42 // returns 63`}
                        </InlineEditor>

                        <p>
                            which makes it clear when there is a function call.
                        </p>

                        <h5>Infix Type Application</h5>

                        <p>
                            In Flix, a function <code>f</code> can be called with the
                            arguments <code>x</code> and <code>y</code> in three ways: In standard prefix-style <code>f(x,
                            y)</code>, in infix-style <code>x `f` y</code>, and in postfix-style <code>x.f(y)</code>.
                            The latter is also sometimes referred to as universal function call syntax. I personally
                            feel reasonably confident that all three styles are worth supporting. The postfix-style fits
                            well for function calls such as <code>a.length()</code> where
                            the <code>length</code> function "feels" closely associated with the receiver argument. The
                            infix-style fits well with user-defined binary operations such as <code>x `lub`
                            y</code> where <code>lub</code> is the least upper bound
                            of <code>x</code> and <code>y</code>.
                        </p>

                        <p>
                            Type constructors, such as <code>Option</code> and <code>Result</code> are a form of
                            functions hence it makes sense that their syntax should mirror function applications. For
                            example, we can write the type applications <code>Option[Int]</code> and <code>Result[Int,
                            Int]</code> mirroring the prefix style of regular function applications. Similarly, for a
                            while, Flix support infix and postfix <i>type applications</i>. That is, the former could
                            also be expressed as: <code>Int.Option[]</code> and <code>Int.Result[Int]</code>, or even
                            as <code>Int `Result` Int</code>. Thankfully, those days are gone. Striving for uniformity
                            in every place does not seem worth it.
                        </p>

                        <h5>Unit Tests that Manually Construct Abstract Syntax Trees</h5>

                        <p>
                            The Flix compiler comes with more than 6,500 manually written unit tests. Each unit test is
                            a Flix function that performs some computation typically with an expected result. The unit
                            tests are expressed in Flix itself. For example:
                        </p>

                        <InlineEditor>
                            {`@test
def testArrayStore01(): Unit = let x = [1]; x[0] = 42`}
                        </InlineEditor>

                        <p>
                            In earlier versions of Flix such unit tests were expressed by manually constructing "small"
                            abstract syntax tree fragments. For example, the above test would be expressed as something
                            like:
                        </p>

                        <InlineEditor>
                            {`Let(Var("x", ...), ArrayNew(...), ArrayStore(Var("x"), Int32(0), Int32(42)))`}
                        </InlineEditor>

                        <p>
                            The problem with such tests are at least two-fold: (i) the examples turn out to be anything
                            but small and (ii) maintenance becomes an absolute nightmare. In practice, we found that the
                            surface syntax of Flix stabilized fairly quickly, but the internal abstract syntax tree
                            underwent significantly more changes (and is still undergoing changes).
                        </p>

                        <h2>Potential Design Flaws</h2>

                        <p>
                            It is debatable whether the following feature is a design flaw or not.
                        </p>

                        <h5> Built-in Syntax for Lists, Sets, and Maps </h5>

                        <p>
                            Flix has a principle that states that the standard library should not be "blessed".
                            That is, the standard library should be independent of the Flix compiler and language.
                            It should be like any other library: A collection of Flix code.
                        </p>

                        <p>
                            Yet, despite this principle, Flix has special syntax for Lists, Sets and Maps:
                        </p>

                        <InlineEditor>
                            {`1 :: 2 :: Nil
Set#{1, 2, 3}
Map#{1 -> 2, 3 -> 4}`}
                        </InlineEditor>

                        <p>
                            which is directly built-in to the language. While technically these constructs are merely
                            syntactic sugar for <code>Cons</code> calls
                            to <code>Set.empty</code>, <code>Set.insert</code>, <code>Map.empty</code> and <code>Map.insert</code>
                            there is no getting around the fact that this is a special kind of blessing of the standard
                            library. In particular, it is <i>not</i> possible to define your
                            own <code>Foo#...</code> syntax for
                            anything.
                        </p>

                        <h2>Bad Ideas that where Never Implemented</h2>

                        <p>
                            These ideas were fortunately never implemented in Flix.
                        </p>

                        <h5>The Itself Keyword</h5>

                        <p>
                            The idea was to introduce a special keyword that within a pattern match would refer to
                            the match value. For example:
                        </p>

                        <InlineEditor>
                            {`def foo(e: Exp): Exp = match e {
    // ... many lines ...
    case IfThenElse(e1, e2, e3) => itself // refer to the value of e.
}`}
                        </InlineEditor>

                        <p>
                            Here the keyword <code>itself</code> refers to the value of the match expression, i.e. the
                            value of <code>e</code>. The idea was that in very large and complicated pattern matches,
                            with many local variables, the <code>itself</code> keyword could always be used to refer to
                            the match value. The thought was that this would make it easier to avoid mistakes such as
                            returning <code>e0</code> instead of <code>e</code> or the like.
                        </p>

                        <p>
                            The problem with this idea is at least three-fold: (i) it seems like an oddly-specific
                            feature for a niche problem, (ii) it is not worth it on the complexity and "strangeness"
                            budget, and finally (iii) it is brittle in the presence of nested pattern matches.
                        </p>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DesignFlaws
