import React, {Component} from 'react';
import {Card, CardImg, Col, Container, Row} from "reactstrap";
import inlineDiagnostics from '../gif/inlineDiagnostics.png'
import autoComplete from '../gif/autoComplete.png'
import snippetComplete from '../gif/snippetComplete.png'
import hover from '../gif/hover.png'
import rename from '../gif/rename.png'
import quickfix from '../gif/quickfix.png'
import codelens from '../gif/codelens.png'

class VSCode extends Component {

    componentDidMount() {
        document.title = "Flix | Visual Studio Code Features";
    }

    render() {
        return (<Container>
            <Row className="mb-3">
                <Col md={12}>
                    <h1>Visual Studio Code Features</h1>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6}>
                    <h4>Inline Diagnostics</h4>
                    <p>
                        Flix shows inline diagnostics.
                    </p>
                    <Card>
                        <CardImg top src={inlineDiagnostics}/>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6}>
                    <h4>Auto Completion</h4>
                    <p>
                        Flix supports auto-completion of a range of program elements.
                    </p>
                    <Card>
                        <CardImg top src={autoComplete}/>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6}>
                    <h4>Snippet Completion</h4>
                    <p>
                        Flix supports snippet completion for large program fragments.
                        For example, we can auto-complete trait instances.
                    </p>
                    <Card>
                        <CardImg top src={snippetComplete}/>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6}>
                    <h4>Hover</h4>
                    <p>
                        Flix supports hovering over program fragments to show their documentation, type, effect, and kind.
                    </p>
                    <Card>
                        <CardImg top src={hover}/>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6}>
                    <h4>Rename</h4>
                    <p>
                        Flix supports automatic renaming of most program elements.
                    </p>
                    <Card>
                        <CardImg top src={rename}/>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6}>
                    <h4>Quick Fixes</h4>
                    <p>
                        Flix supports some quick fixes for simple program errors.
                        Here we automatically derive a missing <code>eq</code> instance.
                    </p>
                    <Card>
                        <CardImg top src={quickfix}/>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6}>
                    <h4>Code Lens</h4>
                    <p>
                        Flix supports code lenses for running main, functions, and tests.
                    </p>
                    <Card>
                        <CardImg top src={codelens}/>
                    </Card>
                </Col>
            </Row>
        </Container>);
    }
}

export default VSCode;
