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
                    Flix embraces a set of design principles.
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

                    <Principle name="No Nulls">
                        Flix does not have a special <code>null</code> value.
                        The presence of null as a subtype of any type is now widely considered a mistake.
                        The inventor of null, Sir Tony Hoare, has famously called it his billion dollar mistake.
                        Languages with null, such as C#, Dart, Kotlin, Scala, etc. are rapidly scrambling to adopt
                        mechanism to ensure non-nullness. In Flix, we adopt the standard solution to the represent
                        the absence of a value using the <code>Option</code> type. This solution is simple to understand,
                        works well, and guarantees the absence of dreaded <code>NullPointerException</code>s.
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
