import React, {Component} from 'react';
import {Card, CardSubtitle, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import ReactGA from 'react-ga';
import {Link} from "react-router-dom";

import {FaBookReader} from 'react-icons/fa';
import {FaStream} from 'react-icons/fa';
import {FaVihara} from 'react-icons/fa';

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


                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://flix.dev/programming-flix/" className="text-primary">
                                    <FaBookReader style={{fontSize: '6em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">Programming Flix</CardTitle>
                            <CardText>
                                The <a href="https://flix.dev/programming-flix/">Programming Flix</a> book offers an
                                introduction to Flix for programmers who are already familiar with functional
                                programming. The book covers all the core concepts of Flix with runnable examples.
                            </CardText>
                        </Card>
                    </Col>
                    <Col>
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://flix.dev/api/" className="text-success">
                                    <FaStream style={{fontSize: '6em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">Standard Library</CardTitle>
                            <CardText>
                                The <a href="https://flix.dev/api/">Standard Library</a> documentation provides a
                                Javadoc-style description of the Flix API. The standard library includes important data
                                types such as <code>Option</code>, <code>Result</code>, and <code>List</code>.
                            </CardText>
                        </Card>
                    </Col>
                    <Col>
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://flix.dev/papers/flix-koans.pdf" className="text-info">
                                    <FaVihara style={{fontSize: '6em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">Flix Koans</CardTitle>
                            <CardText>
                                The <a href="https://flix.dev/papers/flix-koans.pdf">Flix Koans</a> gives several
                                examples of logic programming in Flix. These examples illustrate how first-class Datalog
                                constraints can be used to solve a variety of graph problems.
                            </CardText>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
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
