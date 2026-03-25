import { useEffect } from 'react';
import {Col, Container, Row} from "reactstrap";

function Blog() {
    useEffect(() => {
        document.title = "Flix | Blog";
    }, []);

    return (
            <Container>
                <Row className="mb-3">
                    <Col>
                        <h1>Blog</h1>

                        The Flix Blog is now available at: <br/>

                        <div className="mt-3">
                            <a href="https://blog.flix.dev/"><h2>https://blog.flix.dev/</h2></a>
                        </div>
                    </Col>
                </Row>
            </Container>
    );
}

export default Blog;
