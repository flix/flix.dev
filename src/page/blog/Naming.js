import React, {Component} from "react";
import {Card, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import InlineEditor from "../../util/InlineEditor";

class Naming extends Component {

    componentDidMount() {
        document.title = "Flix | Naming Functional and Destructive Operations";
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>
                <Row className="mb-3">
                    <Col sm={12} md={8}>

                        <h1>Naming Functional and Destructive Operations</h1>

                        <p>
                            Posted April 2020 by <i>Magnus Madsen</i>.
                        </p>

                        <p>
                            It has been said that there are only two hard problems in computer science: (i) naming, (ii)
                            cache invalidation, and (iii) off-by-one errors. In this blog post, I will explain a <i>name
                            consistency issue</i> that arises when a programming language wants to support both
                            functional and destructive operations. (A functional operation always returns new data,
                            whereas a destructive operation mutates existing data. For example, functionally reversing
                            an array returns a <i>new</i> array with its elements reversed, whereas destructively
                            reversing an array mutates the array in place.)
                        </p>

                        <p>
                            Flix supports functional, imperative, and logic programming. Flix is intended to
                            be <i>functional-first</i> which simply means that if there is a trade-off between
                            having better functional- or imperative programming support, we tend to favor design choices
                            that support functional programming. For example, the Flix effect system separates pure
                            and impure functions mostly to the benefit of functional programming.
                        </p>

                        <p>
                            Flix, being imperative, wants to support mutable data structures such as arrays, mutable
                            sets and maps. We have recently added support for all three. But let us for a moment
                            consider a simpler data structure: the humble list.
                        </p>

                        <p>
                            We can <code>map</code> a function <code>f: a -{">"} b</code> over a list <code>l</code> to
                            obtain a new list of type <code>List[b]</code>:
                        </p>

                        <InlineEditor>
                            {`def map(f: a -> b \\ ef, l: List[a]): List[b] \\ ef`}
                        </InlineEditor>

                        <p>
                            (Here the <code>ef</code> denotes that the function is <i>effect polymorphic</i>, but that
                            is for another day.)
                        </p>

                        <p>
                            We can also <code>map</code> a function over an option:
                        </p>

                        <InlineEditor>
                            {`def map(f: a -> b \\ ef, o: Option[a]): Option[b] \\ ef`}
                        </InlineEditor>

                        <p>
                            We can also <code>map</code> a function over an array:
                        </p>

                        <InlineEditor>
                            {`def map(f: a -> b \\ ef, a: Array[a]): Array[b] \\ IO`}
                        </InlineEditor>

                        <p>
                            This is good news: we can program with arrays in a functional-style. Mapping over an array
                            is certainly meaningful and useful. It might even be faster than mapping over a list!
                            Nevertheless, the main reason for having arrays (and mutable sets and maps) is to program
                            with them imperatively. We <i>want</i> to have operations that <i>mutate</i> their data.
                        </p>

                        <p>
                            We want an operation that applies a function to every element of an array <i>changing
                            it in place</i>. <b>What should such an operation be called?</b> We cannot name
                            it <code>map</code> because that name is already taken by the functional version.
                            Let us simply call it <code>mapInPlace</code> for now:
                        </p>

                        <InlineEditor>
                            {`def mapInPlace(f: a -> a \\ ef, a: Array[a]): Unit \\ IO`}
                        </InlineEditor>

                        <p>
                            The signature of <code>mapInPlace</code> is different from the signature
                            of <code>map</code> in two important ways:

                            <ul>
                                <li>The function returns <code>Unit</code> instead of returning an array.</li>
                                <li>The function takes an argument of type <code>a -{">"} a</code> rather than a function of
                                    type <code>a -{">"} b</code>.
                                </li>
                            </ul>
                        </p>

                        <p>
                            The latter is required because the type of an array is fixed. An array of bytes cannot
                            be replaced by an array of strings. Consequently, <code>mapInPlace</code> must take a
                            less generic function of type <code>a -{">"} a</code>.
                        </p>

                        <p>
                            We have seen that it is useful to have both functional and destructive functions such
                            as <code>map</code> and <code>mapInPlace</code>, but what should such functions be called?
                            Are they sufficiently similar that they should share similar names? What should be the
                            general rule for naming functional operations and their counter-part destructive operations?
                        </p>

                        <p>
                            To answer these questions, we surveyed the Flix standard library to understand what
                            names are currently being used. The table below shows a small cross section of the results:
                        </p>

                        <p>
                            <table className="table table-striped small">
                                <thead>
                                <tr>
                                    <th scope="col">Functional Operation</th>
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
                            The table exposes the lack of any established naming convention. Let us consider some of the
                            many inconsistencies: For arrays, the functional and destructive operations are
                            named <code>Array.map</code> and <code>Array.mapInPlace</code>, but for mutable sets the
                            operations are named <code>MutSet.map</code> and <code>MutSet.transform</code>.
                            As another example, for immutable sets, we
                            have <code>Set.insert</code> and <code>Set.union</code>, but these
                            functional operations are missing on the mutable set. Moreover, the mutable version
                            of <code>Set.union</code> is called <code>Set.addAll</code>.
                            Finally, <code>Array.sortByInPlace</code>, what a name!
                        </p>

                        <h2>Exploring the Design Space</h2>

                        <p>
                            With these examples in mind, we tried to come up with a principled approach to naming. Our
                            exploration ended up with the following options:
                        </p>

                        <Card body className="mb-3">
                            <CardTitle>Option I: Distinct names</CardTitle>
                            <CardText>
                                <b>Proposal:</b> We give distinct names to functional and destructive operations. For
                                example, we will have <code>Array.map</code> and <code>Array.transform</code>,
                                and <code>MutSet.union</code> and <code>MutSet.addAll</code>. We reserve the most
                                common names (e.g. <code>map</code>) for the functional operations.
                            </CardText>
                            <CardText>
                                <b>Discussion:</b> With distinct names there is little room for confusion, but it may be
                                difficult to come up with meaningful names. For example, what should the
                                destructive version of <code>reverse</code> be called?
                            </CardText>
                        </Card>

                        <Card body className="mb-3">
                            <CardTitle>Option II: Use similar names but with a prefix or suffix</CardTitle>
                            <CardText>
                                <b>Proposal:</b> We reuse names between functional and destructive operations. To
                                distinguish operations, we add a prefix or suffix to the name. For
                                example, <code>reverseInPlace</code>, <code>inPlaceReverse</code>, <code>reverseMut</code>,
                                or similar.
                            </CardText>
                            <CardText>
                                <b>Discussion:</b> The advantage of this approach is that names are immediately
                                consistent. The disadvantages are that: (i) it may be difficult to come up with a good
                                prefix or suffix word, (ii) some users may dislike the chosen prefix or suffix, and
                                (iii) it may be confusing that the signatures for two similarly named operations differ
                                not only in the return type, but also in the polymorphism of the arguments.
                            </CardText>
                        </Card>

                        <Card body className="mb-3">
                            <CardTitle>Option III: Use similar names but with a prefix or suffix symbol</CardTitle>
                            <CardText>
                                <b>Proposal:</b> Similar to the previous proposal, but instead we use a symbol. For
                                example: <code>reverse!</code>, <code>reverse*</code>, or the like.
                            </CardText>
                            <CardText>
                                <b>Discussion:</b> The same advantages and disadvantages of the previous proposal, but
                                with the difference that using a symbol may be more or less appealing to programmers.
                            </CardText>
                        </Card>

                        <Card body className="mb-3">
                            <CardTitle>Option IV: Use namespaces</CardTitle>
                            <CardText>
                                <b>Proposal:</b> We place all functional operations into one namespace and all
                                destructive operations into another. For example, we might
                                have <code>Array.reverse</code> and <code>MutArray.reverse</code>.
                            </CardText>
                            <CardText>
                                <b>Discussion:</b> While this solution appears simple, it has two downsides: (i) we now
                                have multiple functions named <code>reverse</code> with different semantics and (ii) we
                                get a plethora of namespaces for data structures that exist in both
                                immutable and mutable variants. For example, we might end up
                                with <code>Set.map</code> (functional map on an immutable
                                set), <code>MutSet.Mut.map</code> (destructive map on a mutable set),
                                and <code>MutSet.Imm.map</code> (functional map on a mutable set).
                            </CardText>
                        </Card>

                        <Card body className="mb-3">
                            <CardTitle>Option V: The Python approach: sort vs. sorted</CardTitle>
                            <CardText>
                                <b>Proposal:</b> In Python the <code>sorted</code> operation functionally returns a new
                                sorted list whereas the <code>sort</code> operation destructively sorts a list in place.
                                We use the same scheme
                                for <code>reverse</code> and <code>reversed</code>, <code>map</code> and <code>mapped</code>,
                                and so forth.
                            </CardText>
                            <CardText>
                                <b>Discussion:</b> An internet search reveals that many programmers are puzzled by the
                                Python naming scheme. Another disadvantage is that the common functional names,
                                e.g. <code>map</code> and <code>reverse</code> would be reserved for destructive
                                operations (unless we adopt the <i>opposite</i> convention of Python).
                            </CardText>
                        </Card>

                        <Card body className="mb-3">
                            <CardTitle>Option VI: Drop functional operations for mutable data</CardTitle>
                            <CardText>
                                <b>Proposal:</b> We drop support for functional operations on mutable data structures.
                                If the user wants to map a function over an array, mutable set, or mutable
                                map he or she must first convert it to an immutable data structure. For example, to
                                functionally reverse an array one would
                                write <code>a.toList().reverse().toArray()</code>.
                            </CardText>
                            <CardText>
                                <b>Discussion:</b> The "stick your head in the sand approach". The programmer must
                                explicitly convert back and forth between immutable and mutable data structures.
                                While such an approach side-steps the naming issue, it is verbose and slow
                                (because we have to copy collections back and forth). Deliberately leaving functionality
                                out of the standard library does not mean that programmers will not miss it; instead we
                                are just passing the problem onto them.
                            </CardText>
                        </Card>

                        <h2>The Principles</h2>

                        <p>
                            We debated these options and slept on them for a few nights before we ultimately ended up
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
                            <CardTitle>Library: Destructive Operations are Marked with '!'</CardTitle>
                            <CardText>
                                In Flix, every destructive operation is suffixed with an exclamation point. For
                                example, <code>Array.reverse(a)</code> returns a new array with the elements
                                of <code>a</code> in reverse order, whereas <code>Array.reverse!(a)</code> destructively
                                re-orders the elements of <code>a</code>. Note: This principle applies to destructive
                                operations that operate on data structures, not to impure functions in general,
                                e.g. <code>Console.printLine</code>.
                            </CardText>
                        </Card>

                        <p>
                            As a side-note: Scheme has used <code>!</code> to indicate destructive operations for a
                            long-time.
                        </p>

                        <Card body className="mb-3">
                            <CardTitle>Library: Consistent Names of Functional and Destructive Operations</CardTitle>
                            <CardText>
                                In Flix, functional and destructive operations that share (i) similar behavior and (ii)
                                similar type signatures share similar names. For
                                example, <code>Array.reverse</code> and <code>Array.reverse!</code> share the
                                same name. On the other hand, <code>Array.transform!</code> is
                                called <code>transform!</code> and not <code>map!</code> because its type signature is
                                dissimilar to map (i.e. map works on functions of type <code>a -{">"} b</code>, but
                                transform requires functions of type <code>a -{">"} a</code>.)
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
                                <li>That Rust uses exclamation points for macro applications.</li>
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
