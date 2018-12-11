import React, {Component} from 'react';

class Research extends Component {
    render() {
        return (
            <div>
                <h1>Research</h1>

                <p>
                    Flix
                </p>

                <ul>
                    <Paper name="Implicit Parameters for Logic Programming"
                    />

                    <Paper name="Safe and Sound Program Analysis with Flix "
                    />

                    <Paper
                        name="Tail Call Elimination and Data Representation for Functional Languages on the Java Virtual Machine"
                    />

                    <Paper name="From Datalog to Flix: A Declarative Language for Fixed Points on Lattices"
                    />
                </ul>


            </div>
        );
    }
}

class Paper extends Component {
    render() {
        return (
            <li>{this.props.name}</li>
        );
    }
}

export default Research;
