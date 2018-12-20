import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class Documentation extends Component {

    componentDidMount() {
        document.title = "Flix | Documentation"
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Documentation</h1>

                        <p>
                            Documentation on Flix is currently a bit sparse.
                            We hope to have better documentation in the future.
                        </p>

                        <p>
                            The <a href="http://flix.github.io/programming-flix">Programming Flix</a> books an
                            introduction to Flix for programmers who are already familiar with functional
                            programming.
                        </p>

                        <p>
                            The <a href="http://flix.github.io/api/">Standard Library</a> documentation provides a
                            Javadoc-style description of the Flix API, including the operations available on important
                            types such as <code>Option</code>, <code>Result</code>, and <code>List</code>.
                        </p>

                        <p>
                            The research aspects of Flix are mostly described in the literature.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Documentation;
