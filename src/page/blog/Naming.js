import React, {Component} from "react";
import ReactGA from "react-ga";
import {Card, CardText, CardTitle, Col, Container, Row} from "reactstrap";
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
                            This is great: we can program with arrays in a functional-style. Mapping over an array is
                            certainly meaningful and useful, it might even be faster than mapping over a list!
                            Nevertheless, the main reason for having arrays (and mutable sets and maps) is to program
                            with them imperatively. We <i>want</i> to have operations that <i>mutate</i> their content.
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
                            The signature of <code>mapInPlace</code> is different from the signature
                            of <code>map</code> in two important ways:

                            <ul>
                                <li>The function <i>returns</i> <code>Unit</code> instead of an array.</li>
                                <li>The function takes a function of type <code>a -> a</code> rather than a function of
                                    type <code>a -> b</code>.
                                </li>
                            </ul>
                        </p>

                        <p>
                            The latter is necessary because the type of an array is fixed. An array of bytes cannot
                            (type safely) be replaced by an array of strings.
                        </p>

                        <p>
                            The <code>map</code> and <code>mapInPlace</code> functions illustrate the dichotomy between
                            functional and destructive operations. It lead us down to path to questions such as:

                            <ul>
                                <li>What should the two functions be called?</li>
                                <li>Are the two functions sufficiently similar that they should share some common name?
                                    And if so, how should these names be related such that their intent is obvious to
                                    the programmer?
                                </li>
                                <li>When exactly are two functions "sufficiently similar" that they should share the
                                    same name? Is this even true <code>map</code> and <code>mapInPlace</code> given that
                                    only do they differ in functional vs. mutable behavior, but also in the type
                                    signature of <code>f</code>?
                                </li>
                            </ul>
                        </p>

                        <p>
                            To understand the design space, we surveyed the Flix standard library to understand what
                            names were currently being used. The table below lists a small subset of the results:
                        </p>

                        <p>
                            <table className="table table-striped small">
                                <thead>
                                <tr>
                                    <th scope="col">Functional</th>
                                    <th scope="col">Destructive Equivalent</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Array.map</td>
                                    <td>Array.mapInPlace</td>
                                </tr>
                                <tr>
                                    <td>Array.reverse</td>
                                    <td>Array.reverseInPlace</td>
                                </tr>
                                <tr>
                                    <td><i>missing</i></td>
                                    <td>Array.sortByInPlace</td>
                                </tr>
                                <tr>
                                    <td>Set.insert</td>
                                    <td>not relevant &ndash; immutable</td>
                                </tr>
                                <tr>
                                    <td>Set.union</td>
                                    <td>not relevant &ndash; immutable</td>
                                </tr>
                                <tr>
                                    <td><i>missing</i></td>
                                    <td>MutSet.add</td>
                                </tr>
                                <tr>
                                    <td><i>missing</i></td>
                                    <td>MutSet.addAll</td>
                                </tr>
                                <tr>
                                    <td>MutSet.map</td>
                                    <td>MutSet.transform</td>
                                </tr>
                                </tbody>
                            </table>
                        </p>

                        <p>
                            The table shows a naming convention all over the place. Let us consider some of the many
                            inconsistencies: For arrays, the functional and destructive operations are
                            named <code>Array.map</code> and <code>Array.mapInPlace</code>, but for mutable sets the
                            operations are named <code>MutSet.map</code> and <code>MutSet.transform</code>.
                            For immutable sets, we have <code>Set.insert</code> and <code>Set.union</code>, but these
                            functional operations are missing on the mutable set. Moreover, the mutable version
                            of <code>Set.union</code> is called <code>Set.addAll</code>.
                        </p>

                        <h2>Exploring the Design Space</h2>

                        <p>
                            With these challenges at hand, we tried to come up with principled approaches to naming. In
                            particular, we explored the following options:
                        </p>

                        <Card body className="mb-3">
                            <CardTitle>Option I: Distinct Names</CardTitle>
                            <CardText>
                                <b>Proposal:</b> We give distinct names to functional and destructive operations. For
                                example, we will have <code>Array.map</code> and <code>Array.transform</code>,
                                and <code>MutSet.union</code> and <code>MutSet.addAll</code>. We use reserve the most
                                common names (e.g. <code>map</code>) for the functional operations.
                            </CardText>
                            <CardText>
                                <b>Discussion:</b> With distinct names there is little room for confusion, but the
                                programmer may have to consult the documentation more frequently. It may be difficult to
                                come up with distinct, but meaningful, names. For example, what should the destructive
                                version of <code>reverse</code> be
                                called?
                            </CardText>
                        </Card>

                        <Card body className="mb-3">
                            <CardTitle>Option II: Use Similar Names but with a Prefix or Suffix</CardTitle>
                            <CardText>
                                <b>Proposal:</b> We reuse names between functional and destructive operations as much as
                                possible. To distinguish names, we prefix or suffix the names with a word. For
                                example, <code>reverseInPlace</code>, <code>mutReverse</code>, or the like.
                            </CardText>
                            <CardText>
                                <b>Discussion:</b> The advantage of this approach is that names are immediately
                                consistent. The disadvantages are (i) that it may be difficult to come up with a good
                                prefix or suffix word, (ii) some people may find that it looks ugly, and (iii) it may be
                                confusing that signatures for two similarly named operations differ not only in the
                                return type, but also in the polymorphism of the arguments.
                            </CardText>
                        </Card>

                        <Card body className="mb-3">
                            <CardTitle>Option III: Use Similar Names but with a Prefix or Suffix Symbol</CardTitle>
                            <CardText>
                                <b>Proposal:</b> Like the previous proposal, but instead we use a symbol. For
                                example: <code>reverse!</code>, <code>reverse*</code>, or the like.
                            </CardText>
                            <CardText>
                                <b>Discussion:</b> The advantage and disadvantages of this approach are similar to the
                                previous proposal, with the difference that a symbol may be more or less appealing to
                                users. Moreover, the symbol may clash with similar symbols used by other programming
                                languages.
                            </CardText>
                        </Card>

                        <h5>Option 4: We leverage namespaces</h5>

                        <p>
                            We use namespaces to disambiguate the operations. For example, we might have Array.reverse
                            and MutArray.reverse. Problem: For array there is one data structure trying to supports two
                            types of operations. For Set and MutSet it is more complicated. We would need Set.map,
                            MutSet.Mut.map, and MutSet.Imm.map. That is, Set is for the pure functional data structure,
                            MutSet.Mut is for the mutable set where we use mutable map and MutSet.Imm is for the mutable
                            set but where we use immutable map.
                        </p>

                        <Card body className="mb-3">
                            <CardTitle>Option VI: The Python Approach: Sort vs. Sorted</CardTitle>
                            <CardText>
                                <b>Proposal:</b> We use words like sort and sorted, reverse and reversed to distinguish
                                between pure and
                                impure functions.
                            </CardText>
                            <CardText>
                                <b>Discussion:</b>
                            </CardText>
                        </Card>

                        <Card body className="mb-3">
                            <CardTitle>Option VI: Drop Functional Operations for Mutable Data</CardTitle>
                            <CardText>
                                <b>Proposal:</b> We simply drop support for functional operations on mutable data
                                structures. If the user wants to map a function over an array, mutable set, or mutable
                                map he or she must first convert it to an immutable data structure. For example, to
                                functionally reverse an array one would
                                write <code>a.toList().reverse().toArray()</code>.
                            </CardText>
                            <CardText>
                                <b>Discussion:</b> The "stick your head in the sand approach". The solution is simple
                                and leaves no room for confusion but at the cost of tediousness and performance.
                            </CardText>
                        </Card>

                        <h2>The Principles</h2>

                        <p>
                            We debated these principles and slept on them for a few nights before we ultimately ended up
                            with the following hybrid principles:
                        </p>

                        <Card body className="mb-3">
                            <CardTitle>Library: Mutable Data is Functional Data</CardTitle>
                            <CardText>
                                In Flix, every mutable data structure supports functional operations.
                                For example, mutable collections, such
                                as <code>Array</code> and <code>MutSet</code> support
                                the <code>map</code> operation. Flix, being functional-first, reserves functional names
                                for functional operations. Across the standard library <code>map</code> has the same
                                name and the same type signature.
                            </CardText>
                        </Card>

                        <Card body className="mb-3">
                            <CardTitle>Library: Destructive Operations are Marked with !</CardTitle>
                            <CardText>
                                In Flix, every destructive operation is suffixed with an exclamation point. For
                                example, <code>Array.reverse(a)</code> returns a new array with the elements
                                of <code>a</code> in reverse order, whereas <code>Array.reverse!(a)</code> destructively
                                re-orders the elements of <code>a</code>. Note: This principle applies to destructive
                                operations that operate on data structures, not to impure functions in general,
                                e.g. <code>Console.printLine</code>.
                            </CardText>
                        </Card>

                        <Card body className="mb-3">
                            <CardTitle>Library: Consistent Names of Functional and Destructive Operations</CardTitle>
                            <CardText>
                                In Flix, functional and destructive operations that share (i) similar behavior and (ii)
                                similar type signatures share similar names. For
                                example, <code>Array.reverse</code> and <code>Array.reverse!</code> share the
                                same name. On the other hand, <code>Array.transform!</code> is
                                called <code>transform!</code> and not <code>map!</code> because its type signature is
                                dissimilar to map (i.e. map works on functions of type <code>a -> b</code>, but
                                transform requires functions of type <code>a -> a</code>.)
                            </CardText>
                        </Card>

                        <p>
                            We are in the process of refactoring the standard library to satisfy these new principles.
                        </p>

                        <p>
                            Going forward, we are sensitive to at least four potential issues:

                            <ul>
                                <li>Whether users come to like the aesthetics of names that end in exclamation point.
                                </li>
                                <li>If there is confusion about when exclamation points should be part of a name.</li>
                                <li>If there is confusion about when two operations should share the same name.</li>
                                <li>Rust uses exclamation points for macro applications.</li>
                            </ul>
                        </p>

                        <p>
                            As Flix continues to mature, we will keep an eye on these issues.
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
