import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";

class NewProgrammingLanguages extends Component {

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
                            between programming languages enthusiasts and software developers. I understand that we
                            cannot always agree, but it would be fantastic if everyone could at
                            least try to be friendly and intellectually curious!
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
                            <p className="mb-0">"How the fuck can anyone understand such weird syntax? I hate all these
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
                            (on whose website you are currently reading), depressingly similar comments are frequently
                            posted in response to news about other new programming languages.
                        </p>

                        <p>
                            Why do people post such comments? And what can be done about it?
                        </p>

                        <h2>Where do such comments come from?</h2>

                        <p>
                            I think there are two main reasons, both grounded in legitimate concerns:
                        </p>

                        <p>
                            <ul>
                                <li>
                                    <b>Fatigue:</b> I think there is a sense that there are too many new programming
                                    languages coming out all the time and that it is hard to keep up. Paradoxically,
                                    I think there is both a dread of having to keep up with ever-changing programming
                                    languages (or technologies in general) and simultaneously a sense that these
                                    programming languages are all the same, and do not offer anything new.
                                </li>

                                <li>
                                    <b>Speech:</b> Programming languages are the material with which we craft programs:
                                    It is our way of "speaking" algorithmically. They are about what we say, how we say
                                    it, and even what can be said. Like prose, what is beautiful and elegant is
                                    subjective. It is not surprising then that when a new programming language comes a
                                    long and suggests a different form of expression that people may feel challenged.
                                </li>
                            </ul>
                        </p>

                        <p>
                            Of course there are also internet trolls; but lets ignore them.
                        </p>

                        <h2>A Point-by-Point Rebuttal</h2>

                        <p>
                            I will now give a point-by-point rebuttal of the most common refrains heard when a new
                            programming language is proposed.
                        </p>

                        <h5>Do we really need new programming languages?</h5>

                        <div className="text-danger">

                            <p>
                                The Flix FAQ joking responds with rhetorical question: <i>Do we really need safer
                                airplanes?
                                Do we really need electric cars? Do we really need more ergonomic chairs?</i>
                            </p>

                            <p>
                                While the remark may appear mocking; I think it is valid argument. We <i>want</i> better
                                programming languages we should offer developers better tools to write programs.
                                And we want to increase developer happiness. It should be a pleasure to use Flix!

                                Also if this is a hobby project, what do you care. Noone is forcing you to use it!

                                This segways neatly into my next point.
                            </p>

                            <h5>All programming language are the same</h5>

                            <p>
                                I actually think the opposite. We are expericing a period of programming language
                                fragmentation. No longer is industry dominated by C, C++, C# and Java. Instead, today,
                                the
                                ecosystem is much more diverse (and stronger for it). We have Rust. We have Go. We have
                                Crystal. We have Kotlin. We have Scala. We have Python. We have JavaScript.

                                I think after a decade of OOP ossificiation we are finally in a new and exciting period!

                                Now, it is true that many hobbiest projects are purely functional and/or purely
                                object-oriented programming languges. But that makes sense- of course hobbiest compiler
                                hackers are interested in building the tools that they use at their payjob.
                            </p>

                            <h5>Go / Haskell / Python is better</h5>

                            <p>
                                Yes, hopefully there is some progress. In the sense that the programming languages of
                                today
                                should be better than the programming languages of yesterday! For example, hopefully
                                no-one
                                is recommending the use of COBOL/PL-1/EcmaScript-4 today over any other other existing
                                mainstream
                                programming languages.
                            </p>

                            <h5>A programming language cannot be successful unless a major tech company is behind
                                it</h5>

                            <p>
                                I think this is easily debunked by the existence of Rust, PHP, Python, Ruby, Scala. In
                                fact,
                                I think most successful programming languages did not come out of big tech.
                            </p>

                            <h5>Go doesn't have generics. Haha.</h5>

                            <p>
                                While I am firmly on side of this question, I think these comments mises the point.
                                Generics
                                (or parametric polymorphism) is a well-understood, battle-tested, implemented technique.
                                Whether you are for or against, we should not waste so much effort discussing a
                                well-known
                                feature. Instead, imagine if the same amount of effort was expended on say discussing
                                exciting "new ideas" such as <i>algebraic effects</i>, <i>deliminated
                                continuations</i> or <i>owner ship types</i>. Of course this requires the broad
                                community to
                                write insight blog posts about these topics.
                            </p>

                            <h2>Ideas for Better Communication</h2>

                            <p>
                                With these point in mind, I want suggest some ways to improve communication between
                                aspiring
                                programming language developers and software developers in general:
                            </p>

                            <p>
                                <ul>
                                    <li>
                                        <b>Scope</b>: Clearly state the intended scope of the project. Is it hobby
                                        project
                                        made for fun? Is it an open source project hoping to gain traction? Is it a
                                        (research) prototype? Is it intended for real-world use?
                                    </li>

                                    <li>
                                        <b>Novelty</b> - What is new about the language?
                                        Of course
                                    </li>

                                    <li>
                                        <b>Feedback</b> What feedback are you looking for?
                                    </li>
                                </ul>
                            </p>

                            <p>
                                In the case of Flix, we make serious claims: That it is real, that is intended for use,
                                that
                                we have an appropriate blend of features, and that we have unique features. Thus, we
                                should
                                be held to a high standard.
                                Finally, regardless of where ones project fall on the scale, I don't think we should
                                discourage anyone. Especially not someones fun hobby project.

                                The only discouragement I would offer is for people not to overclaim: To claim that
                                their
                                programming language already achieve very lofty goals with actually delivering on those
                                goals.
                            </p>

                            <p>
                                Until next time, happy hacking.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default NewProgrammingLanguages
