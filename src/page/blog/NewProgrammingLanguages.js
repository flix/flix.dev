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
                            hobbyists, compiler hackers, industry professionals, or programming language academics.
                        </p>

                        <p>
                            I want to examine the discourse around programming languages; with a focus on how new
                            programming languages are often received. My ultimate goal is to build bridge and to improve
                            communication. I understand that not everyone will always agree, but at least we should
                            strive to be friendly and intellectually curious!
                        </p>

                        <p>
                            To begin, let me set the stage by presenting a few quotes from "social media" (e.g.
                            Reddit, Twitter, but also to a lesser extend HackerNews and Lobste.rs).
                        </p>

                        <p>
                            To protect the culpable, I have paraphrased and anonymized the quotes:
                        </p>

                        <blockquote className="blockquote text-center">
                            <p className="mb-0">"Do we really need any more programming languages?"</p>
                            <footer className="blockquote-footer"><cite title="Source Title">Angry
                                Beaver</cite> via Reddit
                            </footer>
                        </blockquote>

                        <blockquote className="blockquote text-center">
                            <p className="mb-0">"Great! Yet-another-programming-language™. This is exactly what we need;
                                the gazillion of existing programming languages is not enough."</p>
                            <footer className="blockquote-footer"><cite title="Source Title">Furious Panda</cite> via
                                Reddit
                            </footer>
                        </blockquote>

                        <blockquote className="blockquote text-center">
                            <p className="mb-0">"This is – by far – the worst syntax I have ever seen in a functional
                                language. Semicolons, braces, symbolic soup, et al. It is like if Scala, Java and
                                Haskell had a one night stand in the center of Chern"</p>
                            <footer className="blockquote-footer"><cite title="Source Title">Irate Penguin</cite> via
                                Reddit
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
                            <footer className="blockquote-footer"><cite title="Source Title">Enraged Koala</cite> via
                                Reddit
                            </footer>
                        </blockquote>

                        <blockquote className="blockquote text-center">
                            <p className="mb-0">"The language is probably great from a technical point of view, but
                                unless Apple, Google, Mozilla, or Microsoft is on-board it is pointless."</p>
                            <footer className="blockquote-footer"><cite title="Source Title">Irate Rabbit</cite> via
                                Reddit
                            </footer>
                        </blockquote>

                        <p>
                            While all of the above quotes are in response to news about Flix (the programming language
                            whose website you are currently on), similar comments are frequently posted in response to
                            news about other programming languages. Why do people post such comments?
                        </p>

                        <h2>Programming Language Fatigue?</h2>

                        <p>
                            I think there are at least two legitimate reasons for these types of comments:
                        </p>

                        <p>
                            <i>Programming language fatigue</i> &ndash; a sense that too many new programming languages
                            are coming out all the time and that it is hard to keep. A dread of new technology being
                            forced on oneself. And finally a sense that all new programming languages are really the
                            same, so why bother?
                        </p>

                        <p>
                            <p>How to speak</p>  &ndash; programming languages are the material with which we craft
                            programs: It is our way of "speaking" algorithmically. It is about what we say. It is about
                            how we say it. And it is about what can even be said. It is about what is beautiful and/or
                            what is interesting. It is not suprising that people have strong opinios about how they
                            should express themselves! (This is very much unlike a new algoritmic for a specific problem
                            -- those are rarely met by vitriol if even discussed.)
                        </p>

                        <h2>A Point-by-Point Rebuttal</h2>

                        <p>
                            I want to give a serious point-by-point rebuttal of why we are not done with PL research.
                            Where Flix fits in. We should be held to a high standard, but
                            people should also engange honestly by understanding the details.
                        </p>

                        <h5>Do we need new programming languages?</h5>

                        <p>
                            The Flix FAQ joking responds with rhetorical question: <i>Do we really need safer airplanes?
                            Do we really need electric cars? Do we really need more ergonomic chairs?</i>
                        </p>

                        <p>
                            While the remark may appear mocking; I think it is valid argument. We <i>want</i> better
                            programming languages we should offer developers better tools to write programs.
                            And we want to increase developer happiness. It should be a pleasure to use Flix!

                            This segways neatly into my next point.
                        </p>

                        <h5>All programming language are the same</h5>

                        <p>

                        </p>

                        <h5>Go / Haskell Python is better</h5>

                        <h5>No success without...</h5>

                        <h5>Go doesn't have generics. Haha.</h5>

                        <p>
                            While I am firmly on side of this question, I think these comments mises the point. Generics
                            (or parametric polymorphism) is a well-understood, battle-tested, implemented technique.
                            Whether you are for or against, we should not waste so much effort discussing a well-known
                            feature. Instead, imagine if the same amount of effort was expended on say discussing
                            exciting "new ideas" such as <i>algebraic effects</i>, <i>deliminated
                            continuations</i> or <i>owner ship types</i>. Of course this requires the broad community to
                            write insight blog posts about these topics.
                        </p>

                        <h2>Ideas for Better Communication</h2>

                        <p>
                            With these point in mind, I want suggest some ways to improve communication between aspiring
                            programming language developers and software developers in general:
                        </p>

                        <p>
                            <ul>
                                <li>
                                    <b>Scope</b>: Clearly state the intended scope of the project. Is it hobby project
                                    made for fun? Is it an open source project hoping to gain traction? Is it a
                                    (research) prototype? Is it intended for real-world use?
                                </li>

                                <li>
                                    <b>Novelty</b> - What is new about the language?
                                    Of course
                                </li>
                            </ul>
                        </p>

                        <p>
                            In the case of Flix, we make serious claims: That it is real, that is intended for use, that
                            we have an appropriate blend of features, and that we have unique features. Thus, we should
                            be held to a high standard.
                        </p>

                        <p>
                            Finally, regardless of where ones project fall on the scale, I don't think we should
                            discourage anyone. Especially not someones fun hobby project.
                        </p>

                        <p>
                            <b>Feedback</b> What feedback are you looking for?
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

export default NewProgrammingLanguages
