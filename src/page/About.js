import React, {Component} from "react";
import ReactGA from "react-ga";
import {Container} from "reactstrap";
import InlineEditor from "../util/InlineEditor";

class About extends Component {

    componentDidMount() {
        document.title = "Flix | About";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>

                <h1>About</h1>

                <p>
                    Flix is a functional-, logic-, and imperative- programming language focusing on making it simple to
                    write safe, robust, and elegant programs. It tries to achieve this through a combination of a strong
                    static type system with type inference, an extensive collection of compile-time checks, and by
                    avoiding many of the mistakes of programming languages past. Flix aims to have a principled design
                    that does <i>not</i> sacrifice safety nor elegance at the altar of expediency. <i>Flix is a language
                    for programmers that care about programs.</i>
                </p>

                <p>
                    Flix draws inspiration from many other excellent languages, including Elm, F#, OCaml, Haskell, Rust,
                    and Scala. Flix visually resembles Scala with an emphasis on conciseness and the use of
                    keywords. We believe that short keywords are a useful visual aid when scanning through source code
                    and trying to quickly understand its structure. The static type system of Flix supports (local) type
                    inference and is based on Hindley-Milner like those of OCaml and Haskell. The concurrency model of
                    Flix is based on channels and processes as known from Go. Flix aspires to have understandable and
                    detailed error-messages like those found in Elm.
                </p>

                <p>
                    Flix is open source and freely available under the permissive Apache 2.0 license.
                </p>

                <h2>Hello World</h2>

                <p>
                    The much celebrated hello world program in Flix:
                </p>

                <InlineEditor>
                    {`def main(): Str = "Hello World!"`}
                </InlineEditor>

                <h2>Basic Functional Programming</h2>

                <p>
                    We can define our own data types and use pattern matching to take them apart:
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

                <h2>Concurrency</h2>

                <p>
                    The concurrency model of Flix is inspired by Go. In Flix, a concurrency unit of execution is a
                    process that communicates via message passing. While not yet the case, it is our goal for processes
                    to be light-weight, like they are in Go.
                </p>

                <p>
                    The following program spawns a new process to perform a (trivial) computation and then sends the
                    result to the main process using a channel.
                </p>

                <InlineEditor>
                    {`/// Computes the sum of \`x\` and \`y\` and sends the result on the channel \`c\`.
def sum(x: Int, y: Int, c: Channel[Int]): Unit = 
    c <- (x + y); ()

/// Computes the sum of 21 and 42 using a fresh process.
def main(): Int = 
    let c = chan Int 1;     // construct a new empty channel for the result.
    spawn sum(21, 42, c);   // spawn sum to run in a separate process.
    <- c                    // wait for the result to arrive on the channel.
`}
                </InlineEditor>

                <p>
                    We can use the powerful <code>select</code> expression to choose the first element that becomes
                    available from a collection of channels. The select expression can be used to implement many useful
                    features, such as load balancing, producer-consumer patterns, and timeouts.
                </p>

                <InlineEditor>
                    {`/// Sends the string \`s\` on the channel \`c\` up to \`n\` times.
def animal(s: Str, c: Channel[Str], n: Int): Unit = match n {
    case 0 => ()
    case n => c <- s; animal(s, c, n - 1)
}

/// Returns "mooo", "meow", or "hiss".
def main(): Str =
    let c1 = chan Str 1;         /// constructs a new empty channel with a buffer of one.
    let c2 = chan Str 1;         /// constructs a new empty channel with a buffer of one.
    let c3 = chan Str 1;         /// constructs a new empty channel with a buffer of one.
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

            </Container>);
    }
}

export default About;
