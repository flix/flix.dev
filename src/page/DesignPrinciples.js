import React, {Component} from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {Container, Row, Col} from 'reactstrap';


class DesignPrinciples extends Component {
    render() {
        return (
            <div>
                <h1>Design Principles</h1>

                <Container>
                    <Row>
                        <Col xs="6">

                            <Principle name=" Safety first, performance second.">
                                bla bla bla
                            </Principle>
                        </Col>
                        <Col xs="6">
                            <Principle name=" Simple is not easy, will not sacrifice a principle for practicality">
                                bla bla bla
                            </Principle>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class Principle extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.name}</CardTitle>
                        <CardText>{this.props.children}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default DesignPrinciples;
