import React, {Component} from "react";
import ReactGA from "react-ga";
import {Container} from "reactstrap";
import InlineEditor from "../util/InlineEditor";

class Innovations extends Component {

    componentDidMount() {
        document.title = "Flix | Innovations";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>

                <h1>Innovations</h1>

                <p>
                    TODO
                </p>


            </Container>);
    }
}

export default Innovations;
