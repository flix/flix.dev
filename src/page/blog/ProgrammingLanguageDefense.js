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
                            Posted July 2021 by <i>Magnus Madsen</i>.
                        </p>

                        <p>
                            This blog post is written in defense of programming language enthusiasts; whether they are
                            compiler hackers, programming language hobbyists, industry professionals, or academics.
                        </p>

                        <p>
                            In this blog post, I want to examine the discourse around programming languages and
                            especially how new programming languages are received. My hope is to improve communication
                            between programming languages designers and software developers at large. I understand that
                            we cannot always agree, but it would be fantastic if everyone could at least try to be
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
                            I think there are two primary reasons both of which are grounded in legitimate concerns:
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
                                    language comes along and suggests a different form of expression that some people
                                    may feel challenged.
                                </li>
                            </ul>
                        </p>

                        <p>
                            Of course there are also internet trolls; but let us ignore them.
                        </p>

                        <h2>A Point-by-Point Rebuttal</h2>

                        <p>
                            I will now give a point-by-point rebuttal of the most common refrains heard whenever a new
                            programming language is proposed.
                        </p>

                        <h5>Do we really need new programming languages?</h5>

                        <p>
                            The Flix <Link to="/faq/"> FAQ </Link> joking responds this question with a rhetorical
                            question: <i>Do we really need safer airplanes? Do we really need electric cars? Do we
                            really need more ergonomic chairs?</i>
                        </p>

                        <p>
                            While that remark may appear mocking, I think it is a valid argument. We want better
                            programming languages because we want to offer software developers better tools to write
                            their programs. There are many areas of improvement:

                            <ul>
                                <li>
                                    Improved safety: Through types, through lifetimes, through static analysis, etc.
                                </li>
                                <li>
                                    Improved performance: Allowing higher abstractions while compiling to fast code.
                                </li>
                                <li>Improved ergonomics: Better IDEs, better APIs, etc.</li>
                            </ul>

                            I don't think we are anywhere near the point where programming languages are as good as they
                            are ever going to get. I think we are still in the infancy of the arc of programming
                            languages.
                        </p>

                        <h5>All programming languages are the same</h5>

                        <p>
                            I strongly disagree. I think we are experiencing a period of programming language
                            fragmentation after a long period of consolidation. For the last 15-years or so, the
                            industry was dominated by C, C++, C# and Java. The market share of these programming
                            languages was always increasing. I view this as a consolidation phase where there was a
                            sense that object-oriented programming languages such as C# and Java were the way to go.
                        </p>

                        <p>
                            Today that is no longer the case. Instead, the ecosystem is much more diverse and stronger
                            for it. We have Rust. We have Scala. We have Go, Python, and JavaScript. We have Crystal and
                            Nim. We have TypeScript. We are in a period of fragmentation. After a decade (or more) of
                            OO-ossification we are finally in a new and exciting period!
                        </p>

                        <p>
                            If history repeats itself then at some point we will enter a new period of consolidation. I
                            am not sure who will "win", but whoever the winners are, I am sure that they will be
                            "better" languages than those of the last cycle.
                        </p>

                        <p>
                            (Addendum: Of course it is true that when it comes to hobby programming languages many are
                            either purely functional or purely object-oriented programming languages. But that makes
                            sense, of course hobbyist compiler hackers are interested in tinkering with the tools they
                            use at their day job. This does not mean all programming languages are the same. Rather it
                            is a question of better communication, which I will get to.)
                        </p>

                        <h5>It's too complicated!</h5>

                        <p>
                            TBD
                        </p>

                        <h5>A programming language cannot be successful unless a major tech company is behind it</h5>

                        <p>
                            Historically that has not been true. Neither PHP, Python, Ruby, Rust, or Scala had
                            major tech companies behind them. If support came, it came later.
                        </p>

                        <h2>Ideas for Better Communication</h2>

                        <p>
                            With these point in mind, I want suggest some ways to improve communication between
                            aspiring programming language designers and software developers:
                        </p>

                        <p>
                            When presenting a new programming language:
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
                                    design? What it would take for them to consider using it?
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
                                    use.
                                </li>

                                <li>
                                    <b>Implementation:</b> The Flix compiler project (including tests) is, as of
                                    writing, approximately 137,000 lines of code. The standard library contains
                                    approximately 1,500 functions. Most of that functionality is centered on basic data
                                    types and collections.
                                </li>

                                <li>
                                    <b>Novelty:</b> TODO
                                </li>

                                <li>
                                    <b>Resources:</b> We are a small community of open source developers and academic
                                    researchers from Aarhus University and the University of Waterloo.
                                </li>

                                <li>
                                    <b>Feedback:</b> We want to know what people think about our innovations, about
                                    our language design, and what it would take for them to consider using Flix.
                                </li>

                                <li>
                                    <b>Reality Check:</b> We aim to under-promise and over-deliver. We do not promote
                                    features before they exist. Our typical pipeline is: (Research) Idea →
                                    Implementation → Documentation → Presentation to the World. Development is not
                                    secret, in the spirit of open source, everything is on GitHub. We just don't promote
                                    anything before it is ready.
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
