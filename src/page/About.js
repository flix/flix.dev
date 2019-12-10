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

                The much celebrated hello world program in Flix:

                <InlineEditor>
                    {`def main(): Str = "Hello World!"`}
                </InlineEditor>



            </Container>);
    }
}

export default About;
