import React, {Component} from 'react';
import {Card, CardText, CardBody, CardTitle, CardColumns, Badge} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';

import lipsum from 'lorem-ipsum';

class DesignPrinciples extends Component {
    render() {
        return (
            <Container>
                <h1>Design Principles</h1>

                <p>
                    We
                    <strike> With Flix we set out.</strike>
                </p>

                <CardColumns>

                    <Principle name="Safety first, performance second">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                        <Badge>in progress</Badge>
                    </Principle>

                    <Principle name="    No order of declarations">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name=" No coercions">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="   No global state.">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="     Keyword-based syntax">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="    Every function is curried">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="        Local type inference">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="      Uniform function call syntax (UFCS)">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="         Consistent syntax for expressions and types">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="               Private visibility by default">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name=" Simple is not easy, will not sacrifice a principle for practicality">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name=" Arbitrary-precision Arithmetic.">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="     Illegal states should be unrepresentable.">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="    No-nulls.">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="          No Initialization code before main">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name=" All warnings are compile-time errors">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="            Human-Readable error messages">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="    Patterns must be exhaustive">
                        <div className="alert alert-dark">
                            {lipsum({count: 3, units: 'sentences'})}
                        </div>
                    </Principle>

                    <Principle name="    Checked array accesses.">
                        <div className="alert alert-dark">
                            <div className="alert alert-dark">
                                {lipsum({count: 3, units: 'sentences'})}
                            </div>
                        </div>
                    </Principle>
                </CardColumns>
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
