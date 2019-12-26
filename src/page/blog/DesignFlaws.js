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
                            Inspired by the blog post <a
                            href="https://futhark-lang.org/blog/2019-12-18-design-flaws-in-futhark.html">Design Flaws in
                            Futhark</a>, I decided to take stock and reflect on some of the design flaws we made
                            during the development of the Flix programming language.
                        </p>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DesignFlaws
