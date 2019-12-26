import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";

class DesignFlaws extends Component {

    componentDidMount() {
        document.title = "Flix | Design Flaws in Flix";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>

                        <h1>Design Flaws in Flix</h1>

                        <p>
                            By <i>Magnus Madsen</i>, posted January 2020.
                        </p>

                        <p>

                        </p>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DesignFlaws
