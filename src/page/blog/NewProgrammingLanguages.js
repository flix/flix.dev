import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";
import InlineEditor from "../../util/InlineEditor";

class NewProgrammingLanguages extends Component {

    componentDidMount() {
        document.title = "Flix | Do we really need new programming languages?";
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>
                <Row className="mb-3">
                    <Col sm={12} md={8}>

                        <h1>Do we really need new programming languages?</h1>

                        <p>
                            Posted July 2021 by <i>Magnus Madsen</i>.
                        </p>

                        <p>
                            Heal the divide and explain the confusion,
                        </p>

                        <p>
                            A few choice quites
                        </p>


                        <p>
                            Where Flix fits in. We should be held to a high standard, but
                            people should also engange honestly by understanding the details.
                        </p>

                    </Col>
                </Row>
            </Container>
        );
    }

}

export default NewProgrammingLanguages
