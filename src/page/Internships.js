import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class Internships extends Component {

    componentDidMount() {
        document.title = "Flix | Internships";
    }

    render() {
        return (<Container>
                <Row className="mb-3">
                    <Col>

                        <h1>Research Internships</h1>

                        <p className="font-weight-bold mt-4 mb-4">
                            Interested in programming language research?
                            Want to work on compilers?
                            Want to work on Flix?
                        </p>

                        <p>
                            Then join us for a research internship at Aarhus University in Denmark!
                        </p>

                        <hr/>

                        <p>
                            To apply, send an email to <code>magnusm at cs dot au dot dk</code> with a bit of
                            information about yourself.
                        </p>

                        <p>
                            A typical research internship lasts 6-8 weeks in the summer period (but other times of year
                            may also be possible).
                        </p>

                        <hr/>

                        <p>
                            Aarhus University will reimburse travel and visa costs for coming to Denmark.
                            In addition, it is possible to apply for a small stipend to help cover housing and living
                            expenses. To apply, you must currently be enrolled in a bachelor's or master's degree
                            programme at an accredited university.
                        </p>

                        <p>
                            If you have questions, feel free to head over to <a
                            href="https://gitter.im/flix/Lobby">Gitter</a> and talk to us.
                        </p>
                    </Col>
                </Row>
            </Container>);
    }
}

export default Internships;
