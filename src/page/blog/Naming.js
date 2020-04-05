import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";
import InlineEditor from "../../util/InlineEditor";

class Naming extends Component {

    componentDidMount() {
        document.title = "Flix | How to name Functional and Destructive Operations";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>
                <Row className="mb-3">
                    <Col sm={12} md={8}>

                        <h1>How to name Functional and Destructive Operations</h1>

                        <p>
                            Posted April 2020 by <i>Magnus Madsen</i>.
                        </p>

                        <p>
                            It is said that there are only two hard problems in computer science: (i) naming, (ii) cache
                            invalidation, and (iii) off-by-one errors. This post is about the former: Naming.
                        </p>

                        <p>
                            I recently stumbled into a problem with naming that I was not aware existed.
                        </p>

                        <p>
                            In Flix we support both functional and imperative programming (and logic programming, but
                            that is for another day).
                            We have recently extended the standard library with support for arrays. This is where the
                            naming issue comes in.
                        </p>

                        <p>
                            Let us take one of our favorite data structures, the list. We can <code>map</code> over a
                            list:
                        </p>

                        <InlineEditor>
                            {` def map(f: a -> b & e, xs: List[a]): List[b] & e`}
                        </InlineEditor>

                        <p>
                            But we can also map over an Option (which w can think of as an empty list or a list with one
                            element)
                        </p>

                        <InlineEditor>
                            {`def map(f: a -> b & e, o: Option[a]): Option[b] & e`}
                        </InlineEditor>

                        <p>
                            Category theorists will tell us that this is no accident, but that is a discussion for
                            another day.
                        </p>

                        <p>
                            Let us return to arrays. If we have an array of some elements, we should be able to map a
                            function over its elements and obtain a new array. And indeed we can:
                        </p>

                        <InlineEditor>
                            {`def map(f: a -> b & e, a: Array[a]): Array[b] & Impure`}
                        </InlineEditor>

                        <p>
                            This is great and as we would expect, but one of the major reasons for having arrays in the
                            first place is that we want to <i>mutably</i> change their contents.
                        </p>

                        <p>
                            What we would like is an operation that applies a function to every element <i>changing the
                            array in place</i>. What should this function be called? Our first idea was:
                        </p>

                        <InlineEditor>
                            {`def mapInPlace(f: a -> a, a: Array[a]): Unit & Impure`}
                        </InlineEditor>

                        <p>
                            Notice that the signature of <code>mapInPlace</code> is different from <code>map</code> in
                            two important ways:
                            (i) It returns <code>Unit</code> instead of <code>Array[b]</code> which makes sense since it
                            is mutating and more interestingly (ii) it takes a function from <code>a -> a</code> instead
                            of from <code>a -> b</code>. The latter point will become important later on when we try to
                            formulate some principles for
                            naming. The reason is that, in general, if you have an array of some
                            type then you cannot change it, in place, to a different type because the memory layout
                            might not work out. For example, if you have an array of bytes, you cannot suddenly replace
                            that by an array of strings.
                        </p>



                        <h2>Principles</h2>

                        <p>
                            This leads us to the principles:
                        </p>

                        <p>
                            Restate here.
                        </p>

                        <p>
                            Until next time, happy hacking.
                        </p>

                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Naming
