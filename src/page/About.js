import React, {Component} from "react";
import ReactGA from "react-ga";
import {Container} from "reactstrap";
import Editor from "../util/Editor";
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
                    TODO
                </p>

                <h2>Features</h2>

                TODO

                <InlineEditor flix={this.props.flix}>
                    {`def main(): Str = "Hello World!"`}
                </InlineEditor>

            </Container>);
    }
}

export default About;
