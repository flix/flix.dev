import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";
import InlineEditor from "../util/InlineEditor";

class About extends Component {

    componentDidMount() {
        document.title = "Flix | About";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>

                <Row className="mb-3">
                    <Col sm={12} md={8}>

                        <h1>About</h1>

                        <p>
                            Flix is a functional-, logic-, and imperative- programming language focusing on making it
                            simple to write safe, robust, and elegant programs. It tries to achieve this through a
                            combination of a strong static type system with type inference, an extensive collection of
                            compile-time checks, and by
                            avoiding many of the mistakes of programming languages past. Flix aims to have a principled
                            design that does <i>not</i> sacrifice safety nor elegance at the altar of expediency. <i>Flix
                            is a language for programmers that care about programs.</i>
                        </p>

                        <p>
                            Flix draws inspiration from many other excellent languages, including Elm, F#, OCaml,
                            Haskell, Rust, and Scala. Flix visually resembles Scala with an emphasis on conciseness and
                            the use of keywords. We believe that short keywords are a useful visual aid when scanning
                            through source code and trying to quickly understand its structure. The static type system
                            of Flix supports (local) type inference and is based on Hindley-Milner like those of OCaml
                            and Haskell. The concurrency model of Flix is based on channels and processes as known from
                            Go. Flix aspires to have understandable and detailed error-messages like those found in Elm.
                        </p>

                        <p>
                            The Flix language and compiler is open source and freely available under the permissive
                            Apache 2.0 license.
                        </p>

                        <h2>Hello World</h2>

                        <p>
                            The much celebrated hello world program in Flix:
                        </p>

                        <InlineEditor>
                            {`def main(): String = "Hello World!"`}
                        </InlineEditor>

                        <h2>Basic Functional Programming</h2>

                        <p>
                            Flix allows us to define our own data types and use pattern matching to take them apart:
                        </p>

                        <InlineEditor>
                            {`/// An algebraic data type for shapes.
enum Shape {
    case Circle(Int),        // circle radius
    case Square(Int),        // side length
    case Rectangle(Int, Int) // height and width
}

/// Computes the area of the given shape.
def area(s: Shape): Int = match s {
    case Circle(r)       => 3 * (r * r)
    case Square(w)       => w * w
    case Rectangle(h, w) => h * w
}

// Computes the area of a 2 by 4.
def main(): Int = area(Rectangle(2, 4))
`}
                        </InlineEditor>

                        <p>
                            Flix supports parametric polymorphism (generics) as the following example shows:
                        </p>

                        <InlineEditor>
                            {`/// An algebraic data type for binary trees where each leaf carries a value of type a.
enum Tree[a] {
    case Leaf(a),
    case Node(Tree[a], Tree[a])
}

/// A higher-order function that transforms a tree with 
/// elements of type a to a tree with elements of type b.
def map(f: a -> b, t: Tree[a]): Tree[b] = match t {
    case Leaf(x)    => Leaf(f(x))
    case Node(l, r) => Node(map(f, l), map(f, r))        
  }

/// Returns a simple tree with two leafs.
def tree(): Tree[Int] = Node(Leaf(1), Leaf(2))

/// Squares all elements in the simple tree.
def main(): Tree[Int] = map(x -> x * x, tree())
`}
                        </InlineEditor>

                        <p>
                            Note that type parameters may be omitted from function signatures, as shown in definition
                            of <code>map</code>.
                        </p>

                        <h2>Concurrency</h2>

                        <p>
                            The concurrency model of Flix is inspired by Go. In Flix, processes communicate
                            via immutable message-passing over channels.
                        </p>

                        <p>
                            The following program spawns a new process to perform a (trivial) computation and then sends
                            the
                            result to the main process using a channel.
                        </p>

                        <InlineEditor>
                            {`/// Computes the sum of \`x\` and \`y\` and sends the result on the channel \`c\`.
def sum(x: Int, y: Int, c: Channel[Int]): Unit & Impure = 
    c <- (x + y); ()

/// Computes the sum of 21 and 42 using a fresh process.
def main(): Int & Impure = 
    let c = chan Int 1;     // construct a new empty channel for the result.
    spawn sum(21, 42, c);   // spawn sum to run in a separate process.
    <- c                    // wait for the result to arrive on the channel.
`}
                        </InlineEditor>

                        <p>
                            The powerful <code>select</code> expression can be used to choose the first element that
                            becomes
                            available from a collection of channels. The select expression can be used to implement many
                            useful
                            features, such as load balancing, producer-consumer patterns, and timeouts.
                        </p>

                        <InlineEditor>
                            {`/// Sends the string \`s\` on the channel \`c\` up to \`n\` times.
def animal(s: String, c: Channel[String], n: Int): Unit & Impure = match n {
    case 0 => ()
    case n => c <- s; animal(s, c, n - 1)
}

/// Returns "mooo", "meow", or "hiss".
def main(): String & Impure =
    let c1 = chan String 1;      /// constructs a new empty channel with a buffer of one.
    let c2 = chan String 1;      /// constructs a new empty channel with a buffer of one.
    let c3 = chan String 1;      /// constructs a new empty channel with a buffer of one.
    spawn animal("mooo", c1, 0); /// spawns a process that sends "mooo" on c1.
    spawn animal("meow", c2, 3); /// spawns a process that sends "meow" on c2.
    spawn animal("hiss", c3, 7); /// spawns a process that sends "hiss" on c3.
    select {                     /// selects an element from c1, c2 or c3.
        case mooo <- c1 => mooo  /// c1 became ready first.
        case meow <- c2 => meow  /// c2 became ready first.
        case hiss <- c3 => hiss  /// c3 became ready first.
    }
`}
                        </InlineEditor>

                        <h2>Polymorphic Effects: Separating Pure and Impure Code</h2>

                        <p>
                            A unique feature of Flix is its polymorphic effect system. The effect system precisely
                            tracks the
                            purity and impurity of every expression. Flix, unlike most other programming languages, can
                            guarantee that a function is pure (i.e. does not have side-effects).
                        </p>

                        <p>
                            For example, we can write pure and impure functions:
                        </p>

                        <InlineEditor>
                            {`/// A pure function
def sum(x: Int, y: Int): Int = x + y

/// An impure function
def sayHello(): Unit & Impure = Console.printLine("Hello World")`}
                        </InlineEditor>

                        <p>
                            A major challenge for type and effect systems is effect polymorphism. The problem is the
                            following:
                            for higher-order functions the effect of a function depends on the effects of its arguments.
                            For
                            example, if map is passed a pure function <code>f</code> then the expression <code>List.map(f,
                            1 ::
                            Nil)</code> is pure. On the other hand, if map is passed an impure
                            function <code>g</code> then the
                            expression <code>List.map(g, 1 :: Nil)</code> is impure. The effect of map depends on the
                            effect of
                            its first argument: it is effect polymorphic.
                        </p>

                        <p>
                            We can express such <i>effect polymorphic</i> function types in Flix. For example:
                        </p>

                        <InlineEditor>
                            {`def map(f: a -> b & e, xs: List[a]): List[b] & e = match xs {
    case Nil     => Nil
    case x :: rs => f(x) :: map(f, rs)
}`}
                        </InlineEditor>

                        <p>
                            Here the effect <code>e</code> of <code>map</code> depends on the effect of <code>f</code>.
                        </p>

                        <p>
                            The effect system of Flix is part of what makes the language functional-first: the
                            programmer
                            can trust that a pure function behaves as a mathematical function: it returns the same value
                            when given the same arguments without any side-effects.
                        </p>

                        <h2>First-class Datalog Constraints</h2>

                        <p>
                            Another unique feature of Flix is its support for logic programming with first-class Datalog
                            constraints. Datalog is a simple, yet surprisingly powerful, declarative logic programming
                            language
                            particularly well-suited for recursive queries on graphs. In Flix, Datalog constraints can
                            be
                            embedded <i>inside</i> Flix programs as first-class values that can be stored in local
                            variables,
                            passed and returned from functions, and composed with other Datalog program values. In a
                            way, Flix
                            is a strongly-typed meta-programming language for Datalog.
                        </p>

                        <InlineEditor>
                            {`// Declarations of predicate symbols.
rel Road(src: String, speed: Int, dst: String)
rel Connected(src: String, dst: String)

/// Determines if it is possible to drive from  \`src\` to  \`dst\` going at least  \`minSpeed\`.
def drivable(g: #{Road}, src: String, dst: String, minSpeed: Int): Bool =
    // a first-class Datalog program that computes connectivity subject to speed limits.
    let p = #{
        Connected(x, y) :- Road(x, maxSpeed, y), if maxSpeed >= minSpeed.
        Connected(x, z) :- Connected(x, y), Road(y, maxSpeed, z), if maxSpeed >= minSpeed.
    };
    // solve the Datalog program and determine if  \`src\` is connected to  \`dst\`.
    (solve g <+> p) |= Connected(src, dst).

/// Determines if it possible to drive from Aarhus to Berling going at least 110 km/h.
def main(): Bool = 
    // the road network modelled as a set of Datalog facts.
    let g = #{
        Road("Aarhus", 110, "Vejle").
        Road("Vejle", 130, "Fredericia").
        Road("Fredericia", 130, "Hamburg").
        Road("Hamburg", 130, "Berlin").
    };
    drivable(g, "Aarhus", "Berlin", 110)
`}
                        </InlineEditor>

                        <p>
                            The solution to a Datalog program, its minimal model, is itself a Datalog program (i.e. a
                            set of
                            facts). Consequently, with first-class constraints, it becomes possible to construct
                            pipelines of
                            Datalog programs.
                        </p>

                        <p>
                            First-class Datalog constraints can also be polymorphic, as this example demonstrates:
                        </p>

                        <InlineEditor>
                            {`/// Declare two polymorphic predicate symbols. 
/// Here an edge and a path are labelled with some value of type \`l\`.
rel LabelEdge[l](x: String, l: l, y: String)
rel LabelPath[l](x: String, l: l, y: String)

/// Returns a set of edge facts labelled with numbers.
def getEdgesWithNumbers(): #{ LabelEdge[Int], LabelPath[Int] } = #{
    LabelEdge("a", 1, "b").
    LabelEdge("b", 1, "c").
    LabelEdge("c", 2, "d").
}

/// Returns a set of edge facts labelled with colors (strings).
def getEdgesWithColor[r](): #{ LabelEdge[String] | r } = #{
    LabelEdge("a", "red", "b").
    LabelEdge("b", "red", "c").
    LabelEdge("c", "blu", "d").
}

/// Returns a set of polymorphic constraints to compute 
/// the transitive closure of edges with the *same* label.
def getRules[l](): #{ LabelEdge[l], LabelPath[l] } = #{
    LabelPath(x, l, y) :- LabelEdge(x, l, y).
    LabelPath(x, l, z) :- LabelPath(x, l, y), LabelPath(y, l, z).
}

/// Computes paths for two graphs with different labels. Note the use of polymorphism.
def main(): Unit =
    let r1 = solve getEdgesWithColor() <+> getRules();
    let r2 = solve getEdgesWithNumbers() <+> getRules();
    ()
`}
                        </InlineEditor>

                    </Col>
                </Row>
            </Container>);
    }
}

export default About;
