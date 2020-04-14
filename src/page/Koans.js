import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";
import InlineEditor from "../util/InlineEditor";

class Koans extends Component {

    componentDidMount() {
        document.title = "Flix | Koans";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>
                <Row className="mb-3">
                    <Col sm={12} md={8}>
                        <h1>Flix Koans</h1>

                        <p>
                            <i>Koan</i> &mdash;
                            <br/>
                            A paradox to be meditated upon that is used to train Zen
                            Buddhist monks to abandon ultimate dependence on reason and to force them into
                            gaining sudden intuitive enlightenment.
                        </p>

                        <h5>
                            Given a road network, determine if it is possible to drive from one city to another city.
                        </h5>

                        <InlineEditor>
                            {`def drivable(g: #{Road(City, City)}, src: City, dst: City): Bool =
    let p = #{
        Path(x, y) :- Road(x, y).
        Path(x, z) :- Path(x, y), Road(y, z).
    };
    (solve g <+> p) |= Path(src, dst).
`}
                        </InlineEditor>

                        <h5>
                            Given a road network with speed limits on each road, determine if it
                            is possible to drive from one city to another city going at least a certain
                            speed.
                        </h5>

                        <InlineEditor>
                            {`def drivable(g: #{Road(City, Int, City)}, src: City, dst: City, minSpeed: Int): Bool =
    let p = #{
        Path(x, y) :- Road(x, maxSpeed, y), if maxSpeed > minSpeed.
        Path(x, z) :- Path(x, y), Road(y, maxSpeed, z), if maxSpeed > minSpeed.
    };
    (solve g <+> p) |= Path(src, dst).`}
                        </InlineEditor>

                        <h5>
                            Given a road network, compute all pairs of cities that are not connected by roads.
                        </h5>

                        <InlineEditor>
                            {`def unconnected(g: #{Road(City, City)}): #{Unconnected(City, City)} =
    let p = #{
        City(x) :- Road(x, _).
        City(y) :- Road(_, y).
        Path(x, y) :- Road(x, y).
        Path(x, z) :- Path(x, y), Road(y, z).
        Unconnected(x, y) :- City(x), City(y), not Path(x, y).
    };
    project Unconnected (solve (g <+> p))`}
                        </InlineEditor>

                        <h5>
                            Given a train and a bus network, compute if there is a path from
                            one city to another city with preference for the train.
                        </h5>

                        <InlineEditor>
                            {`def travel(tg: #{Train(City, City)}, bg: #{Bus(City, City)}, 
           src: City, dst: City): Option[#{Path(City, City)}] =
    let p = #{
        Path(x, y) :- Train(x, y).
        Path(x, z) :- Path(x, y), Train(y, z).
        Path(x, y) :- Bus(x, y), not Train(x, y).
        Path(x, z) :- Path(x, y), Bus(y, z), not Train(x, y).
    };
    let m = solve (tg <+> bg <+> p);
    if (m |= Path(src, dst).) Some(project Path m) else None`}
                        </InlineEditor>

                        <h5>
                            Given a family tree, compute the half brothers and half sisters of every child.
                        </h5>

                        <InlineEditor>
                            {`def halfSiblings(g: #{Parent(Person, Person), Male(Person), Female(Person)}): 
    #{HalfBro(Person, Person), HalfSis(Person, Person)} =
    let p = #{
        Sibling(c, s) :- Parent(c, p), Parent(s, p), if c != s.
        HalfBro(c, s) :- Sibling(c, s), Male(s),
        Parent(s, p), not Parent(c, p).
        HalfSis(c, s) :- Sibling(c, s), Female(s),
        Parent(s, p), not Parent(c, p).
    };
    let m = solve (p <+> g);
    (project HalfBro m) <+> (project HalfSis m)`}
                        </InlineEditor>

                        <h5>
                            Given a family tree of Roman emperors, compute the heir of every emperor and every usurper.
                        </h5>

                        <InlineEditor>
                            {`def heirsAndUsurpers(g: #{Parent(Person, Person), Emperor(Person)}): 
    (#{Heir(Person, Person)}, #{Usurper(Person)}) =
    let p = #{
        Ancestor(x, y) :- Parent(x, y), not Emperor(y).
        Ancestor(x, z) :- Ancestor(x, y), Parent(y, z), not Emperor(z).
        Heir(x, y) :- Emperor(x), Parent(x, y), Emperor(y).
        Heir(x, z) :- Emperor(x), Ancestor(x, y), Parent(y, z), Emperor(z).
        Usurper(x) :- Emperor(x), not Heir(x, _).
    };
    let m = solve g <+> p;
    (project Heir m, project Usurper m)`}
                        </InlineEditor>

                    </Col>
                </Row>
            </Container>);
    }
}

export default Koans;
