import React, {Component} from 'react';
import {Container} from "reactstrap";

class Research extends Component {
    render() {
        return (
            <Container>
                <h1>Research</h1>

                <p>
                    Research on Flix takes places at <a href="http://cs.au.dk">Aarhus University</a> and the <a
                    href="http://plg.uwaterloo.ca">University of Waterloo</a>.
                </p>

                <p>
                    A significant part of Research is centered on the Datalog aspects of Flix, including:
                    <ul>
                        <li>the design of a language with first-class Datalog constraints.</li>
                        <li>the extensions of Datalog semantics to lattice semantics.</li>
                        <li>the implementation of efficient fixpoint engines.</li>
                        <li>the use of Flix for program analysis.</li>
                        <li>the verification of such program analyses.</li>
                    </ul>
                </p>

                <p>
                    As the above suggests, a major research focus is on how to write declarative
                    program analyses using Flix that are correct and scalable. The workshop paper <a
                    href="http://staticanalysis.org/tapas2016/abstracts/TAPAS_2016_MadsenEtAl.pdf">Programming a
                    Dataflow Analysis in Flix</a> gives a good introduction to this topic.
                </p>

                <p>
                    Below is a selection of research papers published on Flix:
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

            </Container>
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
