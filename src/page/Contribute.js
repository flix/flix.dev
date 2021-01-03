import React, {Component} from 'react';
import {Card, CardBody, CardColumns, CardTitle, Col, Container, Row} from "reactstrap";
import ReactGA from 'react-ga';

class Contribute extends Component {

    componentDidMount() {
        document.title = "Flix | Contribute";
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <Container>
                <Row className="mb-3">
                    <Col md="12">

                        <h1>Contribute</h1>

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
                            Flix is developed at <a
                            href="http://cs.au.dk/research/programming-languages/">Aarhus
                            University</a> and the <a href="http://plg.uwaterloo.ca"> University of Waterloo</a> and by
                            a community of open source contributors.
                        </p>

                        <p>
                            If you are interested working on Flix, please feel free to reach out. We have had several
                            excellent mentor experiences in the Flix project.
                        </p>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md="12">
                        <h2>Projects</h2>

                        <CardColumns>
                            <Card>
                                <CardBody>
                                    <CardTitle>Open Source Mentorship</CardTitle>
                                    <p>
                                        We are more than happy to mentor someone who is interested in working on
                                        compilers and/or programming language design and wants to contribute to Flix. We
                                        have already had several positive experiences working with open source
                                        contributors.
                                    </p>

                                    <p>
                                        If you want to become involved, send us a ping on <a
                                        href="https://gitter.im/flix/Lobby">Gitter</a>, and we can have a chat
                                        about your interests.
                                    </p>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle>Talent Track Projects</CardTitle>
                                    <p>
                                        Aarhus University offers a talent track program for capable students
                                        that are in their second or third year of studies and are interested
                                        in working on a research project for up to one year as an extracurricular
                                        activity.
                                    </p>

                                    <p>
                                        We maintain a collection of <a
                                        href="https://github.com/flix/flix/labels/talent-track">talent
                                        track project ideas</a> on GitHub.
                                    </p>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle>Bachelor and Master Projects</CardTitle>
                                    <p>
                                        If you are a bachelor or master student at Aarhus University you can
                                        write your thesis on a topic related to Flix.
                                    </p>

                                    <p>
                                        We maintain a collection of ideas for <a
                                        href="https://github.com/flix/flix/labels/bachelor-project">bachelor</a>-
                                        and <a
                                        href="https://github.com/flix/flix/labels/master-project">master</a> level
                                        projects. The project list is not always completely up to date, so feel free to
                                        reach out to us.
                                    </p>
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
