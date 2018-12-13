import React, {Component} from 'react';
import {Card, CardBody, CardColumns, CardText, CardTitle, Container} from "reactstrap";

class Contribute extends Component {
    render() {
        return (
            <Container>
                <h1>Contribute</h1>

                <p>
                    Flix is open-source and freely available under the <a
                    href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a> license.
                </p>

                <p>
                    Most development is research-driven and happens at <a href="http://cs.au.dk/">Aarhus
                    University</a> and the <a href="http://uwaterloo.ca/"> University of Waterloo</a>.
                </p>

                <p>
                    All source code is available online and hosted at <a href="https://github.com/flix/flix">GitHub</a>.

                    We organize using GitHub <a href="https://github.com/flix/flix/issues">issues</a> and occasionally
                    on <a href="https://gitter.im/flix/Lobby">Gitter</a>.
                </p>

                <p>
                    If you are interested in helping out with Flix, please reach out to us on GitHub or Gitter.
                </p>

                <h2>Projects</h2>

                <p>
                    We encourage students at Aarhus University and the University of Waterloo who are interested in
                    programming language design and implementation to reach out to us to hear about potential projects.
                </p>

                <CardColumns>
                    <Card>
                        <CardBody>
                            <CardTitle>Talent Track Projects</CardTitle>
                            <CardText>
                                <p>
                                    Aarhus University offers a talent track program for second and third year students
                                    who are interested in working on research project for up to one year as an extra
                                    curricular activity.
                                </p>
                                <p>
                                    We try maintain a collection of ideas for <a
                                    href="https://github.com/flix/flix/labels/talent-track">talent
                                    track projects</a> on GitHub.
                                </p>
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle>Bachelor and Master Projects</CardTitle>
                            <CardText>
                                <p>
                                    We also try to maintain a collection of ideas for <a
                                    href="https://github.com/flix/flix/labels/bachelor-project">bachelor</a>- or <a
                                    href="https://github.com/flix/flix/labels/bachelor-project">master</a> level
                                    projects. In many cases though, you will want to reach out to us, to hear
                                    more about the kind of research we are currently involved in. We might also not list
                                    all project ideas since some may involve potential research that want to publish.
                                </p>
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle>Research Collaboration</CardTitle>
                            <CardText>
                                <p>
                                    If you are a researcher working on programming language design, program analysis,
                                    logic programming, Datalog, or any other related topics, and are interested in
                                    collaboration on flix or perhaps to use flix in your research, you are most welcome
                                    to reach out to us.
                                </p>

                                <p>
                                    (You can find our e-mails on our respective academic web pages.)
                                </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </CardColumns>

            </Container>
        );
    }
}

export default Contribute;
