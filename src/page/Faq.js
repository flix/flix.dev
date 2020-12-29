import React, {Component} from 'react';
import {Card, CardBody, CardTitle, Table} from 'reactstrap';
import {Container} from 'reactstrap';
import ReactGA from 'react-ga';
import {Link} from "react-router-dom";

class Faq extends Component {

    componentDidMount() {
        document.title = "Flix | FAQ";
        ReactGA.pageview(window.location.pathname);
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
                        Are you looking for help with the compiler or language design?
                    </Question>
                    <Answer>
                        Yes! We welcome any contributions and we are happy to mentor someone who wants to work
                        on the compiler. We are also open to general feedback and discussion about the language
                        design. Head on over to <a href="https://github.com/flix/flix">GitHub</a> or <a
                        href="https://gitter.im/flix/Lobby">Gitter</a> and reach out to us!
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Does Flix support integration with Java, Kotlin, Scala etc?
                    </Question>
                    <Answer>
                        <p>
                            Yes, with the <a href="https://doc.flix.dev/interoperability/">import
                            mechanism</a>.
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
                            Other than syntax, the two languages are very different: Scala is object-oriented, Flix is
                            not.
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
                        Why does Flix target the Java Virtual Machine (JVM)?
                    </Question>
                    <Answer>
                        The Java Virtual Machine is a state-of-the-art virtual machine that runs on virtually every
                        platform, comes with a huge ecosystem of libraries, and supports garbage collection. While not
                        the ideal target for functional programming languages, due to its absence of tail call
                        instructions, it is still a strong choice. Moreover, if <a
                        href="https://openjdk.java.net/projects/loom/">Project Loom</a> (or similar efforts) turn out
                        successful then the JVM will offer an unbeatable feature set. That said, we are keeping a keen
                        eye on developments in the WebAssembly space.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Is the Flix type system sound?
                    </Question>
                    <Answer>
                        Yes. It is based on Hindley-Milner.
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
                            compiler bug. (The Flix compiler has 6,500 manually written tests and we
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
                            R'lyeh, Cthulhu. And coffee. Lots of coffee. All kidding aside, the best place to start is
                            to look at the examples and to read the <a href="https://doc.flix.dev/">Programming
                            Flix</a> book.
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
                        What is the runtime performance of Flix programs?
                    </Question>
                    <Answer>
                        <p>
                            Flix runs on the Java Virtual Machine (JVM) hence the performance of Flix is limited by the
                            performance of the JVM. Luckily, the JVM is a mature and performant virtual machine. Flix
                            uses monomorphization which eliminates boxing and in theory can make code execute faster
                            than ordinary Java / Kotlin / Scala code. However, Flix also features full tail call
                            elimination
                            which has some run-time performance cost.
                        </p>

                        <p>
                            Our goal to be faster than any interpreted language and within a few factors of
                            equivalent functional Scala code.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        What is the performance of the Flix compiler?
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
                            Scala compiler, but worse than the Java compiler. We take compiler performance
                            seriously and continuously track the <a href="https://arewefast.flix.dev/">performance of
                            the compiler</a>.
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
                        Ok, but really, what is the performance of the Flix compiler?
                    </Question>
                    <Answer>
                        <p>
                            Compiler throughput on an Intel i5-K8600k with 16GB of RAM.
                        </p>

                        <p>
                            Experimental results from the 30th of May 2020.
                        </p>

                        <Table striped>
                            <thead>
                            <tr>
                                <th className="text-center" style={{"width": "20%"}}>Threads</th>
                                <th className="text-right">Throughput (lines/sec)</th>
                                <th className="text-right">Ratio</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td className="text-right">9,673</td>
                                <td className="text-right">1.0x</td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td className="text-right">14,482</td>
                                <td className="text-right">1.5x</td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td className="text-right">17,100</td>
                                <td className="text-right">1.8x</td>
                            </tr>
                            <tr>
                                <td className="text-center">4</td>
                                <td className="text-right">18,722</td>
                                <td className="text-right">1.9x</td>
                            </tr>
                            <tr>
                                <td className="text-center">5</td>
                                <td className="text-right">20,118</td>
                                <td className="text-right">2.1x</td>
                            </tr>
                            <tr>
                                <td className="text-center">6</td>
                                <td className="text-right">21,052</td>
                                <td className="text-right">2.2x</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        What features are <i>not</i> supported by Flix?
                    </Question>

                    <Answer>
                        <p>
                            Flix will, <i>by design</i>, not support any of the following features:
                        </p>

                        <Table striped>
                            <thead>
                            <tr>
                                <th style={{"width": "20%"}}>Feature</th>
                                <th>Reason</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Exceptions</td>
                                <td>Exceptions have been used to deal with two types of errors that may arise during
                                    execution of a program: predictable errors (e.g. a file does not exist) and program
                                    bugs (e.g. stack overflow). Flix has no exceptions. Instead, all predictable errors
                                    should be encoded as partial functions (e.g. using <code>Option</code>) or as
                                    potentially error returning functions (e.g. using <code>Result</code>). We are still
                                    in the process of deciding how to handle program bugs.
                                </td>
                            </tr>
                            <tr>
                                <td>Null Values</td>
                                <td>
                                    Null, famously called <a href="https://en.wikipedia.org/wiki/Tony_Hoare">Tony
                                    Hoare's billion dollar mistake</a>, is simply a bad solution to the problem of how
                                    to represent the (potential) absence of a value. Instead, in Flix, you should use
                                    the <code>Option</code> data type.
                                </td>
                            </tr>
                            <tr>
                                <td>Non-Total Functions</td>
                                <td>
                                    The Flix standard library has been deliberately designed to avoid common
                                    programming mistakes. We want functions that are safe and have accurate type
                                    signatures. For example, unlike Scala or Haskell,
                                    the <code>List.head</code> function returns an <code>Option</code> since we cannot
                                    in general guarantee that a list is non-empty.
                                </td>
                            </tr>
                            <tr>
                                <td>Silent Coercions</td>
                                <td>
                                    Implicit coercions between data types (e.g. between booleans and other values or
                                    between enums and integers) is a rich source of programming mistakes. In Flix,
                                    no type is ever converted to another type without explicit instruction from the
                                    programmer.
                                </td>
                            </tr>
                            <tr>
                                <td>No Code Before Main</td>
                                <td>
                                    In Flix, no code is ever executed before main. Flix has no static initializers (or
                                    similar constructs) which are difficult to reason about, error-prone, and often lead
                                    to buggy code.
                                </td>
                            </tr>
                            <tr>
                                <td>Equality and Assignment Confusion</td>
                                <td>
                                    In Flix, the equality test operator (<code>==</code>) is different from the
                                    assignment operator (<code>:=</code>) which is different from the equality sign
                                    (<code>=</code>) used in definitions and let-bindings. Flix has been designed such
                                    that programs that mistake one for the other is unlikely to compile.
                                </td>
                            </tr>
                            <tr>
                                <td>Undefined Behavior</td>
                                <td>Undefined behavior is frequently the cause of program bugs and
                                    vulnerabilities. We want every Flix program to have a well-defined semantics.
                                </td>
                            </tr>
                            </tbody>
                        </Table>

                        <p>
                            This list was partially inspired by the blog post <a
                            href="https://graydon2.dreamwidth.org/218040.html">things rust shipped without</a>.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        What controversial design choices are made in Flix?
                    </Question>

                    <Answer>
                        We are planning to define <a href="https://www.hillelwayne.com/post/divide-by-zero/">division by
                        zero</a> as yielding zero.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Who works on Flix? Is Flix a hobby project?
                    </Question>
                    <Answer>
                        <p>
                            Flix is a research project carried out by faculty and students at <a
                            href="http://cs.au.dk/">Aarhus University</a> and the <a href="http://uwaterloo.ca/">University
                            of Waterloo</a>.
                        </p>

                        <p>
                            Flix is partially supported by a grant of 2,500,000 DKK from the <a href="http://dff.dk/">Independent
                            Research Fund of Denmark.</a>
                        </p>
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
                        Does Flix have a network library with streaming support?
                    </Question>
                    <Answer>
                        Not yet, but maybe we could call it net-flix?
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
                        Why does the website require JavaScript?
                    </Question>
                    <Answer>
                        We built the website using the popular React framework. We use JavaScript for the online code
                        editor. Ultimately, we want to spend our time writing compilers, not writing websites.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        The page does not load without javascript enabled. If I cannot even view the mostly text
                        website without that bloat, I wonder what the language is like?
                    </Question>
                    <Answer>
                        Indeed, if your computer is too old to run a browser that supports JavaScript then probably your
                        computer is too old to run a modern JVM that supports Flix. Also, why would we spent time
                        hacking on JavaScript when we could hack on Flix instead?
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        It appears that an example on the website does not work?
                    </Question>
                    <Answer>
                        <p>
                            The examples on the website and the compiler running on a virtual machine are not always
                            completely in sync. If an example fails to compile feel free to open a bug report and we
                            will get it fixed.
                        </p>

                        <p>
                            Occasionally a mischievous visitor will crash the virtual machine. We usually discover and
                            fix this within a few days.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Haskell and OCaml compile to native code thus – by definition – they must be faster than Flix.
                    </Question>
                    <Answer>
                        This is not necessarily true. For example, Java sometimes beats both <a
                        href="https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/ocaml-java.html">OCaml</a> and <a
                        href="https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/haskell.html">Haskell</a> in <a
                        href="https://benchmarksgame-team.pages.debian.net/benchmarksgame/index.html">The Computer
                        Language Benchmarks Game</a>.
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
                        Flix aims to offer a combination of features that are not found in any existing programming
                        language.

                        You may also want to explore the <Link to="/innovations/">innovations</Link>.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Can we just stop building new programming languages?
                    </Question>
                    <Answer>
                        <p>
                            We build new programming languages and we do research on programming languages because we
                            want to offer developers better tools to write programs. We want tools that make it simpler,
                            safer, and faster to write correct programs. We want tools that increase productivity and
                            that aid in program maintenance.
                        </p>

                        <p>
                            The situation is not unlike why we would want better airplanes, better houses, or better
                            surgical instruments.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        This sounds like vaporware. All big promises and no delivery.
                    </Question>
                    <Answer>
                        The <Link to="/research/">research</Link>,
                        the <Link to="/innovations/">innovations</Link>,
                        the <a href="https://github.com/flix/flix">code</a>,
                        and the <a href="https://arewefast.flix.dev/">performance</a>.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        I was disappointed to learn that Flix has feature <b>X</b> instead of my favorite
                        feature <b>Y</b>.
                    </Question>
                    <Answer>
                        We are sorry to have let you down.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        How the fuck can anyone understand such weird syntax? I hate all these symbols.
                    </Question>
                    <Answer>
                        <p>
                            The Flix syntax is <Link to="/principles/"> based on keywords</Link> except when there is a
                            <i>clearly established historical precedent</i> for using a symbol. For example:
                        </p>

                        <ul>
                            <li>The cons of an element <code>x</code> and a list <code>xs</code> is written as <code>x
                                :: xs</code>.
                            </li>
                            <li>The underscore <code>_</code> denotes a wildcard (or an unused variable).</li>
                            <li>The expression <code>&lt;- c</code> reads a value from a channel whereas <code>c &lt;-
                                v</code> writes a value to a channel.
                            </li>
                            <li>The symbol <code>:-</code> denotes logical implication in Datalog rules.</li>
                        </ul>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        This is – by far – the worst syntax I have ever seen in a functional language. Semicolons,
                        braces, symbolic soup, et al. It is like if Scala, Java and Haskell had a one night stand in the
                        center of Chernobyl.
                    </Question>
                    <Answer>
                        Quite an achievement, wouldn't you say?
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
