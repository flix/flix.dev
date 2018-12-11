import React, {Component} from 'react';
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';

import lipsum from 'lorem-ipsum';

class DesignPrinciples extends Component {
    render() {
        return (
            <Container>
                <h1>Design Principles</h1>

                <Row>
                    <Col xs="6">

                        <Principle name="Safety first, performance second.">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name="    No order of declarations">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name=" No coercions">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name="   No global state.">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name="     Keyword-based syntax">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>


                        <Principle name="    Every function is curried">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name="        Local type inference">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name="      Uniform function call syntax (UFCS)">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name="         Consistent syntax for expressions and types">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name="               Private visibility by default">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                    </Col>
                    <Col xs="6">
                        <Principle name=" Simple is not easy, will not sacrifice a principle for practicality">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>


                        <Principle name="   Everything is an expression">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name=" Arbitrary-precision Arithmetic.">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name="     Illegal states should be unrepresentable.">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name="    No-nulls.">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name="          No Initialization code before main">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name=" All warnings are compile-time errors">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name="            Human-Readable error messages">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name="    Patterns must be exhaustive">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>

                        <Principle name="    Checked array accesses.">
                            {lipsum({count: 3, units: 'sentences'})}
                        </Principle>
                    </Col>
                </Row>
            </Container>
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
