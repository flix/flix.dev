import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
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
    }

    render() {
        return (
            <Container>
                <Switch>
                    <Route exact path="/blog/">
                        <Row className="mb-3">
                            <Col>
                                <h1>Blog</h1>

                                The Flix Blog is now available at: <br/>

                                <div className="mt-3">
                                    <a href="https://blog.flix.dev/"><h2>https://blog.flix.dev/</h2></a>
                                </div>
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
