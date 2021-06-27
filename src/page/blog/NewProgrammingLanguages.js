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
                            whose website you are currently on), similar comments are very frequently posted in response
                            to news about other programming languages.
                        </p>

                        <h2>Programming Language Fatigue?</h2>

                        <p>
                            Where is all this. It is about what we say. It is about how we speak. It is about what we
                            think is beatiful or interesting.
                        </p>

                        <p>
                            We should not discourage someones hobby project.
                        </p>

                        <h2>A Point-by-Point Rebuttal</h2>

                        <p>
                            I want to give a serious point-by-point rebuttal of why we are not done with PL research.
                        </p>

                        <h5>Do we really need new programming languages?</h5>

                        <p>
                            XYZ
                        </p>

                        <h5>Isnt this just?</h5>

                        <h5>Go / Haskell Python is better</h5>

                        <h5>No success without...</h5>

                        <h2>Ideas for Better Communication</h2>

                        <p>
                            <b>Scope</b> - - Clearly state what kind of project this (hobby, etc).
                        </p>

                        <p>
                            <b>Novelty</b> - What is new.
                        </p>

                        <p>
                            <b>Feedback</b> What feedback are you looking for?
                        </p>

                        <p>
                            Where Flix fits in. We should be held to a high standard, but
                            people should also engange honestly by understanding the details.
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
