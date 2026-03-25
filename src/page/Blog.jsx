import { useEffect } from 'react';
import {Col, Container, Row} from "reactstrap";
import {Route, Routes} from "react-router";
import ProgrammingLanguageDefense from "./blog/ProgrammingLanguageDefense";
import DesignFlaws from "./blog/DesignFlaws";
import Naming from "./blog/Naming";
import Redundancies from "./blog/Redundancies";
import PolymorphicEffects from "./blog/PolymorphicEffects";

function Blog() {
    useEffect(() => {
        if (!document.title) {
            document.title = "Flix | Blog";
        }
    }, []);

    return (
            <Container>
                <Routes>
                    <Route index element={
                        <Row className="mb-3">
                            <Col>
                                <h1>Blog</h1>

                                The Flix Blog is now available at: <br/>

                                <div className="mt-3">
                                    <a href="https://blog.flix.dev/"><h2>https://blog.flix.dev/</h2></a>
                                </div>
                            </Col>
                        </Row>
                    } />

                    <Route path="in-defense-of-programming-languages/" element={<ProgrammingLanguageDefense/>} />
                    <Route path="taming-impurity-with-polymorphic-effects/" element={<PolymorphicEffects/>} />
                    <Route path="naming-functional-and-destructive-operations/" element={<Naming/>} />
                    <Route path="redundancies-as-compile-time-errors/" element={<Redundancies/>} />
                    <Route path="design-flaws-in-flix/" element={<DesignFlaws/>} />
                </Routes>
            </Container>
    );
}

export default Blog;
