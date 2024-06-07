import React, {Component} from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Container,
    Row,
    UncontrolledCarousel
} from 'reactstrap';
import Codebox from "../util/Codebox";
import InlineEditor from "../util/InlineEditor";

class Home extends Component {

    componentDidMount() {
        document.title = "The Flix Programming Language";
    }

    carousel = [
        {
            src: '/images/vscode1.png',
            caption: 'Slide 1',
            header: 'Semantic Highlighting',
        },
        {
            src: '/images/vscode2.png',
            caption: 'Slide 2',
            header: 'Hover to Inspect',
        },
        {
            src: '/images/vscode3.png',
            caption: 'Slide 3',
            header: 'Highlight References',
        },
        {
            src: '/images/vscode4.png',
            caption: 'Slide 4',
            header: 'Inline Errors',
        }
    ];

    render() {
        return (
            <Container>
                <Row className="mb-3">
                    <Col md="6">
                        <h1>The Flix Programming Language</h1>

                        <h2 className="motto">Next-generation reliable, safe, concise, and functional-first programming
                            language.</h2>

                        <p className="text-justify">
                            Flix is a principled functional, imperative, and logic programming language
                            developed at <a href="https://cs.au.dk/">Aarhus University</a>, at the <a
                            href="https://uwaterloo.ca/">University of Waterloo</a>, and by a community of <a
                            href="https://github.com/flix/flix/graphs/contributors">open source contributors</a>.
                        </p>

                        <h2>Why Flix? </h2>

                        <p className="text-justify">
                            Flix aims to offer a <span className="font-weight-bold text-info">unique combination of
                                features</span> that no other programming language offers, including: <span
                            className="font-weight-bold">algebraic
                                data types and pattern matching</span> (like Haskell, OCaml), <span
                            className="font-weight-bold">extensible records</span> (like Elm), <span
                            className="font-weight-bold">traits (type classes)</span> (like Haskell, Rust), <span
                            className="font-weight-bold">higher-kinded types</span> (like Haskell), <span
                            className="font-weight-bold">typematch</span> (like Scala), <span
                            className="font-weight-bold">type inference</span> (like Haskell, OCaml), <span
                            className="font-weight-bold">structured channel and process-based concurrency</span> (like
                            Go), and <span
                            className="font-weight-bold">compilation to JVM bytecode</span> (like Scala).
                        </p>

                        <p className="text-justify">
                            Flix also supports several <span
                            className="font-weight-bold text-info">unique features</span>,
                            including: <span
                            className="font-weight-bold text-success">a polymorphic effect system</span>, <span
                            className="font-weight-bold text-success">region-based local mutation</span>, <span
                            className="font-weight-bold text-success">purity reflection</span>, and <span
                            className="font-weight-bold text-success">first-class Datalog constraints</span>.
                        </p>

                    </Col>
                    <Col md="6">
                        <Codebox flix={this.props.flix}/>
                    </Col>
                </Row>

                <hr className="mb-3"/>

                <Row className="mb-4">
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Algebraic Data Types and Pattern Matching</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Algebraic data types and pattern matching are the bread-and-butter of functional
                                        programming and are supported by Flix with minimal fuss.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md="6">
                        <InlineEditor>
                            {`enum Shape {
    case Circle(Int32),
    case Square(Int32),
    case Rectangle(Int32, Int32)
}

def area(s: Shape): Int32 = match s {
    case Circle(r)       => 3 * (r * r)
    case Square(w)       => w * w
    case Rectangle(h, w) => h * w
}`}
                        </InlineEditor>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <InlineEditor>
                            {`def origin(): (Int32, Int32) = (0, 0)

def oneByOne():  {w = Int32, h = Int32} = {w = 1, h = 1}

def twoByFour(): {w = Int32, h = Int32} = {w = 2, h = 4}

def area(rect: {w = Int32, h = Int32 | r}): Int32 =
    rect.w * rect.h

def f(): Int32 = area({h = 1, color = "Blue", w = 2})`}
                        </InlineEditor>
                    </Col>

                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Tuples and Records</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Flix has built-in support for tuples and records.
                                    </p>

                                    <p>
                                        Records use structural typing and are extensible.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Purity and Impurity</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Flix precisely tracks the purity of every expression in a program.
                                    </p>

                                    <p>
                                        The Flix compiler provides an ironclad guarantee that if an expression is pure
                                        then it cannot have side-effects and it is referentially transparent.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <InlineEditor>
                            {`/// A pure function is annotated with \`\\ {}\`.
def inc1(x: Int32): Int32 \\ {} = x + 1

/// An impure function is annotated with \`\\ IO\`.
def inc2(x: Int32): Int32 \\ IO =
    println("x = \${x}");
    x + 1

def f(): Int32 \\ IO =    // f is impure
    let r1 = inc1(123);   // pure
    let r2 = inc2(456);   // impure
    r1 + r2               // pure`}
                        </InlineEditor>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <InlineEditor>
                            {`/// 
/// The purity of \`map\` depends on the purity of \`f\`.
///
def map(f: a -> b \\ ef, l: List[a]): List[b] \\ ef =
    match l {
        case Nil     => Nil
        case x :: xs => f(x) :: map(f, xs)
    }
`}
                        </InlineEditor>
                    </Col>
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Polymorphic Effects</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Flix is able to track purity through higher-order effect polymorphic functions.
                                    </p>

                                    <p>
                                        For example, Flix knows that the purity of <code>List.map</code> depends on the
                                        purity of its function argument <code>f</code>.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Region-based Local Mutation</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Flix supports region-based local mutation, which makes it possible to
                                        implement <i>pure</i> functions that internally uses mutable state and
                                        destructive operations, as long as these operations are confined to the region.
                                    </p>

                                    <p>
                                        We can use local mutation when it is more natural to write a function using
                                        mutable data and in a familiar imperative-style while still remaining pure
                                        to the outside world.
                                    </p>

                                    <p>
                                        We can also use local mutation when it is more efficient to use mutable
                                        data structures, e.g. when implementing a sorting algorithm.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <InlineEditor>
                            {`///
/// We can implement a *pure* \`sort\` function which 
/// internally converts an immutable list to an array,
/// sorts the array in-place, and then converts it 
/// back to an immutable list.
/// 
def sort(l: List[a]): List[a] \\ {} with Order[a] = 
    region r {
        List.toArray(r,l) !> Array.sort! |> Array.toList
    }

///
/// We can also write a *pure* \`toString\` function which 
/// internally uses a mutable StringBuilder. 
///
def toString(l: List[a]): String with ToString[a] = 
    region r {
        let sb = StringBuilder.new(r);
        foreach (x <- l) {
            StringBuilder.appendString!("\${x} :: ", sb)
        };
        StringBuilder.appendString!("Nil", sb);
        StringBuilder.toString(sb)
    }
`}
                        </InlineEditor>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <InlineEditor>
                            {`/// 
/// We can inspect the purity of a function argument.
/// 
def inspect(f: a -> b \\ ef): Unit \\ IO =
    reifyEff(f) {
        case Pure(g) => println("f is pure")
        case _       => println("f is not pure")
    }
                            
///
/// We can use purity information to safely switch between
/// lazy (or parallel) evaluation. In this case, if f is 
/// pure then perform the map operation lazily.
///
def map(f: a -> b \\ ef, l: LazyList[a]): LazyList[b] \\ ef =
    reifyEff(f) {
        case Pure(g) => mapL(g, l)
        case _       => mapE(f, l)
    }`}
                        </InlineEditor>
                    </Col>
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Purity Reflection</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Flix supports a meta-programming construct that enables higher-order functions
                                        to inspect the purity of a function argument and use that information to vary
                                        their behavior.
                                    </p>

                                    <p>
                                        For example, the <code>DelayList.map</code> function varies its behavior between
                                        eager and lazy evaluation depending on the purity of its function argument.
                                    </p>

                                    <p>
                                        We can exploit purity reflection to selectively use lazy or parallel
                                        evaluation inside a library without changing the semantics from the
                                        point-of-view of the clients.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Parallelism</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Flix makes it simple and easy to evaluate <i>pure</i> code in parallel.
                                    </p>
                                    <p>
                                        For example, the code on the right shows a parallel implementation of
                                        the <code>List.map</code> function using the <code>par</code> construct.
                                    </p>
                                    <p>
                                        Internally, the <code>par</code> construct uses
                                        light-weight <code>VirtualThread</code>s.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <InlineEditor>
                            {`///
/// A parallel implementation of the List.map function.
/// 
def parMap(f: a -> b, l: List[a]): List[b] = match l {
    case Nil     => Nil
    case x :: xs =>
        // Evaluate f(x) and parMap(f, xs) in parallel.
        par (r <- f(x); rs <- parMap(f, xs))
            yield r :: rs
}`}
                        </InlineEditor>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <InlineEditor>
                            {`def main(): Unit \\ IO = 
    region rc {
        // A channel which can buffer one message.
        let (tx, rx) = Channel.buffered(rc, 1);
        spawn say("Meow!", tx) @ rc; // thread 1
        spawn say("Woof!", tx) @ rc; // thread 2
        Channel.recv(rx) |> println
    } // Execution is blocked until both threads finish.

/// Sends the string s on the given channel tx.
def say(s: String, tx: Sender[String, r]): Unit \\ r = 
    Channel.send(s, tx)

`}
                        </InlineEditor>
                    </Col>
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Structured Concurrency</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Flix supports <a
                                        href="https://vorpus.org/blog/notes-on-structured-concurrency-or-go-statement-considered-harmful/">structured
                                        concurrency</a>.
                                    </p>
                                    <p>
                                        For example, the code on the left shows the creation of a fresh
                                        region named <code>rc</code> in which two threads are spawned.
                                    </p>
                                    <p>
                                        Importantly, control-flow does not leave the region before <i>both</i> threads
                                        have terminated. Hence the two threads cannot outlive the lifetime of their
                                        enclosing region.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Traits</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Flix uses traits to abstract over types that support a common set of
                                        operations.
                                    </p>
                                    <p>
                                        For example, the <code>Eq</code> trait captures the notion of equality
                                        and is used throughout the standard library.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <InlineEditor>
                            {`trait Eq[a] {
    def eq(x: a, y: a): Bool
    def neq(x: a, y: a): Bool = not Eq.eq(x, y)
}

instance Eq[(a1, a2)] with Eq[a1], Eq[a2] {
    def eq(t1: (a1, a2), t2: (a1, a2)): Bool =
        let (x1, x2) = t1;
        let (y1, y2) = t2;
        x1 == y1 and x2 == y2
}`}
                        </InlineEditor>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <InlineEditor>
                            {`trait Foldable[t : Type -> Type] {

    ///
    /// Left-associative fold of a structure.
    ///
    def foldLeft(f: (b, a) -> b \\ ef, s: b, t: t[a]): b \\ ef

    ///
    /// Right-associative fold of a structure.
    ///
    def foldRight(f: (a, b) -> b \\ ef, s: b, t: t[a]): b \\ ef

}`}
                        </InlineEditor>
                    </Col>
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Higher-Kinded Types</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Flix supports higher-kinded types making it possible to abstract over type
                                        constructors. For example,
                                        both <code>Option</code> and <code>List</code> implement <code>Foldable</code>.
                                    </p>

                                    <p>
                                        The Flix standard library ships with many common traits, such
                                        as <code>Monoid</code>, <code>Functor</code>, and <code>Foldable</code>.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Associated Types</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Flix supports associate types, which allow the types in instance signatures
                                        to depend on the instance type.
                                    </p>

                                    <p>
                                        The code on the right defines a trait with an associated type <code>Elm</code>,
                                        which enables each <code>Coll</code> instance to define its element type.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <InlineEditor>
                            {`trait Coll[a] {

    /// The element type of the collection.
    type Elm

    /// Converts the collection to a list of its elements.
    def toList(coll: x): List[Coll.Elm[a]]
}

instance Coll[Map[k, v]] {
    type Elm = (k, v)

    def toList(m: Map[K, V]): List[(k, v)] = ...
}
`}
                        </InlineEditor>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <InlineEditor>
                            {`trait Coll[a] {

    /// The element type of the collection.
    type Elm

    /// The effect associated with the collection.
    type Aef

    /// Converts the collection to a list of its elements.
    def toList(coll: x): List[Coll.Elm[a]] \\ Coll.Aef[a]
}

instance Coll[MutMap[k, v, r]] {
    type Elm = (k, v)
    type Aef = r

    def toList(m: Map[K, V]): List[(k, v)] \\ r = ...
}
`}
                        </InlineEditor>
                    </Col>
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Associated Effects</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Associated effects allow the effects in trait members to depend on the instance type.
                                        This makes it easy to create abstractions over both pure and effectful operations,
                                        and mutable and immutable data structures.
                                    </p>

                                    <p>
                                        The code on the left adds an associated effect <code>Aef</code> to the <code>Coll</code> trait,
                                        which makes it possible to add instances for mutable collections.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Monadic For-Yield</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Flix supports a monadic <code>forM</code>-yield construct similar to Scala's
                                        <code>for</code>-comprehensions and Haskell's <code>do</code> notation.
                                        The <code>forM</code> construct is syntactic sugar for uses
                                        of <code>point</code> and <code>flatMap</code> (which are provided by
                                        the <code>Monad</code> trait).
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <InlineEditor>
                            {`def divide(x: Int32, y: Int32): Option[Int32] = 
    if (y == 0) None else Some(x / y)

def f(): Option[Int32] = 
    forM (
        x <- divide(5, 2);
        y <- divide(x, 8);
        z <- divide(9, y)
    ) yield x + y + z
`}
                        </InlineEditor>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <InlineEditor>
                            {`def validateUser(s: String): Validation[Err, String] = ...

def validatePass(s: String): Validation[Err, String] = ...

def conn(u: String, p: String): Validation[Err, Connection] = 
    forA (
        user <- validateUser(u);
        pass <- validatePass(p)
    ) yield Connection(user, pass)
`}
                        </InlineEditor>
                    </Col>
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Applicative For-Yield</h4></CardTitle>
                                <CardText>
                                    <p>
                                        In addition to the monadic <code>forM</code> expression, Flix supports an
                                        applicative <code>forA</code> expression that builds on
                                        the <code>Applicative</code> trait. The <code>forA</code> construct makes
                                        it simple to write error-handling code which uses the <code>Validation[e,
                                        t]</code> data type.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="12">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>First-class Datalog Constraints</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Another unique feature of Flix is its embedded Datalog support. Datalog, a
                                        powerful logic programming language in its own right, makes it simple and
                                        elegant to express many fixpoint problems (including various graph reachability
                                        problems):
                                    </p>

                                    <InlineEditor>
                                        {`def reachable(g: List[(String, Int32, String)], minSpeed: Int32): List[(String, String)] =
    let facts = inject g into Road;
    let rules = #{
        Path(x, y) :- Road(x, maxSpeed, y), if maxSpeed >= minSpeed.
        Path(x, z) :- Path(x, y), Road(y, maxSpeed, z), if maxSpeed >= minSpeed.
    };
    query facts, rules select (src, dst) from Path(src, dst) |> Foldable.toList`}
                                    </InlineEditor>

                                    <p>
                                        Datalog constraints are <i>first-class</i> which means that they may be passed
                                        to and returned from functions, stored in data structures, composed with other
                                        Datalog constraints, and solved. This makes it possible to express families of
                                        Datalog programs.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle><h4>Datalog Enriched with Lattice Semantics</h4></CardTitle>
                                <CardText>
                                    <p>
                                        Flix supports Datalog constraints enriched with lattice semantics.
                                    </p>

                                    <p>
                                        The program on the right computes the delivery date for a collection of
                                        parts. Each part is assembled from a collection of sub-components with various
                                        delivery dates. For example, a car depends on a chassis and an engine. To build
                                        a car, we need to wait for the chassis and engine to assembled and then we can
                                        assemble the car itself.
                                    </p>

                                    <p>
                                        Note that parts may depend on sub-components that themselves may depend on other
                                        sub-components. In other words, the problem is recursive.
                                    </p>

                                    <hr/>

                                    <p>
                                        Datalog constraints enriched with lattice semantics is one of the more
                                        advanced features of Flix and requires some background knowledge of lattice
                                        theory and fixpoints.
                                    </p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <InlineEditor>
                            {`let p = #{
    /// Parts and the components they depend on.
    PartDepends("Car",       "Chassis").
    PartDepends("Car",       "Engine").
    PartDepends("Engine",    "Piston").
    PartDepends("Engine",    "Ignition").

    /// Time required to assemble a part from its components.
    AssemblyTime("Car",     7).
    AssemblyTime("Engine",  2).

    /// Expected delivery date for certain components.
    DeliveryDate("Chassis";  2).
    DeliveryDate("Piston";   1).
    DeliveryDate("Ignition"; 7).

    /// A part is ready when it is delivered.
    ReadyDate(part; date) :-
        DeliveryDate(part; date).

    /// Or when it can be assembled from its components.
    ReadyDate(part; assemblyTime + componentDate) :-
        PartDepends(part, component),
        AssemblyTime(part, assemblyTime),
        ReadyDate(component; componentDate).
};

// Computes the delivery date for each component.
let r = query p select (c, d) from ReadyDate(c; d)
`}
                        </InlineEditor>
                    </Col>
                </Row>

                <hr className="mb-4"/>

                <Row className="mb-4">
                    <Col md="12">
                        <h2>Complete Feature List</h2>
                    </Col>
                    <Col md="4">
                        <ul>
                            <li>algebraic data types</li>
                            <li>pattern matching</li>
                            <li>first-class functions</li>
                            <li>extensible records</li>
                            <li>parametric polymorphism</li>
                            <li>traits (type classes)</li>
                            <li>higher-kinded types</li>
                            <li>light-weight polymorphic effects</li>
                            <li>type aliases</li>
                            <li>Hindley-Milner type inference</li>
                        </ul>
                    </Col>

                    <Col md="4">
                        <ul>
                            <li>CSP-style concurrency</li>
                            <li>buffered &amp; unbuffered channels</li>
                            <li>first-class datalog constraints</li>
                            <li>polymorphic datalog predicates</li>
                            <li>constraints with lattice semantics</li>
                            <li>stratified negation</li>
                            <li>interoperability with Java</li>
                            <li>unboxed primitives</li>
                            <li>keyword-based syntax</li>
                            <li>redundancy checks</li>
                        </ul>
                    </Col>

                    <Col md="4">
                        <ul>
                            <li>monadic forM expressions</li>
                            <li>applicative forA expressions</li>
                            <li>expressions holes</li>
                            <li>compilation to JVM bytecode</li>
                            <li>full tail call elimination</li>
                            <li>core standard library</li>
                            <li>parallel compiler architecture</li>
                            <li>human friendly errors</li>
                            <li>interactive mode</li>
                            <li>Visual Studio Code support</li>
                        </ul>
                    </Col>
                </Row>

                <hr className="mb-4"/>

                <Row className="mb-4">
                    <Col md={6}>
                        <h2>Standard Library with Batteries Included</h2>

                        <p>
                            Flix comes with a fully-featured Standard Library that offers access to more than <span
                            className="text-success font-weight-bold">3,100+</span> functions.
                        </p>

                        <p>
                            For example, the <code>List</code> module has more than 100 functions and
                            the <code>Foldable</code> trait has more than 47 functions.
                        </p>

                        <p>
                            The full library can be explored at: <a
                            href="https://api.flix.dev/">https://api.flix.dev/</a>
                        </p>

                        <p>
                            In addition, Flix also provides access to the entire Java ecosystem via Maven.
                        </p>

                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardImg src="/images/standardLibrary.png" alt="Standard Library"/>
                        </Card>
                    </Col>
                </Row>

                <hr className="mb-4"/>

                <Row className="mb-4">
                    <Col md={6}>
                        <h2>Modern Compiler Architecture</h2>

                        <p>
                            Flix features a modern compiler architecture which is <span
                            className="font-weight-bold text-success">resilient</span>, <span
                            className="font-weight-bold text-success">incremental</span>, and <span
                            className="font-weight-bold text-success">parallel</span>.
                        </p>

                        <p>
                            In Flix, every compiler phase is parallel. The plot on the right shows the speed-up of each
                            compiler phase when run on a 24 core machine.
                        </p>

                        <p>
                            In other words, Flix can take full advantage of modern hardware, leading to speed-ups of
                            between <b>5x &ndash; 7x</b> on multi-core machines.
                        </p>

                        <p>
                            Furthermore, the Flix compiler is incremental which leads to significant speed-ups when
                            recompiling code that has already been compiled in the same compiler instance.
                        </p>
                    </Col>
                    <Col md={6}>
                        <CardImg src="/images/speedupWithPar.png" alt="Parallel Speedup"/>
                    </Col>
                </Row>

                <hr className="mb-4"/>

                <Row className="mb-4">
                    <Col md={12}>
                        <h2>Compiler Performance: The Raw Numbers</h2>

                        <p>
                            The following table illustrates the performance of the Flix compiler on an Apple M2 Pro with
                            a 10‑core CPU running on OpenJDK 21:
                        </p>

                        <Col md={6}>
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td className="h5">Throughput (entire compiler):</td>
                                    <td className="h5 text-right text-success font-weight-bold">41,700 lines/sec</td>
                                </tr>
                                <tr>
                                    <td className="h5">Throughput (frontend only):</td>
                                    <td className="h5 text-right text-success font-weight-bold">93,000 lines/sec</td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>

                        <p className="small text-muted">
                            The above results can be reproduced by running the commands: <code>java -jar flix.jar Xperf
                            --n 21</code> and <code>java -jar flix.jar Xperf --frontend --n 21</code>.
                        </p>

                        <p>
                            The Flix compiler achieves these results despite supporting costly programming language
                            features, including: (a) type and effect inference, (b) monomorphization, and (c)
                            whole-program optimization.
                        </p>

                        <p>
                            The performance of Flix compiler is mostly determined by CPU performance and memory
                            bandwidth.
                        </p>

                    </Col>
                </Row>

                <hr className="mb-4"/>

                <Row className="mb-4">
                    <Col md={12}>
                        <h2>Visual Studio Code Support</h2>

                        <p>
                            The Flix compiler integrates with Visual Studio Code to provide a rich development
                            experience.
                        </p>

                        <p>
                            The VSCode extension uses the <span
                            className="font-weight-bold text-success">real Flix compiler</span> hence there is a <span
                            className="font-weight-bold text-success">1:1</span> correspondence between the extension
                            and the compiler.
                        </p>

                        <p>
                            If VSCode reports no errors <i>there are no errors</i>. Moreover, if there is no error,
                            <i>VSCode will never report a spurious error</i>.
                        </p>

                        <p>
                            The VSCode extension supports most features, including:
                        </p>

                        <Row className="mb-3">
                            <Col md="4">
                                <ul>
                                    <li>
                                        <b>Semantic Syntax Highlighting</b>
                                        <ul>
                                            <li>Code highlighting for *.flix files.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Diagnostics</b>
                                        <ul>
                                            <li>Inline compiler error messages.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Auto-complete</b>
                                        <ul>
                                            <li>Auto-complete as you type.</li>
                                            <li>Auto-completion is context aware.</li>
                                            <li>Auto-complete trait instances.</li>
                                            <li>Type-directed hole completion.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Snippets</b>
                                        <ul>
                                            <li>Auto-complete common code constructs.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Inlay Hints</b>
                                        <ul>
                                            <li>Shows inline type information.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Col>

                            <Col md="4">
                                <ul>
                                    <li>
                                        <b>Type and Effect Hovers</b>
                                        <ul>
                                            <li>Hover over any expression to see its type and effect.</li>
                                            <li>Hover over any local variable or formal parameter to see its type.</li>
                                            <li>Hover over any function to see its type signature and documentation.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Jump to Definition</b>
                                        <ul>
                                            <li>Jump to the definition of any function.</li>
                                            <li>Jump to the definition of any local variable.</li>
                                            <li>Jump to the definition of any enum.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Col>

                            <Col md="4">
                                <ul>
                                    <li>
                                        <b>Find References</b>
                                        <ul>
                                            <li>Find all references to a function.</li>
                                            <li>Find all references to a local variable.</li>
                                            <li>Find all references to an enum.</li>
                                            <li>Find all implementations of a trait.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Symbols</b>
                                        <ul>
                                            <li>List all document symbols.</li>
                                            <li>List all workspace symbols.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Rename</b>
                                        <ul>
                                            <li>Rename local variables.</li>
                                            <li>Rename functions.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Code Lenses</b>
                                        <ul>
                                            <li>Run main from within the editor.</li>
                                            <li>Run tests from within the editor.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                        <UncontrolledCarousel autoPlay={false} interval={false} items={this.carousel}
                                              className="ml-2 mr-2"/>
                    </Col>
                </Row>

                <hr className="mb-4"/>

                <Row className="mb-4">
                    <Col md={6}>
                        <h2>Tooling Comparison Table</h2>

                        <p>
                            Many programming languages come with a lot of external tooling.
                        </p>

                        <p>
                            Such tooling must be installed and configured correctly.
                        </p>

                        <p>
                            In Flix, most tooling is built directly into the compiler.
                        </p>
                    </Col>

                    <Col md={6}>
                        <table className="table table-sm table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Tool</th>
                                <th scope="col">Flix</th>
                                <th scope="col">OCaml</th>
                                <th scope="col">Haskell</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Compiler</td>
                                <td>flix</td>
                                <td>ocaml</td>
                                <td>ghc</td>
                            </tr>
                            <tr>
                                <td>LSP</td>
                                <td>flix</td>
                                <td>ocaml-lsp</td>
                                <td>HLS</td>
                            </tr>
                            <tr>
                                <td>REPL</td>
                                <td>flix</td>
                                <td>utop</td>
                                <td>ghci</td>
                            </tr>
                            <tr>
                                <td>Build Tool</td>
                                <td>flix</td>
                                <td>dune</td>
                                <td>cabal, stack</td>
                            </tr>
                            <tr>
                                <td>Package Manager</td>
                                <td>flix</td>
                                <td>opam</td>
                                <td>cabal</td>
                            </tr>
                            <tr>
                                <td>Package Repository</td>
                                <td>GitHub</td>
                                <td>opam</td>
                                <td>Hackage</td>
                            </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>

                <hr className="mb-4"/>

                <Row className="mb-4">
                    <Col md={6}>
                        <h2>Actively Developed and Maintained</h2>

                        <p className="text-justify">
                            Flix is actively developed by programming language researchers from <a
                            href="https://cs.au.dk/">Aarhus University</a> in Denmark in collaboration with researchers
                            from the <a href="https://uwaterloo.ca/">University
                            of Waterloo</a> in Canada, the <a href="https://uni-tuebingen.de/en/">University of
                            Tubingen</a> in Germany, and <a
                            href="https://di.ku.dk/english/">Copenhagen University</a> in Denmark.
                        </p>

                        <p>
                            Flix is also increasingly developed by a growing community of open source
                            contributors from all over the world.
                        </p>

                        <p>
                            We invite everyone to contribute.
                        </p>

                    </Col>
                    <Col md={6}>
                        <h2 className="text-center">Project Statistics</h2>
                        <table className="table">
                            <tbody>
                            <tr>
                                <td className="h4 text-right text-success font-weight-bold">3,800+</td>
                                <td className="h4">Merged Pull Requests (PRs)</td>
                            </tr>
                            <tr>
                                <td className="h4 text-right text-success font-weight-bold">2,500+</td>
                                <td className="h4">Resolved Issues (Tickets)</td>
                            </tr>
                            <tr>
                                <td className="h4 text-right text-success font-weight-bold">60+</td>
                                <td className="h4">Contributors</td>
                            </tr>
                            <tr>
                                <td className="h4 text-right text-success font-weight-bold">244,000+</td>
                                <td className="h4">Lines in Compiler Codebase</td>
                            </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>

                <hr className="mb-4"/>

                <Row className="mb-4">
                    <Col md={6}>
                        <CardImg src="/logo/java.png" alt="Java Logo" className="p-4"/>
                    </Col>
                    <Col md={6}>
                        <h2>Flix runs on Java</h2>

                        <p>
                            Flix targets the Java Virtual Machine (JVM) for a multitude of reasons:
                        </p>

                        <ul>
                            <li>The JVM has multiple battle-tested, open-source and commercial implementations,
                                including OpenJDK, J9, Azul, Graal, and more.
                            </li>
                            <li>JVMs exists for all platforms: Mac, Linux, and Windows.</li>
                            <li>
                                Modern JVMs feature multiple state-of-the-art garbage collectors.
                            </li>
                            <li>Modern JVMs have excellent support for concurrency and parallelism. In particular,
                                light-weight threads added in Java 21.
                            </li>
                            <li>
                                Excellent tool support, including debuggers and profilers.
                            </li>
                            <li>The Java Platform comes with a rich ecosystem of packages which is accessible thru
                                integration with Maven.
                            </li>
                        </ul>
                    </Col>
                </Row>

                <hr className="mb-4"/>

                <Row className="mb-4">
                    <Col md={6}>
                        <h2>Funding and Grants</h2>

                        <p className="text-justify">
                            Flix is generously funded by a range of instruments from:
                        </p>

                        <ul>
                            <li><a href="https://dff.dk/">Independent Research Fund Denmark</a></li>
                            <li><a href="https://dff.dk/">Digital Research Centre Denmark</a></li>
                            <li><a href="https://www.stibofonden.dk/">Stibo Foundation</a></li>
                            <li><a href="https://www.amazon.science/research-awards">Amazon Research Awards</a></li>
                        </ul>
                    </Col>
                    <Col md={6} className="align-self-center">
                        <h4 className="text-center">Total Funding: <span className="text-success font-weight-bold">€1.1 million</span>
                        </h4>

                        <p className="mt-3 small text-center">
                            This funding helps ensure the continuity and independence of the project.
                        </p>
                    </Col>
                </Row>

                <hr className="mb-4"/>

                <Row className="mb-4">
                    <Col md="12">
                        <h2>Sponsors and Funding</h2>
                    </Col>

                    <Row>
                        <Col>
                            <Card className="border-0 p-3">
                                <CardImg src="/logo/dff.png" alt="Independent Research Fund Denmark"/>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0 p-3">
                                <CardImg src="/logo/direc.png" alt="Digital Research Centre Denmark"/>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0 p-3">
                                <CardImg src="/logo/amazon-science.png" alt="Amazon Research Award"/>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0 p-3">
                                <CardImg src="/logo/stibo.png" alt="StiboFonden"/>
                            </Card>
                        </Col>
                    </Row>
                </Row>

                <hr className="mb-4"/>

                <Row className="mb-4">
                    <Col md="12">
                        <h2>Collaborators</h2>
                    </Col>

                    <Row>
                        <Col md="3">
                            <Card className="border-0 p-3">
                                <CardImg src="/logo/aarhusu.png" alt="Aarhus University"/>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="border-0 p-3">
                                <CardImg src="/logo/uwaterloo.png" alt="University of Waterloo"/>
                            </Card>
                        </Col>
                        <Col md="3">
                            <Card className="border-0 p-3">
                                <CardImg src="/logo/tubingen.png" alt="University of Tubingen"/>
                            </Card>
                        </Col>
                    </Row>
                </Row>

                <hr className="mb-4"/>

                <Row className="mb-4 pb-3">
                    <Col xs="12">
                        <p className="small float-right">
                            We kindly thank <a href="https://www.ej-technologies.com/">EJ Technologies</a> for providing
                            us with <a
                            href="https://www.ej-technologies.com/products/jprofiler/overview.html">JProfiler</a> and <a
                            href="https://www.jetbrains.com/">JetBrains</a> for providing us with <a
                            href="https://www.jetbrains.com/idea/">IntelliJ IDEA</a>.
                        </p>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Home;
