import React, {Component} from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
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
                        What is the best way to start learning Flix?
                    </Question>
                    <Answer>
                        <p>
                            We recommend to read the <a href="https://doc.flix.dev/">Programming Flix</a> book.
                        </p>

                        <p>
                            If you get stuck or need help feel free to reach out to
                            us on <a href="https://gitter.im/flix/Lobby">Gitter</a>.
                        </p>
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Does Flix have Language Server Protocol (LSP) support?
                    </Question>
                    <Answer>
                        Yes, in addition to Visual Studio Code support, Flix also has generic LSP support.
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
                        Not yet. It is something we are open to. We are waiting for the WASM ecosystem to mature.
                    </Answer>
                </QA>

                <QA>
                    <Question>
                        Is Flix a domain specific language (DSL)?
                    </Question>
                    <Answer>
                        <p>
                            No, Flix is a full-blown general-purpose programming language.
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
                        What is the runtime performance of Flix programs?
                    </Question>
                    <Answer>
                        <p>
                            Flix runs on the JVM which means that the performance of Flix programs is comparable to that
                            of Java and Scala programs.
                        </p>

                        <p>
                            Flix is a whole-program optimizing compiler that uses monomorphization and inlining (like
                            Rust and MLton). Hence, sometimes, Flix programs run faster than their Java or Scala
                            equivalent.
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
                        Interesting project but whoever decided "forM" is a good name for a language keyword should be
                        made to gurgle Tabasco sauce for a few minutes.
                    </Question>
                    <Answer>
                        <p>
                            We much prefer <a href="https://en.wikipedia.org/wiki/Cholula_Hot_Sauce">Cholula Hot
                            Sauce.</a>
                        </p>
                        <p>
                            That said, <code>forM</code> is clear, concise, and works well
                            with <code>forA</code> allowing one to easily switch
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
