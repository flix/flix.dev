import React, {Component} from "react";
import ReactGA from "react-ga";
import {Card, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import InlineEditor from "../../util/InlineEditor";
import {Link} from "react-router-dom";

class PolymorphicEffects extends Component {

    componentDidMount() {
        document.title = "Flix | Polymorphic Effects";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>
                <Row className="mb-3">
                    <Col sm={12} md={8}>

                        <h1>Polymorphic Effects</h1>

                        <p>
                            Posted May 2020 by <i>Magnus Madsen</i>.
                        </p>



                    </Col>
                </Row>
            </Container>
        );
    }

}

export default PolymorphicEffects
