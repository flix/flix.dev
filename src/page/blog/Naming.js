import React, {Component} from "react";
import ReactGA from "react-ga";
import {Card, CardColumns, CardText, CardTitle, Col, Container, Row} from "reactstrap";
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

                        <h1>How to Name Functional and Destructive Operations</h1>

                        <p>
                            Posted April 2020 by <i>Magnus Madsen</i>.
                        </p>

                        <p>
                            It has been said that there are only two hard problems in computer-science: (i) naming, (ii)
                            cache invalidation, and (iii) off-by-one errors. In this blog post, I will explain a name
                            consistency issue that arise when you want to have both functional and destructive
                            operations. (A functional operation work on data by returning new data, whereas a
                            destructive operation work on data by mutating existing data.)
                        </p>

                        <p>
                            Flix supports functional, imperative, and logic programming. Flix is intended to
                            be <i>functional-first</i> which simply means that if there are trade-offs between
                            functional and imperative programming, we tend to favor design choices that support
                            functional programming. For example, the Flix effect system separates pure and impure
                            functions.
                        </p>

                        <p>
                            Flix, being imperative, wants to support mutable data structures such as arrays, mutable
                            sets and maps. We were recently adding support for all three.
                        </p>

                        <p>
                            Let us for a moment consider our favorite data structure: the humble list.
                        </p>

                        <p>
                            We can <code>map</code> a function <code>f: a -> b</code> over a list <code>l</code> to
                            obtain a new list of type <code>List[b]</code>:
                        </p>

                        <InlineEditor>
                            {` def map(f: a -> b & e, l: List[a]): List[b] & e`}
                        </InlineEditor>

                        <p>
                            (Here the <code>e</code> denotes that the function is <i>effect polymorphic</i>, but that
                            is for another day.)
                        </p>

                        <p>
                            We can also <code>map</code> a function over an option:
                        </p>

                        <InlineEditor>
                            {`def map(f: a -> b & e, o: Option[a]): Option[b] & e`}
                        </InlineEditor>

                        <p>
                            Category Theorists will claim that this is a conspiracy with deeper and darker forces at
                            play, but I digress...
                        </p>

                        <p>
                            We can also map a function over an array:
                        </p>

                        <InlineEditor>
                            {`def map(f: a -> b & e, a: Array[a]): Array[b] & Impure`}
                        </InlineEditor>

                        <p>
                            This is great: we can program with arrays in a functional-style. This is certainly useful,
                            but the main reason for having arrays (and mutable sets and maps) is to program with them
                            imperatively. We <i>want</i> to have operations that <i>mutate</i> their content.
                        </p>


                        <p>
                            We want an operation that applies a function to every element of an array <i>changing
                            it in place</i>. <b>What should this operation be called?</b> We cannot name
                            it <code>map</code> because that name is already taken by the functional version (and Flix
                            being functional-first, rightly so).
                        </p>

                        <p>
                            Let us simply call it <code>mapInPlace</code> for now:
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

                        <Card body>
                            <CardTitle>Proposal I: Distinct name</CardTitle>
                            <CardText>
                                <b>Proposal:</b> We can try to come up with distinct names. For example, we might have
                                MutSet.map and
                                MutSet.transform. Similarly, we might have MutSet.union and MutSet.addAll. The challenge
                                is
                                to come up with reasonable names. For example, what should we call the two versions of
                                reverse?
                            </CardText>
                            <CardText>
                                <b>Discussion:</b>
                            </CardText>
                        </Card>

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


                        <Card body>
                            <CardTitle>Library: Mutable Data is Functional Data</CardTitle>
                            <CardText>
                                In Flix, every mutable data structure supports functional operations.
                                For example, mutable collections, such
                                as <code>Array</code> and <code>MutSet</code> support
                                the <code>map</code> operation. Flix, being functional-first, reserves functional names
                                for
                                functional operations. Across the standard library <code>map</code> has the same name
                                and the
                                same type signature.
                            </CardText>
                        </Card>

                        <Card body>
                            <CardTitle>Library: Destructive Operations are Marked with !</CardTitle>
                            <CardText>
                                In Flix, every destructive operation is suffixed with an exclamation point. For
                                example, <code>Array.reverse(a)</code> returns a new array with the elements
                                of <code>a</code> in reverse
                                order, whereas <code>Array.reverse!(a)</code> destructively re-orders the elements
                                of <code>a</code>. Note: This principle applies to destructive operations that operate
                                on data
                                structures, not to impure functions in general, e.g. <code>Console.printLine</code>.
                            </CardText>
                        </Card>

                        <Card body>
                            <CardTitle>Library: Consistent Names of Functional and Destructive Operations</CardTitle>
                            <CardText>
                                In Flix, functional and destructive operations that share (i) similar behavior and (ii)
                                similar
                                type signatures share similar names. For
                                example, <code>Array.reverse</code> and <code>Array.reverse!</code> share the
                                same name. On the other hand, <code>Array.transform!</code> is
                                called <code>transform!</code> and not <code>map!</code> because its type signature is
                                dissimilar to map (i.e. map works on functions of type <code>a -> b</code>, but
                                transform
                                requires functions of type <code>a -> a</code>.)
                            </CardText>
                        </Card>

                        <p>
                            What are the concerns going forward? I see at least two potential issues:

                            <ul>
                                <li>Aesthetics - People may not like names !.</li>
                                <li>Misunderstandings of when ! is required.</li>
                                <li>Rust users may think that ! is a macro.</li>
                            </ul>
                        </p>

                        <p>
                            As Flix develops, we will continue to evaluate these drawbacks.
                        </p>

                        <p>
                            Finally, one funny new thing did come out of our experiments. The idea of "forwarders" like
                            an HTML page that forwards you to another page, we could add a notation that says
                            "Array.map" does not exist, but perhaps you meant X.
                            This has yet to be implemented.
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
