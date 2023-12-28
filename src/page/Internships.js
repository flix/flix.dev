import React, {Component} from 'react';
import {CardImg, Col, Container, Row} from "reactstrap";

class Internships extends Component {

    componentDidMount() {
        document.title = "Flix | Internships";
    }

    render() {
        return (<Container>
            <Row className="mb-3">
                <Col md={12}>
                    <h1>Research Internships</h1>
                </Col>

                <Col md={6} className="text-justify">
                    <p className="font-weight-bold mb-4">
                        Interested in programming language research?
                        Want to work on compilers?
                        Want to work on Flix?
                    </p>

                    <p>
                        Then join us for a internship at Aarhus University in Denmark!
                    </p>

                    <hr/>

                    <p>
                        A typical internship lasts 6-8 weeks in the summer period (but other times of year
                        may also be possible).
                    </p>

                    <p>
                        Aarhus University will reimburse travel and visa costs for coming to Denmark.
                        In addition, it is possible to apply for a small stipend to help cover housing and living
                        expenses.
                    </p>

                    <p>
                        To apply, you should be enrolled in a bachelor's or master's degree programme at an accredited
                        university. You should have taken one or two courses on programming languages and on compilers
                        (exceptions can be made for especially talented students.)
                    </p>

                    <hr/>

                    <p>
                        If you have questions, feel free to head over to <a
                        href="https://gitter.im/flix/Lobby">Gitter</a> and talk to us.
                    </p>

                    <hr/>

                    <p>
                        To apply, send an email to <code>magnusm at cs dot au dot dk</code> with a bit of
                        information about yourself.
                    </p>
                </Col>
                <Col md={6}>
                    <CardImg src="/images/katrinebjerg.jpg" alt="Dept. of Computer Science"/>
                </Col>
            </Row>
        </Container>);
    }
}

export default Internships;
