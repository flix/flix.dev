import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

class ProgrammingLanguageDefense extends Component {

    componentDidMount() {
        document.title = "Flix | In Defense of Programming Languages";
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>
                <Row className="mb-3">
                    <Col sm={12} md={8}>

                        <h1>In Defense of Programming Languages</h1>

                        <p>
                            Posted July 2021 by <i>Magnus Madsen</i>. Thanks to Matthew Lutze for discussion and
                            comments on an early draft.
                        </p>

                        <p>
                            This blog post is written in defense of programming language enthusiasts; whether they are
                            compiler hackers, programming language hobbyists, industry professionals, or academics.
                        </p>

                        <p>
                            In this blog post, I want to examine the discourse around programming languages and
                            especially how new programming languages are received. My hope is to improve communication
                            between programming languages designers and software developers. I understand that
                            we cannot all agree, but it would be fantastic if everyone could at least try to be
                            friendly, to be intellectually curious, and to give constructive feedback!
                        </p>

                        <h2>A Few Quotes from the Internet</h2>

                        <p>
                            Let me set the stage with a few quotes from social media tech sites (e.g. Reddit,
                            HackerNews, Twitter, etc.). I have lightly edited and anonymized the following quotes:
                        </p>

                        <blockquote className="blockquote text-center">
                            <p className="mb-0">"Great! Yet-another-programming-language™. This is exactly what we
                                need; the gazillion of existing programming languages is not enough!"</p>
                            <footer className="blockquote-footer"><cite title="Source Title">Furious Panda</cite> via
                                Reddit
                            </footer>
                        </blockquote>

                        <blockquote className="blockquote text-center">
                            <p className="mb-0">"This is – by far – the worst syntax I have ever seen in a functional
                                language!"</p>
                            <footer className="blockquote-footer"><cite title="Source Title">Irate Penguin</cite> via
                                Reddit
                            </footer>
                        </blockquote>

                        <blockquote className="blockquote text-center">
                            <p className="mb-0">"The language is probably great from a technical point of view, but
                                unless Apple, Google, Mozilla, or Microsoft is on-board it is pointless."</p>
                            <footer className="blockquote-footer"><cite title="Source Title">Angry Beaver</cite> via
                                HackerNews
                            </footer>
                        </blockquote>

                        <blockquote className="blockquote text-center">
                            <p className="mb-0">"How can anyone understand such weird syntax? I hate all these
                                symbols."</p>
                            <footer className="blockquote-footer"><cite title="Source Title">Bitter
                                Turtle</cite> via Reddit
                            </footer>
                        </blockquote>

                        <blockquote className="blockquote text-center">
                            <p className="mb-0">"The examples all look horrible. The site looks horrible. This needs a
                                lot of work before it gets close to anything I would even consider using."</p>
                            <footer className="blockquote-footer"><cite title="Source Title">Enraged
                                Koala</cite> via Twitter
                            </footer>
                        </blockquote>

                        <p>
                            While all of the above quotes are in response to news about the Flix programming language
                            (on whose website you are currently reading this blog post), depressingly similar comments
                            are frequently posted in response to news about other new programming languages.
                        </p>

                        <p>
                            Why do people post such comments? And what can be done about it?
                        </p>

                        <h2>Where do such comments come from?</h2>

                        <p>
                            I think there are two reasons which are grounded in legitimate concerns:
                        </p>

                        <p>
                            <ul>
                                <li>
                                    <b>Fatigue:</b> I think there is a sense that there are new programming
                                    languages coming out all the time. Paradoxically, I think there is both a dread of
                                    having to keep up with ever-changing programming languages (and other technologies)
                                    and simultaneously a sense that these new programming languages are all the same.
                                </li>

                                <li>
                                    <b>Speech:</b> Programming languages are the material with which we craft programs:
                                    It is our way of "speaking" algorithmically. They are about what we say, how we say
                                    it, and even what can be said. Like prose, what is beautiful and elegant is
                                    in the eye of the beholder. It is not surprising then that when a new programming
                                    language comes along and suggests a different form of expression that some may have
                                    strong reactions.
                                </li>
                            </ul>
                        </p>

                        <p>
                            Of course there are also internet trolls; but let us ignore them.
                        </p>

                        <h2>A Point-by-Point Rebuttal</h2>

                        <p>
                            I want to give a point-by-point rebuttal to the most common refrains heard whenever a new
                            programming language is proposed.
                        </p>

                        <h5>Do we really need new programming languages?</h5>

                        <p>
                            The Flix <Link to="/faq/"> FAQ </Link> joking responds this question with a rhetorical
                            question: <i>Do we really need safer airplanes? Do we really need electric cars? Do we
                            really need more ergonomic chairs?</i>
                        </p>

                        <p>
                            I think it is a valid argument. We want better programming languages because we want to
                            offer software developers better tools to write their programs. You might say that existing
                            programming languages already have all the feature we need, but I think that there are
                            exciting developments; both brand new ideas and old research ideas that are making their
                            way into new programming languages:
                        </p>

                        <p>
                            <ul>
                                <li>
                                    <b>Safety:</b> region-based memory management, lifetimes, ownership types, linear
                                    types, 2nd class values, and capabilities.
                                </li>
                                <li>
                                    <b>Expressiveness:</b> union and intersection types, polymorphic effect systems,
                                    algebraic effects, type-driven development, increasingly powerful type inference.
                                </li>
                                <li>
                                    <b>Development Experience:</b> the Visual Studio Code ecosystem, the language server
                                    protocol, GitHub code-spaces.
                                </li>
                            </ul>
                        </p>

                        <p>
                            I don't think we are anywhere near to the point where programming languages are as good as
                            they are ever going to get. On the contrary, I think we are still in the infancy programming
                            language design.
                        </p>

                        <h5>All programming languages are the same</h5>

                        <p>
                            I strongly disagree. I think we are experiencing a period of programming language
                            fragmentation after a long period of consolidation and stagnation. For the last 15-years or
                            so, the industry has been dominated by C, C++, C# and Java. The market share of these
                            programming languages was always increasing and they were the default safe choice for new
                            software projects.
                        </p>

                        <p>
                            Today that is no longer the case. The ecosystem of programming languages is much more
                            diverse (and stronger for it). We have Rust. We have Scala. We also have Go, Python, and
                            JavaScript. There is also Crystal, Elixir, Elm, and Nim (Oh, and Flix of course!) We are in
                            a period of fragmentation. After a decade of object-oriented ossification we are entering a
                            new and exciting period!
                        </p>

                        <p>
                            If history repeats itself then at some point we will enter a new period of consolidation.
                            Its too early to speculate on which programming languages will be the winners, but I feel
                            confident that they will be much better than C, C++, C#, and Java! (Ok, maybe C++30 will be
                            one of them &ndash; that language changes as much as Haskell!)
                        </p>

                        <p>
                            (Addendum: That said, it is true that many hobby programming languages look the same. But
                            there is a reason for that: if you want to learn about compilers it makes sense to start by
                            implementing a minimal functional or object-oriented programming language.)
                        </p>

                        <h5>New programming languages are too complicated!</h5>

                        <p>
                            That's the way of the world.
                        </p>

                        <p>
                            What do you think an airline pilot from the 1950's would say if he or she entered the flight
                            deck of an Airbus A350? Sure, the principles of flying are the same, and indeed iteration
                            and recursion are not going anywhere. But we cannot expect everything to stay the same. All
                            those instruments are there for a reason and they make flying safer and more efficient.
                        </p>

                        <p>
                            As another example, once universities starts teaching Rust (and we will!) then programming
                            with ownership and lifetimes will become commonplace. As yet another example, today every
                            programmer can reasonably be expected to know about <code>filter</code> and <code>map</code>,
                            but that was certainly not the case 15 years ago!
                        </p>

                        <h5>A programming language cannot be successful unless a major tech company is behind it</h5>

                        <p>
                            Historically that has not been true. Neither PHP, Python, Ruby, Rust, or Scala had
                            major tech companies behind them. If industry support came, it came at a later time.
                        </p>

                        <h2>Ideas for Better Communication</h2>

                        <p>
                            With these point in mind, I want suggest some ways to improve communication between
                            aspiring programming language designers and software developers:
                        </p>

                        <p>
                            When presenting a new programming language (or ideas related to a new language):
                        </p>

                        <p>
                            <ul>
                                <li>
                                    <b>Scope:</b> State the intended scope of the project. Is it a hobby project
                                    made for fun? Is it an open source project hoping to gain traction? Is it a research
                                    prototype? Is it a commercially backed project? What is the intended use case? Is
                                    there a "killer-app"?
                                </li>

                                <li>
                                    <b>Implementation:</b> What has been implemented? A compiler? An interpreter? Do you
                                    have a standard library? How big is it? How many lines is the project?
                                </li>

                                <li>
                                    <b>Novelty:</b> What is new in the programming language? Are there some new takes
                                    on old ideas? Is there something novel? How is the language an improvement compared
                                    to existing languages? Does the language make you think in a new way about
                                    programming?
                                </li>

                                <li>
                                    <b>Resources:</b> What resources are behind the programming language? Is it a hobby
                                    project? An open source project? An academic project? Are you open to collaboration?
                                    Do you have backing (from industry or otherwise)?
                                </li>

                                <li>
                                    <b>Feedback:</b> What kind of feedback are you looking for? What other people think?
                                    Suggestions for improvements and related work? Constructive criticism about the
                                    design? What it would take for someone to consider using it?
                                </li>

                                <li>
                                    <b>Reality Check:</b> Try to avoid grandiose or unsubstantiated claims: Do your
                                    compiler really outperform modern state-of-the-art C compilers? Is your type system
                                    really more expressive than Haskell or Idris? Is your language really safer than
                                    Ada?
                                </li>
                            </ul>
                        </p>

                        <h2>What about Flix?</h2>

                        <p>
                            The time has come to nail our colors to the flag:
                        </p>

                        <p>
                            <ul>
                                <li>
                                    <b>Scope:</b> We are building a real programming language intended for real-world
                                    use. It is an open-source project lead by academic programming language researchers.
                                </li>

                                <li>
                                    <b>Implementation:</b> The Flix compiler project is ~137,000 lines of code. We have
                                    a realistic compiler, a standard library (extensive, but still under development), a
                                    Visual Studio Code extension (with auto-complete!), an online playground, online
                                    documentation, and several published papers on the novel aspects of the language.
                                </li>

                                <li>
                                    <b>Novelty:</b> We have a whole page (<Link to="/innovations/">Innovations</Link>)
                                    that covers this, but briefly: a unique combination of features, combined with
                                    first-class Datalog constraints and a polymorphic effect system.
                                </li>

                                <li>
                                    <b>Resources:</b> We are a group of programming language researchers from Aarhus
                                    University and the University of Waterloo together with a small community of open
                                    source contributors. Through our research we have funding for working on Flix.
                                </li>

                                <li>
                                    <b>Feedback:</b> We want to know what people think about Flix, how we can make Flix
                                    better, and what it would take for someone to consider using it.
                                </li>

                                <li>
                                    <b>Reality Check:</b> We aim to under-promise and over-deliver. We do not promote
                                    features before they exist. Our typical pipeline is: (Research) Idea →
                                    Implementation → Documentation → Presentation to the World. Development is not
                                    secret; everything is on GitHub. We just don't promote anything before it is ready.
                                    We have exciting things in the pipeline, but you will have to wait a bit before
                                    learning about them (or spoil yourself by diving into the GitHub issues!)
                                </li>
                            </ul>
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

export default ProgrammingLanguageDefense
