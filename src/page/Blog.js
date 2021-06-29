import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import ReactGA from 'react-ga';
import {Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import ProgrammingLanguageDefense from "./blog/ProgrammingLanguageDefense";
import DesignFlaws from "./blog/DesignFlaws";
import Naming from "./blog/Naming";
import Redundancies from "./blog/Redundancies";
import PolymorphicEffects from "./blog/PolymorphicEffects";

class Blog extends Component {

    componentDidMount() {
        if (!document.title) {
            document.title = "Flix | Blog";
        }
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <Container>
                <Switch>
                    <Route exact path="/blog/">
                        <Row className="mb-3">
                            <Col>
                                <h1>Blog</h1>

                                <p>
                                    We maintain a blog about the development of the Flix programming language.
                                    The blog is slow-moving since most of our writing bandwidth is directed towards
                                    writing documentation and research papers.
                                </p>

                                <p>
                                    The blog has a more personal style and its intended audience is primarily
                                    programming language enthusiasts.
                                </p>

                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <ul>
                                    <li>
                                        <Link to="/blog/taming-impurity-with-polymorphic-effects/">
                                            Taming Impurity with Polymorphic Effects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog/naming-functional-and-destructive-operations/">
                                            Naming Functional and Destructive Operations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog/redundancies-as-compile-time-errors/">
                                            Redundancies as Compile-Time Errors
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog/design-flaws-in-flix/">
                                            Design Flaws in the Flix Programming Language
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Route>


                    <Route path="/blog/in-defense-of-programming-languages/">
                        <ProgrammingLanguageDefense/>
                    </Route>

                    <Route path="/blog/taming-impurity-with-polymorphic-effects/">
                        <PolymorphicEffects/>
                    </Route>

                    <Route path="/blog/naming-functional-and-destructive-operations/">
                        <Naming/>
                    </Route>

                    <Route path="/blog/redundancies-as-compile-time-errors/">
                        <Redundancies/>
                    </Route>

                    <Route path="/blog/design-flaws-in-flix/">
                        <DesignFlaws/>
                    </Route>

                </Switch>
            </Container>
        );
    }
}

export default Blog;
