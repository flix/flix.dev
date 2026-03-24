import React, {Component} from 'react';
import {Card, CardBody, CardTitle, Col, Container, Row} from "reactstrap";

class Contribute extends Component {

    componentDidMount() {
        document.title = "Flix | Contribute";
    }

    render() {
        return (
            <Container>
                <Row className="mb-3">
                    <Col>

                        <h1>Contribute</h1>

                        <p>
                            Flix is developed at <a
                            href="http://cs.au.dk/research/programming-languages/">Aarhus
                            University</a>, at the <a href="http://plg.uwaterloo.ca"> University of Waterloo</a>, and by
                            a community of <a href="https://github.com/flix/flix/graphs/contributors">open source
                            contributors</a>.
                        </p>

                        <p>
                            Flix is open-source and freely available under the <a
                            href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a> license.
                        </p>

                        <p>
                            All source code is available on <a
                            href="https://github.com/flix/flix">GitHub</a>.

                            We organize development using <a
                            href="https://github.com/flix/flix/issues">GitHub issues</a> and <a
                            href="https://gitter.im/flix/Lobby">Gitter</a>.
                        </p>

                        <p>
                            If you are interested working on Flix, please feel free to reach out to us.
                        </p>
                    </Col>
                </Row>

                <h2>Projects</h2>

                <Row className="mb-3">
                    <Col md="4">
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle>Open Source Mentoring</CardTitle>
                                <p>
                                    We are more than happy to mentor someone who is interested in working on compilers
                                    and/or programming language design and wants to contribute to Flix. We have already
                                    had several positive experiences working with open source
                                    contributors.
                                </p>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md="4">
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle>Talent Track Projects</CardTitle>
                                <p>
                                    Aarhus University offers a talent track program for capable students that are in
                                    their second or third year of studies and are interested in working on a research
                                    project for up to one year as an extracurricular activity.
                                </p>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md="4">
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle>Bachelor and Master Projects</CardTitle>
                                <p>
                                    If you are a bachelor or master student at Aarhus University you can
                                    write your thesis on a topic related to Flix.
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contribute;
