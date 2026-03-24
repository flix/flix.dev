import React, {Component} from 'react';
import {Card, CardSubtitle, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

import {FaBookReader} from 'react-icons/fa';
import {FaStream} from 'react-icons/fa';
import {FaMicroblog} from 'react-icons/fa';
import {FaGitter} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {GoGraph} from 'react-icons/go';
import {MdSchool} from 'react-icons/md';

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
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://doc.flix.dev/" className="text-primary">
                                    <FaBookReader style={{fontSize: '6em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">
                                <a href="https://doc.flix.dev/" className="text-primary">
                                    Programming Flix (doc.flix.dev)
                                </a>
                            </CardTitle>
                            <CardText className="text-dark text-center">
                                A detailed introduction to the Flix Programming Language.
                            </CardText>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card body className="h-100">
                            <CardSubtitle className="text-center m-4">
                                <a href="https://api.flix.dev/" className="text-success">
                                    <FaStream style={{fontSize: '6em'}}/>
                                </a>
                            </CardSubtitle>
                            <CardTitle className="text-center">
                                <a href="https://api.flix.dev/" className="text-success">
                                    Standard Library (api.flix.dev)
                                </a>
                            </CardTitle>
                            <CardText className="text-dark text-center">
                                A Javadoc-style description of the Flix Standard Library.
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
                        <a href="https://doc.flix.dev/research-literature.html">
                            <Card body className="h-100">
                                <CardSubtitle className="text-center m-4 text-black-50">
                                    <MdSchool style={{fontSize: '3em'}}/>
                                </CardSubtitle>
                                <CardTitle className="text-center link-primary">
                                    Research
                                </CardTitle>
                            </Card>
                        </a>
                    </Col>

                    <Col lg="2">
                        <Link to="/blog/">
                            <Card body className="h-100">
                                <CardSubtitle className="text-center m-4 text-black-50">
                                    <FaMicroblog style={{fontSize: '3em'}}/>
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
                                    <FaGitter style={{fontSize: '3em'}}/>
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
                                    <FaGithub style={{fontSize: '3em'}}/>
                                </CardSubtitle>
                                <CardTitle className="text-center link-primary">
                                    GitHub
                                </CardTitle>
                            </Card>
                        </a>
                    </Col>

                    <Col lg="2">
                        <a href="https://twitter.com/flixlang">
                            <Card body className="h-100">
                                <CardSubtitle className="text-center m-4 text-black-50">
                                    <FaTwitter style={{fontSize: '3em'}}/>
                                </CardSubtitle>
                                <CardTitle className="text-center link-primary">
                                    Twitter
                                </CardTitle>
                            </Card>
                        </a>
                    </Col>

                    <Col lg="2">
                        <a href="https://arewefast.flix.dev/">
                            <Card body className="h-100">
                                <CardSubtitle className="text-center m-4 text-black-50">
                                    <GoGraph style={{fontSize: '3em'}}/>
                                </CardSubtitle>
                                <CardTitle className="text-center link-primary">
                                    Perf
                                </CardTitle>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Documentation;
