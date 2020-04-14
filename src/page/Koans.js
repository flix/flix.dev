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



                    </Col>
                </Row>
            </Container>);
    }
}

export default Koans;
