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

                        - doesnt work with piping
                        - doesnt work with records
                        -

                        <h2>Fixes</h2>

                        - Removal
                        - Overloading
                        - Other syntax

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
