import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import ReactGA from 'react-ga';
import {Link} from "react-router-dom";
import {Route, Switch} from "react-router";

class Blog extends Component {

    componentDidMount() {
        document.title = "Flix | Blog";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>
                <Switch>
                    <Route exact path="/blog/">
                        <Row className="mb-3">
                            <Col>
                                <h1>Blog</h1>
                                <p> We maintain a blog related to the Flix programming language. </p>

                                <p>
                                    The blog has a more personal flair and is mostly intended
                                    for programming language enthusiasts.
                                </p>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <ul>
                                    <li>
                                        <Link to="/blog/design-flaws-in-flix/">
                                            Design Flaws in the Flix Programming Language
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Route>

                    <Route path="/blog/design-flaws-in-flix/">
                        blog1
                    </Route>

                </Switch>
            </Container>
        );
    }
}

export default Blog;
