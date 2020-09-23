import React, {Component} from 'react';
import {Card, CardSubtitle, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import ReactGA from 'react-ga';
import {Link} from "react-router-dom";

import {FaBookReader} from 'react-icons/fa';
import {FaStream} from 'react-icons/fa';
import {FaVihara} from 'react-icons/fa';
import {FaGitter} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaRegLaughSquint} from 'react-icons/fa';
import {MdSchool} from 'react-icons/md';
import {GoGraph} from 'react-icons/go';

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

                <Row className="mb-4">
                    <Col>
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://doc.flix.dev/" className="text-primary">
                                    <FaBookReader style={{fontSize: '6em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">Programming Flix</CardTitle>
                            <CardText>
                                The <a href="https://doc.flix.dev/">Programming Flix</a> book provides an
                                introduction to Flix for functional programmers. The book demonstrates the core concepts
                                of Flix through several examples.
                            </CardText>
                        </Card>
                    </Col>
                    <Col>
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://api.flix.dev/" className="text-success">
                                    <FaStream style={{fontSize: '6em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">Standard Library</CardTitle>
                            <CardText>
                                The <a href="https://api.flix.dev/">Standard Library</a> documentation provides a
                                Javadoc-style description of the Flix standard library with API documentation for
                                important data types such as <code>Option</code>, <code>Result</code>,
                                and <code>List</code>.
                            </CardText>
                        </Card>
                    </Col>
                    <Col>
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <Link to="/misc/koans" className="text-black-50">
                                    <FaVihara style={{fontSize: '6em'}}/>
                                </Link>
                            </CardSubtitle>
                            <CardTitle className="text-center">Flix Koans</CardTitle>
                            <CardText>
                                The <Link to="/misc/koans">Flix Koans</Link> presents several
                                realistic examples of logic programming with first-class Datalog constraints in Flix.
                            </CardText>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <p>
                            You may also be interested in these additional resources:
                        </p>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <Link to="/research" className="text-black-50">
                                    <MdSchool style={{fontSize: '3em'}}/>
                                </Link>
                            </CardSubtitle>
                            <CardTitle className="text-center">Research Papers</CardTitle>
                            <CardText>
                                Read published scientific papers on the foundations of Flix.
                            </CardText>
                        </Card>
                    </Col>

                    <Col>
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://gitter.im/flix/Lobby" className="text-black-50">
                                    <FaGitter style={{fontSize: '3em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">Gitter</CardTitle>
                            <CardText>
                                Chat with us on Gitter. Ask questions and get help.
                            </CardText>
                        </Card>
                    </Col>

                    <Col>
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://github.com/flix/flix/issues" className="text-black-50">
                                    <FaGithub style={{fontSize: '3em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">GitHub</CardTitle>
                            <CardText>
                                Report bugs or participate in discussions.
                            </CardText>
                        </Card>
                    </Col>

                    <Col>
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://arewefast.flix.dev/" className="text-black-50">
                                    <GoGraph style={{fontSize: '3em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">Compiler Perf</CardTitle>
                            <CardText>
                                Track compiler performance over time.
                            </CardText>
                        </Card>
                    </Col>

                    <Col>
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <Link to="/misc/checklist" className="text-black-50">
                                    <FaRegLaughSquint style={{fontSize: '3em'}}/>
                                </Link>
                            </CardSubtitle>
                            <CardTitle className="text-center">Language Checklist</CardTitle>
                            <CardText>
                                Enjoy a quick laugh.
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Documentation;
