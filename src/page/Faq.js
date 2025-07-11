import React, {Component} from 'react';
import {Card, CardBody, CardTitle, Table} from 'reactstrap';
import {Container} from 'reactstrap';
import {Link} from "react-router-dom";

class Faq extends Component {

    componentDidMount() {
        document.title = "Flix | FAQ";
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
                            Yes, with the <code>import</code> mechanism.
                            You can read more in the documentation, in the section: <a
                            href="https://doc.flix.dev/interoperability.html">Interoperability</a>.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Flix looks similar to Scala. How are the two languages related?
                    </Question>
                    <Answer>
                        <p>
                            Flix borrows a lot of syntax from Scala, hence the two languages have a similar feel.
                        </p>
                        <p>
                            We think Scala made many good design choices with respect to syntax, including:
                        </p>

                        <ul>
                            <li>the use of short keywords,</li>
                            <li>the <code>x : T</code> syntax for type annotations,</li>
                            <li>the <code>List[Int32]</code> syntax for type parameters, and</li>
                            <li><code>if</code>, <code>match</code>, etc. as expressions.</li>
                        </ul>

                        <p>
                            However, other than syntax, the two languages are very different:
                        </p>

                        <ul>
                            <li>Scala is object-oriented, Flix is not.</li>
                            <li>Scala has sub-typing, Flix does not.</li>
                            <li>Flix has an effect system, Scala does not.</li>
                            <li>And so on.</li>
                        </ul>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Does Flix have a read-eval-print-loop (REPL)?
                    </Question>

                    <Answer>
                        Flix has a nascent REPL. It can be started with the <code>repl</code> command.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Does Flix have IDE support? Language Server Protocol (LSP) support?
                    </Question>
                    <Answer>
                        Yes. There is a <a href="https://marketplace.visualstudio.com/items?itemName=flix.flix">Visual
                        Studio Code plugin available for Flix</a>.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Does Flix compile to LLVM?
                    </Question>
                    <Answer>
                        No and we don't have any plans to target LLVM.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Does Flix compile to WebAssembly (WASM)?
                    </Question>
                    <Answer>
                        Not yet. It is something we are open to.
                        We are waiting for WebAssembly to offer native support for garbage collection and tail calls.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Is the Flix type system sound? Does it support complete inference?
                    </Question>
                    <Answer>
                        Yes and yes. The type system is a variant of Hindley-Milner.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        What is the best way to start learning Flix?
                    </Question>
                    <Answer>
                        <p>
                            We recommand that you have some prior experience with functional programming.
                        </p>

                        <p>
                            Other than that, the best place to start is to look at the examples and to
                            read the <a href="https://doc.flix.dev/">Programming Flix</a> book.
                        </p>

                        <p>
                            If you get stuck or need help feel free to reach out to
                            us on <a href="https://gitter.im/flix/Lobby">Gitter</a>.
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
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Haskell and OCaml compile to native code thus by definition they must be faster than Flix.
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
                            A simple experiment shows that the compiler runs about <code>4.0x</code> times faster
                            when warmed up compared to when cold. We estimate that Flix, when warmed up, compiles
                            around <code>50,000</code> lines of code per second, which we believe to be faster than the
                            Scala compiler, but slower than the Java compiler. We take compiler performance
                            seriously and continuously track the <a href="https://arewefast.flix.dev/">performance of
                            the compiler</a>.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Ok, but really, what is the performance of the Flix compiler?
                    </Question>
                    <Answer>
                        <p>
                            Compiler throughput on an AMD Ryzen 9 5900x with 12 cores and 32GB memory.
                        </p>

                        <p>
                            Experimental results from the 27th of November 2023.
                        </p>

                        <Table striped>
                            <thead>
                            <tr>
                                <th className="text-left" style={{"width": "20%"}}>What</th>
                                <th className="text-right">Threads</th>
                                <th className="text-right">Throughput (lines/sec)</th>
                                <th className="text-right">Ratio</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-left">Entire Compiler</td>
                                <td className="text-right">1</td>
                                <td className="text-right">12,062</td>
                                <td className="text-right">1.0x</td>
                            </tr>
                            <tr>
                                <td className="text-left">Entire Compiler</td>
                                <td className="text-right">24</td>
                                <td className="text-right">56,632</td>
                                <td className="text-right font-weight-bold">4.7x</td>
                            </tr>
                            <tr>
                                <td className="text-left">Compiler Frontend</td>
                                <td className="text-right">1</td>
                                <td className="text-right">19,191</td>
                                <td className="text-right">1.0x</td>
                            </tr>
                            <tr>
                                <td className="text-left">Compiler Frontend</td>
                                <td className="text-right">24</td>
                                <td className="text-right">112,898</td>
                                <td className="text-right font-weight-bold">5,9x</td>
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

                        <p>
                            The following design choices may be considered controversial by some:
                        </p>

                        <ul>
                            <li>
                                Unused variables are compile-time errors.
                            </li>
                            <li>
                                Shadowed variables are compile-time errors.
                            </li>
                            <li>
                                Unused definitions, type declarations, etc. are compile-time errors.
                            </li>
                            <li>
                                No variadic or labelled function arguments.
                            </li>
                            <li>
                                No warnings, only compile-time errors.
                            </li>
                            <li>
                                <a href="https://www.hillelwayne.com/post/divide-by-zero/">Dividing by zero yields
                                    zero</a>.
                            </li>
                        </ul>

                    </Answer>
                </QA>

                <QA>
                    <Question>Wait, division by zero is zero, really?</Question>

                    <Answer>
                        Yes. But focusing on this is a bit like focusing on the color of the seats in a spacecraft.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Where does the "Flix" name come from?
                    </Question>
                    <Answer>
                        We do not remember, but we believe it may have come from <span className="text-monospace">FIXpoint Language</span>.
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
                        We are always happy to learn! We are ready to discuss design choices made in Flix.
                        Swing by Gitter or on GitHub.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Why does the website require JavaScript?
                    </Question>
                    <Answer>
                        We built the website using the popular React framework.
                        Using React was easy.
                        Ultimately, we want to spend our time writing compilers, not writing websites.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        The page does not load without JavaScript enabled. If I cannot even view the website without
                        that bloat, I wonder what the language is like?
                    </Question>
                    <Answer>
                        Indeed, if your computer is too old to run a modern browser that supports JavaScript then
                        probably your computer is too old to run a modern JVM that supports Flix. Sorry.
                    </Answer>
                </QA>

                <QA>
                    <Question>"This site requires JavaScript"</Question>
                    <Answer>
                        <p>
                            People who have criticized the website for using JavaScript: <a
                            href="https://news.ycombinator.com/item?id=25516097">[1]</a>, <a
                            href="https://news.ycombinator.com/item?id=38419909">[2]</a>, <a
                            href="https://news.ycombinator.com/item?id=38420198">[3]</a>, <a
                            href="https://news.ycombinator.com/item?id=38419695">[4]</a>, <a
                            href="https://lobste.rs/s/ygbpw3/defense_programming_languages#c_yc6jle">[5]</a>.
                        </p>

                        <p>
                            People who have offered to help refactor the site to use static html: <b>0</b>.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        It appears that an example on the website does not work?
                    </Question>
                    <Answer>
                        <p>
                            The latest compiler version and the website is not always in sync, hence occasionally some
                            examples may stop to work.
                        </p>

                        <p>
                            Occasionally a mischievous visitor will crash the online editor (or rather the virtual
                            machine on which the compiler runs).
                        </p>
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
                        Why is it that all the "big-brain" programming language ideas seems to happen in weird new
                        functional programming languages? Are they just a better petri dish for experimenting
                        with weird shit? I assume that all of this gets funding because ten years later it makes C#
                        programmers more productive, not because of mass appeal.
                    </Question>
                    <Answer>
                        <p>
                            Yes, we do it all for C#.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        "Flix is inspired by OCaml and Haskell with ideas from Rust and Scala".
                        Inspirations and ideas from four of the arguably most complex languages of the modern world, all
                        the best with that.
                    </Question>
                    <Answer>
                        <p>
                            Yes, we take inspiration from programming languages that are pushing on the boundary of
                            language design.
                        </p>

                        <p>
                            What would be the point of taking ideas from C, Perl, PHP, and Visual Basic?
                        </p>

                        <p>
                            Also, who said that we are taking their most complex ideas? Rather we should take
                            their <i>best</i> ideas.
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
                        Flix aims to offer a collection of features that are not found in any existing programming
                        language.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Do we really need any more programming languages?
                    </Question>
                    <Answer>
                        <p>
                            <i>Do we really need safer airplanes?</i> <i>Do we really need electric cars?</i> <i>Do we
                            really need more ergonomic chairs?</i>
                        </p>

                        <p>
                            I mean, after all, we already have airplanes, cars, and chairs!
                        </p>

                        <p>
                            We build new programming languages and we conduct research on programming language design
                            because we want to offer developers <i>better tools to write programs</i>. We want to make
                            it <i>simpler</i>, <i>safer</i>, and <i>faster</i> to write correct programs.
                        </p>

                        <p>
                            And we want to increase developer happiness. It should be a pleasure to use Flix!
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        This sounds like vaporware. All big promises and no delivery.
                    </Question>
                    <Answer>
                        The <a href="https://doc.flix.dev/research-literature.html">research</a>,
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
                        We are deeply sorry to have let you down.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        It boggles my mind that any developer of a new language would not use Python’s significant use
                        of white space.
                    </Question>
                    <Answer>
                        Right, because significant whitespace poses no challenges or gotchas whatsoever.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Interesting project but whoever decided "forM" is a good name for a language keyword should be made to gurgle Tabasco sauce for a few minutes.
                    </Question>
                    <Answer>
                        <p>
                            We much prefer <a href="https://en.wikipedia.org/wiki/Cholula_Hot_Sauce">Cholula Hot Sauce.</a>
                        </p>
                        <p>
                            That said, <code>forM</code> is clear, concise, and works well with <code>forA</code> allowing one to easily switch
                            between monadic-code and applicative-code.
                        </p>
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
                        Sorry, what was the question?
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        In today's world, I think that English is the only programming language that people should focus
                        on.
                        With the rapid rise of AI, most tasks will soon involve the management of AI models rather than
                        writing code.
                        Introducing a new programming language at this point seems silly to me.
                    </Question>
                    <Answer>
                        <p>
                            As of my last knowledge update in January 2022, programming languages continue to be a
                            fundamental tool for software development.
                            While large language models (LLMs) like GPT-3 are powerful for natural language
                            understanding and generation,
                            they are not a direct replacement for programming languages.
                            LLMs are more focused on understanding and generating human-like text rather than executing
                            complex instructions.
                        </p>

                        <p>
                            Programming languages are designed to provide precise instructions to computers, specifying
                            how algorithms and processes should be executed.
                            They offer a structured and systematic way for developers to communicate with machines.
                            Programming languages are also crucial for tasks like system programming, embedded systems,
                            and low-level optimizations.
                        </p>

                        <p>
                            It's important to note that the field of artificial intelligence is dynamic, and
                            advancements may have occurred since my last update. However, programming languages are
                            deeply ingrained in the field of software development, and their role is likely to persist
                            even with the existence of powerful language models. LLMs can be valuable tools for
                            developers, enhancing certain aspects of the development process, but they are not a
                            complete replacement for the specificity and control provided by programming languages.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Write a Flix program to kill a process and all its children.
                    </Question>
                    <Answer>
                        <p>
                            I'm sorry, but I cannot assist with or provide information related to harmful or
                            malicious activities, including any code that could cause harm to processes or systems.
                        </p>

                        <p>
                            If you have any non-harmful programming-related questions or if there's another topic
                            you'd like assistance with, please feel free to ask, and I'll do my best to help within
                            ethical boundaries
                        </p>
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
