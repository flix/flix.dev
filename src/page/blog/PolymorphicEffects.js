import React, {Component} from "react";
import ReactGA from "react-ga";
import {Card, CardBody, CardText, Col, Container, Row} from "reactstrap";
import InlineEditor from "../../util/InlineEditor";

class PolymorphicEffects extends Component {

    componentDidMount() {
        document.title = "Flix | Polymorphic Effects";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>
                <Row className="mb-3">
                    <Col sm={12} md={8}>

                        <h1>Polymorphic Effects with Boolean Unification</h1>

                        <p>
                            Posted May 2020 by <i>Magnus Madsen</i>.
                        </p>

                        <p>
                            Walter quotes from DMars.
                            <p>
                                I spent the first three years of my career working on flight critical mechanical designs
                                for the Boeing 757. Although these were gearboxes, hydraulics, cables and linkages, the
                                methodology used to make error-free systems is very applicable to software design.
                            </p>

                            <br/>
                            For starters is Boeing's attitude towards failure. It is not considered human error,
                            fixable by hiring better people. It is a failure of process. The best people have bad
                            days and make mistakes, so the solution is to change the process so the mistakes cannot
                            happen or cannot propagate.

                            <Card>
                                <CardBody>
                                    <CardText>
                                        One simple example is an assembly that is bolted onto the frame with 4 bolts.
                                        The
                                        obvious bolt pattern is a rectangle. Unfortunately, a rectangle pattern can be
                                        assembled
                                        in two different ways, one of which is wrong. The solution is to offset one of
                                        the bolt
                                        holes — then the assembly can only be bolted on in one orientation. The possible
                                        mechanic's mistake is designed out of the system.

                                        This idea permeates Boeing designs. Parts can only be assembled one way, the
                                        correct
                                        way.
                                    </CardText>
                                </CardBody>
                            </Card>

                            <a href="https://www.digitalmars.com/articles/b60.html">Walter Bright</a>
                        </p>

                        <p>
                            separation of pure and impure code.
                        </p>


                        <p>
                            What is an effect system?
                            Why care? Why enforce?
                        </p>


                        <h2>Enforcing Purity and Impurity</h2>

                        <InlineEditor>
                            {`def exists(f: a -> Bool, xs: Set[a]): Bool & Pure `}
                        </InlineEditor>


                        <InlineEditor>
                            {`def foreach(f: a ~> Unit, xs: List[a]): Unit & Impure = `}
                        </InlineEditor>

                        <InlineEditor>
                            {`def onMouseDown(f: MouseEvent ~> Unit): Unit & Impure
                            def onMouseUp(f: MouseEvent ~> Unit): Unit & Impure = ...`}
                        </InlineEditor>

                        <InlineEditor>
                            {`def assert(f: Unit -> Bool): Unit & Pure = ...
                            def log(f: Unit -> String , l: LogLevel): Unit & Pure = ...`}
                        </InlineEditor>

                        <InlineEditor>
                            {`1 trait Eq[a] {
2 def eq(x: a, y: a): Bool & Pure
3 }`}
                        </InlineEditor>

                        <InlineEditor>
                            {` def minBy(f: a -> b, l: List[a]): a = ...
2 def maxBy(f: a -> b, l: List[a]): a = ...
3 def sortBy(f: a -> Int32, l: List[a]): List[a] = ...
4 def groupBy(f: a -> k, l: List[a]): Map[k, List[a]] = ...`}
                        </InlineEditor>

                        <InlineEditor>
                            {`spawn (2 + 2`}
                        </InlineEditor>

                        <InlineEditor>
                            {`def unfoldWithIter(next: Unit ~> Option[a]): List[a] & Impure`}
                        </InlineEditor>


                        <InlineEditor>
                            {`1 def main(): Int =
2 List.map(x -> x + 1, 1 :: 2 :: Nil);
3 123`}
                        </InlineEditor>


                        <InlineEditor>
                            {`1 -- Redundancy Error ------------------ foo.flix
2
3 >> Useless expression: It has no side-effect(s)
4 and its result is discarded.
5
6 2 | List.map(x -> x + 1, 1 :: 2 :: Nil);
7 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
8 useless expression.`}
                        </InlineEditor>

                        <h2>Polymorphic Effects</h2>

                        <InlineEditor>
                            {`def map(f: a -> b & e, xs: List[a]): List[b] & e = ...`}
                        </InlineEditor>

                        <InlineEditor>
                            {`  def >>(f: a -> b & e1, g: b -> c & e2): a -> c & {e1 /\\ e2} = x -> g(f(x))`}
                        </InlineEditor>


                        <InlineEditor>
                            {` def mapCompose(f: a -> b & e1, g: b -> c & {{(not e1) \\/ e2}}, l: List[a]):
2 List[c] & {{e1 /\\ e2}}`}
                        </InlineEditor>


                        <h2>Type Inference and Boolean Unification</h2>


                    </Col>
                </Row>
            </Container>
        );
    }

}

export default PolymorphicEffects
