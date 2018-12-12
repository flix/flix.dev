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
                    Most development is research-driven and takes place at <a href="http://cs.au.dk/">Aarhus
                    University</a> and the <a
                    href="http://uwaterloo.ca/"> University of Waterloo</a>.
                </p>

                <p>
                    All source code is available online and hosted at <a href="https://github.com/flix/flix">GitHub</a>.
                    We are also on <a href="https://gitter.im/flix/Lobby">Gitter</a>.
                </p>

                <p>
                    If you are interested in working on the Flix compiler or language, please reach out to us on GitHub
                    or Gitter.
                </p>

                <h2>Projects</h2>

                <CardColumns>
                    <Card>
                        <CardBody>
                            <CardTitle>Talent Track Projects</CardTitle>
                            <CardText>
                                Aarhus University offers a talent track program for

                                <br/>
                                We maintain a collection of talent track project ideas on GitHub.
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle>Bachelor and Master Projects</CardTitle>
                            <CardText>


                                <br/>
                                We maintain a collection of bachelor and master project ideas on Github,
                                but we are also open to suggestions from talented students who are interested in
                                some other aspect of programming language design and implementation.
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <CardTitle>Research Collaboration</CardTitle>
                            <CardText>

                            </CardText>
                        </CardBody>
                    </Card>
                </CardColumns>

            </Container>
        );
    }
}

export default Contribute;
