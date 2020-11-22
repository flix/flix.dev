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
                            ...
                        </p>

                        <h2>What is UFCS?</h2>

                        <InlineEditor>
                            {`def map(f: a -> b & e, l: List[a]): List[b] & e`}
                        </InlineEditor>

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
