import React, {Component} from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
import {Container} from 'reactstrap';

class Faq extends Component {

    componentDidMount() {
        document.title = "Flix | FAQ"
    }

    render() {
        return (
            <Container>
                <h1>Frequently Asked Questions</h1>

                <p className="mb-3">
                    A collection of information that did not seem to fit in anywhere else.
                </p>

                <QA>
                    <Question>
                        What is on the development road map for Flix?
                    </Question>
                    <Answer>
                        <p>
                            We don't want to over-promise and under-deliver, hence we try to only discuss what has
                            already been implemented. That said, two major features we want to support in Flix are a
                            polymorphic effect system and type classes.
                        </p>

                        <p>
                            For smaller features, the GitHub issue tracker gives an idea of the kinds of things we are
                            currently working on.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Are you looking for help with the compiler or language design?
                    </Question>
                    <Answer>
                        Yes! We welcome any contributions and we are happy to mentor someone who wants to work
                        on the compiler. We are also open to general feedback and discussion about the language
                        design. Head on over to GitHub / Gitter and reach out to us!
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Does Flix support integration with Java, Kotlin, Scala etc?
                    </Question>
                    <Answer>
                        <p>
                            No, not at the moment. We have experimental support for calling into Java, but that API
                            is likely to change in the future. We want to get interoperability <i>right</i>, but it
                            is a big challenge, since we do not want to sacrifice any of the Flix principles in doing
                            so.
                        </p>

                        <p>
                            For example, to support proper interoperability with Java we will need to
                            support <code>null</code>, but at the same time we don't want to pollute the Flix language
                            with <code>null</code> values. Dealing with such issues is complicated, but something
                            we plan to address long-term.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Flix looks quite similar to Scala. How are the two languages related?
                    </Question>
                    <Answer>
                        <p>
                            Flix borrows a lot of syntax from Scala, hence the two languages have a similar feel.
                            We think Scala made many good design choices with respect to syntax, including:
                            (a) the use of short keywords,
                            (b) the <code>x : T</code> syntax for type annotations,
                            (c) the <code>List[Int]</code> syntax for type parameters, and
                            (d) <code>if</code>, <code>match</code>, etc. as expressions.
                        </p>

                        <p>
                            Other than syntax, the two languages are different: Scala is object-oriented, Flix is not.
                            Scala has sub-typing, Flix does not. The Scala type system is unsound and has imperfect
                            type inference, whereas the Flix type system is both sound and supports type inference.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Does Flix have a read-eval-print-loop (REPL)?
                    </Question>

                    <Answer>
                        Flix has a shell that allows expressions to be entered and evaluated on-the-fly. The source
                        code of a program can also be loaded into the shell. However, the shell does not permit the
                        definition of new declarations. The shell can be started with
                        the <code>--interactive</code> argument.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Does Flix have IDE support? Editor support? Language Server Protocol (LSP) support?
                    </Question>
                    <Answer>
                        No. At the moment we only have keyword based syntax highlighting. We would be happy if someone
                        would pick up a project to add language server protocol (LSP) support. We believe that this is
                        something that will come eventually as the language matures.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Does Flix compile to LLVM?
                    </Question>
                    <Answer>
                        No. Flix does not currently have an LLVM backend. It is something we are open to, but it
                        depends on the availability of a garbage collector.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Does Flix compile to WebAssembly (WASM)?
                    </Question>
                    <Answer>
                        No. Flix does not currently have a WebAssembly backend. As for LLVM, it is something we are
                        open to, but it depends on the availability of a garbage collector and support for tail
                        call elimination.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Is the Flix type system sound?
                    </Question>
                    <Answer>
                        Yes. It is based on Hindley-Milner. Of course the implementation might have bugs, but those
                        are fixable.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        I want to learn Flix! What should I know about before hand?
                    </Question>
                    <Answer>
                        <p>
                            At the moment, Flix has not yet reached version 1.0. That means you will be an early
                            adopter, so you should expect for the language to evolve and be prepared for the rare
                            compiler bug. (The Flix compiler has 5,500 manually written tests and we
                            take correctness seriously.)
                        </p>

                        <p>
                            To write Flix programs, a solid background in functional programming is useful. That means
                            prior experience with OCaml, Haskell, Scala, or similar programming languages.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        What is the best way to start learning Flix?
                    </Question>
                    <Answer>
                        <p>
                            We recommend that you start with a small offering to the Great Dreamer, the Sleeper of
                            R'lyeh, Cthulhu. And coffee. Lots of coffee.
                        </p>

                        <p>
                            All kidding aside, the examples on the front page and the research literature are probably
                            the best starting points for learning the syntax, semantics, and type system of Flix.
                            Prior experience with functional programming is also useful.
                        </p>

                        <p>
                            If you get stuck or need help feel free to reach out to us on Gitter.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Is Flix a domain specific language (DSL)?
                    </Question>
                    <Answer>
                        <p>
                            No, Flix is a full-blown functional programming language.
                        </p>

                        <p>
                            That said, Flix could be considered a meta-programming language for Datalog.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        What is the expected runtime performance of Flix programs?
                    </Question>
                    <Answer>
                        <p>
                            Flix runs on the Java Virtual Machine (JVM) hence the performance of Flix is limited by the
                            performance of the JVM. Luckily, the JVM is a mature and performant virtual machine. Flix
                            uses monomorphization which eliminates boxing and in theory can make code execute faster
                            than ordinary Java / Kotlin / Scala code. However, Flix also features tail call elimination
                            and (in the future) delimited continuations, and each of these come with their own
                            performance cost.
                        </p>

                        <p>
                            It is our goal to be faster than any interpreted language and within a few factors of
                            equivalent functional Scala code.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        What is the expected performance of the Flix compiler?
                    </Question>
                    <Answer>
                        <p>
                            To answer this question, it is important to distinguish between <a
                            href="https://en.wikipedia.org/wiki/Latency_(engineering)">latency</a> and <a
                            href="https://en.wikipedia.org/wiki/Throughput">throughput</a>.
                        </p>

                        <p>
                            The Flix compiler runs on the JVM hence startup times can be expensive, i.e. the compiler
                            has high latency. However, once the JVM has warmed up the compiler is quite fast, i.e. has
                            high throughput.
                        </p>

                        <p>
                            A simple experiment shows that the compiler runs about <code>20.0x</code> times faster
                            when warmed up compared to when cold. We estimate that Flix, when warmed up, compiles
                            around <code>20,000</code> lines of code per second, which we believe to better than the
                            Scala compiler, but worse than the Java compiler.
                        </p>

                        <p>
                            At the moment, the compilation of a Flix program pulls in the entire standard library (a few
                            thousand lines of code) and compiles it along with the program. This behaviour can be
                            avoided, by passing the <code>--Xcore</code> flag, but then data types such
                            as <code>List</code> will be unavailable. In the future, it is our plan to compile-by-need.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Who works on Flix? Is Flix a hobby project?
                    </Question>
                    <Answer>
                        Flix is a research project carried out by faculty and students at Aarhus University and the
                        University of Waterloo.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Where does the "Flix" name come from?
                    </Question>
                    <Answer>
                        We do not entirely remember, but we believe it arose out of <span className="text-monospace">FIXpoint Language</span>.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        You do not seem to understand parsing / type theory / code generation / computers!
                    </Question>
                    <Answer>
                        We are happy to learn and to revisit design decisions if we come to a greater understanding
                        of the problem at hand. If you think we have overlooked something, we would be happy to talk
                        about it if you post a ticket on GitHub or write to us on Gitter.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        The language is probably great from a technical point of view, but unless Apple, Google,
                        Mozilla, or Microsoft is on-board it is pointless.
                    </Question>
                    <Answer>
                        <p>
                            Yes, no programming language developed outside of those four corporations have ever been
                            successful. See also C, C++, Java, Python, PHP, MatLab, Perl, R, Ruby, Scala, ...
                        </p>

                        <p>
                            That said, if you work for a company and would like to help sponsor Flix, please feel free
                            to reach out to us :)
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Does Flix have a network library with streaming support?
                    </Question>
                    <Answer>
                        Not yet, but maybe we could call it net-flix?
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Wow! Amazing! A language where you can iterate through lists and call functions recursively.
                    </Question>
                    <Answer>
                        Magical, isn't it?
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Great! Yet-another-programming-language™. This is exactly what we need; the gazillion of
                        existing programming languages is not enough.
                    </Question>
                    <Answer>
                        Flix aims to offer a combination of language features that are not found in any existing
                        language.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        The examples all look horrible. The site looks horrible. This needs a lot of work before it
                        gets close to anything I would even consider using.
                    </Question>
                    <Answer>
                        I am sorry, what was the question?
                    </Answer>
                </QA>

            </Container>
        );
    }
}

// What is the killer app for Flix?
// Does it support higher-order logic programming like λProlog or Twelf?
// tl;dr What's so special about this programming language that couldn't be done already by some or all of the other programming languages in existence?

class Question extends Component {
    render() {
        return (
            <CardTitle>{this.props.children}</CardTitle>
        );
    }
}


class Answer extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

class QA extends Component {
    render() {
        return (
            <Card className="mb-3">
                <CardBody>
                    {this.props.children}
                </CardBody>
            </Card>);
    }
}

export default Faq;
