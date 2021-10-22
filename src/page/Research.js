import React, {Component} from 'react';
import {Container} from "reactstrap";
import ReactGA from 'react-ga';

class Research extends Component {

    componentDidMount() {
        document.title = "Flix | Research";
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <Container>
                <h1>Research</h1>

                <p>
                    Research on Flix takes place at <a href="http://cs.au.dk/research/programming-languages/">Aarhus
                    University</a> and the <a
                    href="http://plg.uwaterloo.ca">University of Waterloo</a>.
                </p>

                <p>
                    Below is a selection of research papers published on Flix:
                </p>

                <h3>Peer-Reviewed</h3>

                <ul>
                    <Paper
                        title="Relational Nullable Types with Boolean Unification"
                        authors="Magnus Madsen, Jaco van de Pol"
                        venue="OOPSLA '21"
                        url="/paper/oopsla2021.pdf"/>

                    <Paper
                        title="Fixpoints for the Masses: Programming with First-Class Datalog Constraints"
                        authors="Magnus Madsen, Ondřej Lhoták"
                        venue="OOPSLA '20"
                        url="/paper/oopsla2020a.pdf"/>

                    <Paper
                        title="Polymorphic Types and Effects with Boolean Unification"
                        authors="Magnus Madsen, Jaco van de Pol"
                        venue="OOPSLA '20"
                        url="/paper/oopsla2020b.pdf"/>

                    <Paper
                        title="Implicit Parameters for Logic Programming"
                        authors="Magnus Madsen, Ondřej Lhoták"
                        venue="PPDP '18"
                        url="/paper/ppdp2018.pdf"/>

                    <Paper
                        title="Safe and Sound Program Analysis with Flix"
                        authors="Magnus Madsen, Ondřej Lhoták"
                        venue="ISSTA '18"
                        url="/paper/issta2018.pdf"/>

                    <Paper
                        title="Tail Call Elimination and Data Representation for Functional Languages on the Java Virtual Machine"
                        authors="Magnus Madsen, Ramin Zarifi, Ondřej Lhoták"
                        venue="CC '18"
                        url="/paper/cc2018.pdf"/>

                    <Paper
                        title="From Datalog to Flix: A Declarative Language for Fixed Points on Lattices"
                        authors="Magnus Madsen, Ming-Ho Yee, Ondřej Lhoták"
                        venue="PLDI '16"
                        url="/paper/pldi2016.pdf"/>
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

                <h3>Media</h3>

                <ul>
                    <li>
                        <b>Version2:</b> <a
                        href="https://www.version2.dk/artikel/flix-nyt-sprog-aarhus-vil-goere-programmoerens-liv-lettere-med-logik-tanken-1093103">
                        Flix: Nyt sprog fra Aarhus vil gøre programmørens liv lettere med logik i
                        tanken</a> &ndash; <i>Tania Andersen</i>.
                    </li>
                    <li>
                        <b>ComputerWorld:</b> <a
                        href="https://www.computerworld.dk/art/257120/datalogi-adjunkt-magnus-madsen-har-opfundet-et-nyt-programmeringssprog-vi-staar-over-for-et-skifte-inden-for-programmeringssprog-her-er-ideen-med-det-nye-flix">
                        Datalogi-adjunkt Magnus Madsen har opfundet et nyt programmeringssprog: Vi står over for et
                        skifte inden for programmeringssprog - her er ideen med det nye Flix
                    </a> &ndash; <i>Jakob Schjoldager</i>.
                    </li>
                </ul>

            </Container>
        );
    }
}

class Paper extends Component {
    render() {
        return (
            <li className="mb-1">
                <a href={this.props.url}>{this.props.title}</a> <b>[{this.props.venue}]</b>
            </li>
        );
    }
}

export default Research;
