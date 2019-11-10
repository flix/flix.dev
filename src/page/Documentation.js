import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import ReactGA from 'react-ga';
import {Link} from "react-router-dom";

class Documentation extends Component {

    componentDidMount() {
        document.title = "Flix | Documentation";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>
                <Row className="mb-3">
                    <Col>
                        <h1>Documentation</h1>

                        <p>
                            Documentation on Flix is currently a bit sparse.
                            We hope to have better documentation in the future.
                        </p>

                        <p>
                            The <a href="https://flix.dev/programming-flix/">Programming Flix</a> book offers an
                            introduction to Flix for programmers who are already familiar with functional
                            programming.
                        </p>

                        <p>
                            The <a href="https://flix.dev/api/">Standard Library</a> documentation provides a
                            Javadoc-style description of the Flix API, including the operations available on important
                            types such as <code>Option</code>, <code>Result</code>, and <code>List</code>.
                        </p>

                        <p>
                            The <a href="https://flix.dev/papers/flix-koans.pdf">Flix Koans</a> gives several
                            examples of logic programming in Flix.
                        </p>

                        <p>
                            For completeness and fun, we also have the <Link to="/misc/checklist">programming language
                            checklist</Link>.
                        </p>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Documentation;
