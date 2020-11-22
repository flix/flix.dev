import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";
import InlineEditor from "../../util/InlineEditor";

class DeathOfUfcs extends Component {

    componentDidMount() {
        document.title = "Flix | The Death of Uniform Function Call Syntax";
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>
                <Row className="mb-3">
                    <Col sm={12} md={8}>

                        <h1>The Death of Uniform Function Call Syntax</h1>

                        <p>
                            Posted December 2020 by <i>Magnus Madsen</i>.
                        </p>

                        <p>
                            We recently decided to remove <a
                            href="https://en.wikipedia.org/wiki/Uniform_Function_Call_Syntax">uniform
                            function call syntax</a> from the Flix programming language. In this blog post, I will
                            explain what uniform
                            function call syntax is, why is it useful, and why we ultimately decided to abandon it.
                        </p>

                        <h2>Uniform Function Call Syntax</h2>

                        <p>
                            In a nutshell, uniform function call syntax (UFCS) allows a function call:
                        </p>

                        <InlineEditor>
                            {`f(a, b, c)`}
                        </InlineEditor>

                        <p>
                            to be written as:
                        </p>

                        <InlineEditor>
                            {`a.f(b, c)`}
                        </InlineEditor>

                        <p>
                            For example, the call <code>l.length()</code> is the same as <code>length(l)</code>, and the
                            call <code>l.drop(5)</code> is the same as <code>drop(l, 5)</code>.
                        </p>

                        <h2>Advantages</h2>

                        - It is familiar to OO programmers.
                        - Auto complete
                        - Its looks great for some functions, e.g. l.length() vs. length(l).

                        <h2>The Problems with it</h2>

                        <h3>Problem 0: </h3>

                        <p>
                            We now have two ways of doing the same thing. Confusing to beginners.
                        </p>

                        <h3>Problem I: Piping</h3>


                        <h3>Problem II: Records</h3>

                        <p>Consider the following program fragment:</p>

                        <InlineEditor>
                            {`let f = x -> x + 1;
let r = { f = x -> x + 2};
r.f(123)`}
                        </InlineEditor>

                        <p>
                            The local variable <code>f</code> is a function that increments its argument by one. The
                            local variable <code>r</code> is a record with a field named <code>f</code> that is a
                            function which increments its argument by two.
                        </p>

                        <p>
                            Now the critical question is: What is the meaning of <code>r.f(123)</code>? Does it
                            call <code>f</code> or does it call <code>r.f</code>? That is, do we parse it as:

                            <ul>
                                <li><b>A record select expression</b></li>
                                <li><b>A ufcs call.</b></li>
                            </ul>
                        </p>

                        <h5>Potential Fixes</h5>

                        <p>We could try </p>

                        - Removal
                        - Overloading
                        - Other syntax

                        <p>
                            Need some principle that says additions must not break code locally.
                            And local changes must not break globally.
                        </p>

                        <p>In the end, we decided the trouble was not worth it, and we have removed UFCS from Flix.
                        That is not say that UFCS may not come back one day, if the above issues can be overcome
                        or with a different syntax.</p>

                        <p>
                            Until next time, happy hacking.
                        </p>

                    </Col>
                </Row>
            </Container>
        );
    }

}

export default DeathOfUfcs
