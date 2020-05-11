import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";
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

                        <h1>Polymorphic Effects</h1>

                        <p>
                            Posted May 2020 by <i>Magnus Madsen</i>.
                        </p>

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

                    </Col>
                </Row>
            </Container>
        );
    }

}

export default PolymorphicEffects
