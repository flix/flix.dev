import React, {Component} from 'react';
import {Card, CardSubtitle, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

import {FaBookReader} from 'react-icons/fa';
import {FaStream} from 'react-icons/fa';
import {FaVihara} from 'react-icons/fa';
import {FaMicroblog} from 'react-icons/fa';
import {FaGitter} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaRegLaughSquint} from 'react-icons/fa';
import {MdSchool} from 'react-icons/md';
import {GoGraph} from 'react-icons/go';

class Documentation extends Component {

    componentDidMount() {
        document.title = "Flix | Documentation";
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
                    <Col md="4">
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://doc.flix.dev/" className="text-primary">
                                    <FaBookReader style={{fontSize: '6em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">
                                <a href="https://doc.flix.dev/">Programming Flix</a>
                            </CardTitle>
                            <CardText>
                                The book provides an introduction to Flix for functional programmers. The book
                                demonstrates the core concepts of Flix through several examples.
                            </CardText>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://api.flix.dev/" className="text-success">
                                    <FaStream style={{fontSize: '6em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">
                                <a href="https://api.flix.dev/">
                                    Standard Library
                                </a>
                            </CardTitle>
                            <CardText>
                                The documentation provides a Javadoc-style description of the Flix library.
                            </CardText>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <Link to="/misc/koans" className="text-black-50">
                                    <FaVihara style={{fontSize: '6em'}}/>
                                </Link>
                            </CardSubtitle>
                            <CardTitle className="text-center">
                                <Link to="/misc/koans">
                                    Flix Koans
                                </Link>
                            </CardTitle>
                            <CardText>
                                The koans presents several realistic examples of logic programming with first-class
                                Datalog constraints in Flix.
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
                    <Col lg="2">
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <Link to="/research" className="text-black-50">
                                    <MdSchool style={{fontSize: '3em'}}/>
                                </Link>
                            </CardSubtitle>
                            <CardTitle className="text-center">
                                <Link to="/research"> Research Papers </Link>
                            </CardTitle>
                        </Card>
                    </Col>

                    <Col lg="2">
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <Link to="/blog/" className="text-black-50">
                                    <FaMicroblog style={{fontSize: '3em'}}/>
                                </Link>
                            </CardSubtitle>
                            <CardTitle className="text-center">
                                <Link to="/blog/"> Blog </Link>
                            </CardTitle>
                        </Card>
                    </Col>

                    <Col lg="2">
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://gitter.im/flix/Lobby" className="text-black-50">
                                    <FaGitter style={{fontSize: '3em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">
                                <a href="https://gitter.im/flix/Lobby"> Gitter </a>
                            </CardTitle>
                        </Card>
                    </Col>

                    <Col lg="2">
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://github.com/flix/flix" className="text-black-50">
                                    <FaGithub style={{fontSize: '3em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">
                                <a href="https://github.com/flix/flix"> GitHub </a>
                            </CardTitle>
                        </Card>
                    </Col>

                    <Col lg="2">
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://arewefast.flix.dev/" className="text-black-50">
                                    <GoGraph style={{fontSize: '3em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">
                                <a href="https://arewefast.flix.dev/"> Compiler Perf </a>
                            </CardTitle>
                        </Card>
                    </Col>

                    <Col lg="2">
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <Link to="/misc/checklist" className="text-black-50">
                                    <FaRegLaughSquint style={{fontSize: '3em'}}/>
                                </Link>
                            </CardSubtitle>
                            <CardTitle className="text-center">
                                <Link to="/misc/checklist"> Language Checklist </Link>
                            </CardTitle>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Documentation;
