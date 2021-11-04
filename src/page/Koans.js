import React, {Component} from "react";
import ReactGA from "react-ga";
import {Col, Container, Row} from "reactstrap";
import InlineEditor from "../util/InlineEditor";

class Koans extends Component {

    componentDidMount() {
        document.title = "Flix | Koans";
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <Container style={{"text-align": "justify"}}>
                <Row className="mb-3">
                    <Col>
                        <h1>Flix Koans</h1>

                        <p>
                            <i>Koan</i> &mdash; A paradox to be meditated upon that is used to train Zen Buddhist monks
                            to abandon ultimate dependence on reason and to force them into gaining sudden intuitive
                            enlightenment.
                        </p>

                        <h5>
                            Given a road network, determine if it is possible to drive from one city to another city.
                        </h5>

                        <InlineEditor>
                            {`pub def drivable(roads: Array[(city, city)], source: city, destination: city): Bool with Boxable[city] =
    let r = project roads into Road;
    let lp = #{
        Path(x, y) :- Road(x, y).
        Path(x, z) :- Path(x, y), Road(y, z).
    };
    not Array.isEmpty(query r, lp select () from Path(source, destination))`}
                        </InlineEditor>

                        <h5>
                            Given a road network with speed limits on each road, determine if it is possible to drive
                            from one city to another city going at least a certain speed.
                        </h5>

                        <InlineEditor>
                            {`pub def drivable(roads: Array[(city, Int, city)], source: city, destination: city, minimumSpeed: Int): Bool with Boxable[city] =
    let r = project roads into Road;
    let lp = #{
        Path(x, y) :- Road(x, maximumSpeed, y), if maximumSpeed > minimumSpeed.
        Path(x, z) :- Path(x, y), Road(y, maximumSpeed, z), if maximumSpeed > minimumSpeed.
    };
    not Array.isEmpty(query r, lp select () from Path(source, destination))`}
                        </InlineEditor>

                        <h5>
                            Given a road network, compute all pairs of cities that are not connected by roads.
                        </h5>

                        <InlineEditor>
                            {`pub def unconnected(roads: Array[(city, city)]): Array[(city, city)] with Boxable[city] =
    let r = project roads into Road;
    let lp = #{
        City(x) :- Road(x, _).
        City(y) :- Road(_, y).
        Path(x, y) :- Road(x, y).
        Path(x, z) :- Path(x, y), Road(y, z).
        Unconnected(x, y) :- City(x), City(y), not Path(x, y).
    };
    query r, lp select (x, y) from Unconnected(x, y)`}
                        </InlineEditor>

                        <h5>
                            Given a train and a bus network, compute if there is a path from one city to another city
                            with at most the given maximum number of bus connections.
                        </h5>

                        <InlineEditor>
                            {`pub def travelWithLimitedBusses(trainConnections: Array[(city, city)], busConnections: Array[(city, city)], source: city, destination: city, maxBusTrips: Int): Bool with Boxable[city] =
    let tc = project trainConnections into Train;
    let bc = project busConnections into Bus;
    let lp = #{
        Path(x, 0, y) :- Train(x, y).
        Path(x, busses, z) :- Path(x, busses, y), Train(y, z).
        Path(x, 1, y) :- Bus(x, y).
        Path(x, busses + 1, z) :- Path(x, busses, y), Bus(y, z).
    };
    let possibleBusTrips = query tc, bc, lp select busses from Path(source, busses, destination) where busses <= maxBusTrips;
    possibleBusTrips.length > 0`}
                        </InlineEditor>

                        <h5>
                            Given a family tree, compute the pairs of half siblings.
                        </h5>

                        <InlineEditor>
                            {`pub def halfSiblings(siblings: Array[(person, person)]): Array[(person, person)] with Boxable[person] =
    let s = project siblings into Sibling;
    let lp = #{
        Sibling(x, y) :- Parent(x, p), Parent(y, p), if x != y.
        HalfSibling(x, y) :- Sibling(x, y), Parent(y, p), not Parent(x, p).
    };
    query s, lp select (x, y) from HalfSibling(x, y)`}
                        </InlineEditor>

                        <h5>
                            Given a family tree of Roman emperors, compute the heir of every emperor and every usurper.
                        </h5>

                        <InlineEditor>
                            {`pub def heirsAndUsurpers(parents: Array[(person, person)], emperors: Array[person]): {heirs :: Array[person], usurpers :: Array[person]} with Boxable[person] =
    let p = project parents into Parent;
    let e = project emperors into Emperor;
    let lp = #{
        Ancestor(x, y) :- Parent(x, y), not Emperor(y).
        Ancestor(x, z) :- Ancestor(x, y), Parent(y, z), not Emperor(z).
        HeirOf(x, y) :- Emperor(x), Parent(x, y), Emperor(y).
        HeirOf(x, z) :- Emperor(x), Ancestor(x, y), Parent(y, z), Emperor(z).
        Heir(x) :- HeirOf(x, _).
        Usurper(x) :- Emperor(x), not Heir(x).
    };
    let solution = solve p, e, lp;
    let heirs = query solution select x from Heir(x);
    let usurpers = query solution select x from Usurper(x);
    {heirs = heirs, usurpers = usurpers}`}
                        </InlineEditor>

                        <h5>
                            Given a social network graph, compute a collection of friend suggestions. A person is a
                            possible friend if he or she is not (yet) my friend and is friends with at least three of my
                            current friends.
                        </h5>

                        <InlineEditor>
                            {`pub def friendSuggestions(friends: Array[(person, person)]): Array[(person, person)] with Boxable[person] =
    let f = project friends into Friend;
    let lp = #{
        Suggestion(me, nf) :-
            Friend(me, f1), Friend(me, f2), Friend(me, f3),
            Friend(f1, nf), Friend(f2, nf), Friend(f3, nf),
            not Friend(me, nf),
            if f1 != f2 and f2 != f3 and f1 != f3.
    };
    query f, lp select (x, y) from Suggestion(x, y)`}
                        </InlineEditor>

                        <h5>
                            Given a list of operating system processes, compute all orphaned and zombie processes.
                        </h5>

                        <p>
                            An <i>orphaned process</i> has no parent or has <i>init</i> (pid 1) as its parent. A <i>zombie
                            process</i> is dead, but its parent is still alive.
                        </p>

                        <InlineEditor>
                            {`pub def orphansAndZombies(processes: Array[(processId, String, processId)], rootId: processId): {orphans :: Array[processId], zombies :: Array[processId]} with Boxable[processId] =
    let p = project processes into Process;
    let lp = #{
        Zombie(pid) :- Process(pid, "dead", parent), Process(parent, "alive", _).
        HasParent(pid) :- Process(pid, _, parent), Process(parent, _, _).
        Orphan(pid) :- Process(pid, _, rootId).
        Orphan(pid) :- Process(pid, _, _), not HasParent(pid).
    };
    let solution = solve p, lp;
    let zombies = query solution select pid from Zombie(pid);
    let orphans = query solution select pid from Orphan(pid);
    {zombies = zombies, orphans = orphans}`}
                        </InlineEditor>

                        <h5>
                            Given a list of graphs, find all pairs of graphs whose union is acyclic.
                        </h5>

                        <InlineEditor>
                            {`def isCyclic(edges: Array[(Int, Int)]): Bool =
    let e = project edges into Edge;
    let lp = #{
        Path(x, y) :- Edge(x, y).
        Path(x, z) :- Path(x, y), Edge(y, z).
        // Cycle as a predicate for further logic programming
        // Cycle() :- Path(x, x).
    };
    let cycleNodes = query e, lp select x from Path(x, x);
    cycleNodes.length > 0

pub def pairwiseAcyclic(graphs: List[Array[(Int, Int)]]): List[List[Array[(Int, Int)]]] =
    let combineGraphs = (g1, g2) -> query (project g1 into Edge) <+> (project g2 into Edge) select (x, y) from Edge(x, y);
    graphs |> List.groupBy((g1, g2) -> not isCyclic(combineGraphs(g1, g2)))`}
                        </InlineEditor>

                    </Col>
                </Row>
            </Container>);
    }
}

export default Koans;
