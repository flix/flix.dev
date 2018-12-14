import React, {Component} from 'react';

class Research extends Component {
    render() {
        return (
            <div>
                <h1>Research</h1>

                <p>
                    Research on Flix takes places at Aarhus University and the University of Waterloo.
                    A significant part of the research centers on declarative formulations of program analyses
                    in Flix using first-class Datalog constraints enriched with lattice semantics.
                </p>

                <h3>Peer-Reviewed Conferences and Journals</h3>

                <ul>
                    <Paper
                        title="Implicit Parameters for Logic Programming"
                        authors="Magnus Madsen, Ondřej Lhoták"
                        venue="PPDP '18"
                        url="https://dl.acm.org/citation.cfm?id=3236953"/>

                    <Paper
                        title="Safe and Sound Program Analysis with Flix"
                        authors="Magnus Madsen, Ondřej Lhoták"
                        venue="ISSTA '18"
                        url="https://dl.acm.org/citation.cfm?id=3213847"/>

                    <Paper
                        title="Tail Call Elimination and Data Representation for Functional Languages on the Java Virtual Machine"
                        authors="Magnus Madsen, Ramin Zarifi, Ondřej Lhoták"
                        venue="CC '18"
                        url="https://dl.acm.org/citation.cfm?id=3179499"/>

                    <Paper
                        title="From Datalog to Flix: A Declarative Language for Fixed Points on Lattices"
                        authors="Magnus Madsen, Ming-Ho Yee, Ondřej Lhoták"
                        venue="PLDI '16"
                        url="https://dl.acm.org/citation.cfm?id=2908096"/>
                </ul>

                <h3>Workshops</h3>

                <ul>
                    <Paper
                        title="Programming a Dataflow Analysis in Flix"
                        authors="Magnus Madsen, Ming-Ho Yee, Ondřej Lhoták"
                        venue="TAPAS '16"
                        url="http://staticanalysis.org/tapas2016/abstracts/TAPAS_2016_MadsenEtAl.pdf"/>
                </ul>

                <h3>Theses</h3>

                <ul>
                    <Paper
                        title="Implementing a Functional Language for Flix"
                        authors="Ming-Ho Yee"
                        venue="University of Waterloo"
                        url="https://uwspace.uwaterloo.ca/bitstream/handle/10012/10856/Yee_Ming-Ho.pdf?sequence=1"
                    />
                </ul>

            </div>
        );
    }
}

class Paper extends Component {
    render() {
        return (
            <li className="mb-3">
                <a href={this.props.url}>{this.props.title}</a> <b>[{this.props.venue}]</b>
                <br/>
                {this.props.authors}
            </li>
        );
    }
}

export default Research;
