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

                        <p>
                            <code>map</code> and <code>mapInPlace</code> is not the only operations where we want to
                            have both a functional and a destructive operation. In fact, we came up with the following
                            table:

                        </p>

                        <p>
                            <table className="table table-striped small">
                                <thead>
                                <tr>
                                    <th scope="col">Functional</th>
                                    <th scope="col">Destructive</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>map</td>
                                    <td>mapInPlace</td>
                                </tr>
                                <tr>
                                    <td>mapWithIndex</td>
                                    <td>mapWithIndexInPlace</td>
                                </tr>
                                <tr>
                                    <td>reverse</td>
                                    <td>mapWithIndexInPlace</td>
                                </tr>
                                <tr>
                                    <td>replace</td>
                                    <td>mapWithIndexInPlace</td>
                                </tr>
                                <tr>
                                    <td>sort</td>
                                    <td>mapWithIndexInPlace</td>
                                </tr>
                                <tr>
                                    <td>Set.union</td>
                                    <td>???</td>
                                </tr>
                                </tbody>
                            </table>
                        </p>

                        <p>
                            We then realized we had a general problem and a so a general policy was called for.
                        </p>

                        <p>
                            The set union is interesting because ...
                        </p>

                        <p>
                            We tried to explore the design space and we came up with the following potential solutions:
                        </p>

                        <h5>Proposal I: Distinct names</h5>

                        <p>
                            We can try to come up with distinct names. For example, we might have MutSet.map and
                            MutSet.transform. Similarly, we might have MutSet.union and MutSet.addAll. The challenge is
                            to come up with reasonable names. For example, what should we call the two versions of
                            reverse?
                        </p>

                        <h5>Proposal II: Prefixed or suffixed-names</h5>

                        <p>
                            We keep names like map and reverse for the functional variants. For the mutable in place
                            variants, we prepend or append some specific words, e.g. reverseInPlace or mutReverse.
                        </p>

                        <h5> Option 3: Prefixed or suffixed-names with symbols </h5>

                        <p>
                            We go old school. We keep the names map and reverse for the function variants. We name the
                            mutable variants map! and reverse! using the bang (or some other symbol) to signify
                            mutation. This seems very principled, but people might really really dislike the aesthetics.
                        </p>

                        <h5>Option 4: We leverage namespaces</h5>

                        <p>
                            We use namespaces to disambiguate the operations. For example, we might have Array.reverse
                            and MutArray.reverse. Problem: For array there is one data structure trying to supports two
                            types of operations. For Set and MutSet it is more complicated. We would need Set.map,
                            MutSet.Mut.map, and MutSet.Imm.map. That is, Set is for the pure functional data structure,
                            MutSet.Mut is for the mutable set where we use mutable map and MutSet.Imm is for the mutable
                            set but where we use immutable map.
                        </p>

                        <h5>Option 5: We drop the idea of multiple operations</h5>

                        <p>
                            If Array and MutSet are mutable then they simply do not come with a functional map or
                            reverse. If you need that then you must convert the functional to an immutable version and
                            then call the appropriate operation. For example, a.toImmutable().reverse(). Possibly
                            toImmutable() (or maybe just toImm) can be implemented more efficiently than building the
                            entire data structure (but maybe not).
                        </p>

                        <h5>Option 6: Sort vs. Sorted</h5>

                        <p>
                            We use words like sort and sorted, reverse and reversed to distinguish between pure and
                            impure functions.
                        </p>


                        <h2>Principles</h2>

                        <p>
                            We debate these principles, I have already mentioned the discussion below each point, and
                            ultimately we ended up with the following hybrid solution.
                        </p>

                        <p>
                            This leads us to the principles:
                        </p>

                        <p>
                            Restate here.
                        </p>

                        <p>
                            While we now have some principles, whether they are sufficient is yet to be seen.
                            The downside of the alieng naming may be off putting.
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
