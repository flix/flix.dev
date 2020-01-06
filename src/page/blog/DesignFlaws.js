import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";
import InlineEditor from "../../util/InlineEditor";

class DesignFlaws extends Component {

    componentDidMount() {
        document.title = "Flix | Design Flaws in Flix";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>

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
                            We begin with what I consider to be design flaws that are still present in Flix.
                        </p>

                        <h3>The Switch Expression</h3>

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

                        <hr/>

                        <h2>Design Flaws No Longer Present in Flix</h2>


                        <h3>Infix Type Application</h3>

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

                        <hr/>

                        <h2>Potential Design Flaws</h2>

                        <p>
                            I wish to close with a feature that I am not yet sure whether is a design flaw.
                        </p>

                        <h3> Built-in Syntax for Lists, Sets, and Maps </h3>

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
Map#{1 -> 2, 3 -> 4}`
                            }
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

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DesignFlaws
