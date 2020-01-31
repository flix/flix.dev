import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";
import InlineEditor from "../../util/InlineEditor";

class Redundancies extends Component {

    componentDidMount() {
        document.title = "Flix | Blog | Redundancies as Compile-Time Errors";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>
                <Row className="mb-3">
                    <Col sm={12} md={8}>

                        <h1>Redundancies as Compile-Time Errors</h1>

                        <p>
                            ...
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Redundancies
