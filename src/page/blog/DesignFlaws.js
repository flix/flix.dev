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
                            expression is evaluated. The idea, quite simply, was to have a control-flow structure that
                            visually resembles an ordinary pattern match, but where there is no match value.
                        </p>


                        <hr/>


                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DesignFlaws
