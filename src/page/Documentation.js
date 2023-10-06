import React, { Component } from 'react';
import { Card, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

import { FaBookReader } from 'react-icons/fa';
import { FaStream } from 'react-icons/fa';
import { FaMicroblog } from 'react-icons/fa';
import { FaGitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaRegLaughSquint } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { GoGraph } from 'react-icons/go';

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
                    <Col md="6">
                        <a href="https://doc.flix.dev/" className="text-primary">
                            <Card body className="h-100">
                                <CardSubtitle className="text-center m-4">
                                    <FaBookReader style={{ fontSize: '6em' }} />
                                </CardSubtitle>
                                <CardTitle className="text-center">
                                    Programming Flix
                                </CardTitle>
                                <CardText className="text-dark">
                                    The book provides an introduction to Flix for functional programmers. The book
                                    demonstrates the core concepts of Flix through several examples.
                                </CardText>
                            </Card>
                        </a>
                    </Col>
                    <Col md="6">
                        <a href="https://api.flix.dev/" className="text-success">
                            <Card body className="h-100">
                                <CardSubtitle className="text-center m-4">
                                    <FaStream style={{ fontSize: '6em' }} />
                                </CardSubtitle>
                                <CardTitle className="text-center">
                                    Standard Library
                                </CardTitle>
                                <CardText className="text-dark">
                                    The documentation provides a Javadoc-style description of the Flix library.
                                </CardText>
                            </Card>
                        </a>
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
                        <Link to="/research">
                            <Card body className="h-100">
                                <CardSubtitle className="text-center m-4 text-black-50">
                                    <MdSchool style={{ fontSize: '3em' }} />
                                </CardSubtitle>
                                <CardTitle className="text-center link-primary">
                                    Research Papers
                                </CardTitle>
                            </Card>
                        </Link>
                    </Col>

                    <Col lg="2">
                        <Link to="/blog/">
                            <Card body className="h-100">
                                <CardSubtitle className="text-center m-4 text-black-50">
                                    <FaMicroblog style={{ fontSize: '3em' }} />
                                </CardSubtitle>
                                <CardTitle className="text-center link-primary">
                                    Blog
                                </CardTitle>
                            </Card>
                        </Link>
                    </Col>

                    <Col lg="2">
                        <a href="https://gitter.im/flix/Lobby">
                            <Card body className="h-100">
                                <CardSubtitle className="text-center m-4 text-black-50">
                                    <FaGitter style={{ fontSize: '3em' }} />
                                </CardSubtitle>
                                <CardTitle className="text-center link-primary">
                                    Gitter
                                </CardTitle>
                            </Card>
                        </a>
                    </Col>

                    <Col lg="2">
                        <a href="https://github.com/flix/flix">
                            <Card body className="h-100">
                                <CardSubtitle className="text-center m-4 text-black-50">
                                    <FaGithub style={{ fontSize: '3em' }} />
                                </CardSubtitle>
                                <CardTitle className="text-center link-primary">
                                    GitHub
                                </CardTitle>
                            </Card>
                        </a>
                    </Col>

                    <Col lg="2">
                        <a href="https://arewefast.flix.dev/">
                            <Card body className="h-100">
                                <CardSubtitle className="text-center m-4 text-black-50">
                                    <GoGraph style={{ fontSize: '3em' }} />
                                </CardSubtitle>
                                <CardTitle className="text-center link-primary">
                                    Compiler Perf
                                </CardTitle>
                            </Card>
                        </a>
                    </Col>

                    <Col lg="2">
                        <Link to="/misc/checklist">
                            <Card body className="h-100">
                                <CardSubtitle className="text-center m-4 text-black-50">
                                    <FaRegLaughSquint style={{ fontSize: '3em' }} />
                                </CardSubtitle>
                                <CardTitle className="text-center link-primary">
                                    Language Checklist
                                </CardTitle>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Documentation;
