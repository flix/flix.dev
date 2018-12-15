import React, {Component} from 'react';
import {Card, CardBody, CardColumns, CardText, CardTitle, Col, Container, Row} from "reactstrap";

class Contribute extends Component {
    render() {
        return (
            <Container>
                <Row className="mb-3">
                    <Col md="12">

                        <h1>Contribute</h1>

                        <p>
                            Flix is an open-source project and made freely available under the <a
                            href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a> license.
                        </p>

                        <p>
                            Most development is research-driven and takes place at <a href="http://cs.au.dk/">Aarhus
                            University</a> and the <a href="http://uwaterloo.ca/"> University of Waterloo</a>.
                        </p>

                        <p>
                            All source code is available online and hosted at <a
                            href="https://github.com/flix/flix">GitHub</a>.

                            We organize development using GitHub <a
                            href="https://github.com/flix/flix/issues">issues</a> and
                            on <a href="https://gitter.im/flix/Lobby">Gitter</a>.
                        </p>

                        <p>
                            If you are interested in learning more about Flix or in working on flix, please feel free to
                            reach out.
                        </p>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md="12">
                        <h2>Projects</h2>

                        <p>
                            We encourage students at Aarhus University and the University of Waterloo that are
                            interested in compilers, programming language design, and implementation to reach out to us
                            to learn about potential projects.
                        </p>

                        <CardColumns>
                            <Card>
                                <CardBody>
                                    <CardTitle>Talent Track Projects</CardTitle>
                                    <CardText>
                                        <p>
                                            Aarhus University offers a talent track program for capable students
                                            that are in their second or third year of students and are interested
                                            in working on a research project for up to one year as an extra
                                            curricular activity.
                                        </p>
                                        <p>
                                            We maintain a collection of <a
                                            href="https://github.com/flix/flix/labels/talent-track">talent
                                            track project ideas</a> on GitHub.
                                        </p>
                                    </CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle>Bachelor and Master Projects</CardTitle>
                                    <CardText>
                                        <p>
                                            If you are a bachelor or master student at Aarhus University it is possible
                                            to write your thesis on a topic related to Flix.
                                        </p>
                                        <p>
                                            We maintain a collection of ideas for <a
                                            href="https://github.com/flix/flix/labels/bachelor-project">bachelor</a>-
                                            and <a
                                            href="https://github.com/flix/flix/labels/master-project">master</a> level
                                            projects. But, we don't necessarily list all our project ideas, as some
                                            might involve research that we want to publish. In any case, you should
                                            reach out to us to hear what kind of research we are currently working on.
                                        </p>
                                    </CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle>Research Collaboration</CardTitle>
                                    <CardText>
                                        <p>
                                            If you are a research interested in the space of programming language design
                                            and implementation, program analysis, logic programming, Datalog, or
                                            any other related topic, you should feel free to reach out to us to talk
                                            about the potential for collaboration.
                                        </p>

                                        <p>
                                            If you want to use Flix in your research, e.g. for program analysis, you
                                            are welcome to reach out to us to us to hear about the current
                                            state-of-affairs and to get information about how to best get started.
                                        </p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contribute;
