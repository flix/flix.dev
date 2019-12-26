import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import ReactGA from 'react-ga';
import {Link} from "react-router-dom";

class Blog extends Component {

    componentDidMount() {
        document.title = "Flix | Blog";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>
                <Row className="mb-3">
                    <Col>
                        <h1>Blog</h1>

                        <p>
                            We maintain slow paced blog of developments related to the Flix programming language.
                        </p>

                        <p>
                            The blog has a more personal flair than the rest of the site.
                        </p>

                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <ul>
                            <li>
                                <Link to="/blog/">
                                    Design Flaws in the Flix Programming Language
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Blog;
