import React, {Component} from 'react';
import {Container} from "reactstrap";

class Documentation extends Component {
    render() {
        return (
            <Container>
                <h1>Documentation</h1>

                <p>
                    Documentation on flix is currently a bit sparse.
                </p>

                <p>
                    The <a href="http://flix.github.io/programming-flix">Programming Flix</a> manual aims to a offer an
                    interactive tutorial to flix for programmers who are already familiar with functional programming.
                </p>

                <p>
                    The <a href="http://flix.github.io/api/">Standard Library</a> documentation offers a Javadoc-style
                    description of the flix API, including the operations available on important types such as
                    <code>Option</code>, <code>Result</code>, and <code>List</code> that ship with the standard library.
                    Ultimately, flix aims to have a standard library that only offers a few core data types (such as
                    lists), but offers an expansive collection of operations on these.
                </p>

                <p>
                    The research aspects of Flix are fairly well described in the literature. See the research page for
                    more details.
                </p>
            </Container>
        );
    }
}

export default Documentation;
