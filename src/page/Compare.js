import React, {Component} from "react";
import ReactGA from "react-ga";
import {
    Button,
    Card,
    CardBody,
    CardSubtitle, CardText,
    CardTitle,
    Col,
    Container, Label,
    ListGroup,
    ListGroupItem,
    Row,
    Table
} from "reactstrap";
import {FaCheck} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";

class Compare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "Scala"
        }
    }

    changeLanguage(language) {
        this.setState({language: language});
    }

    componentDidMount() {
        document.title = "Flix | Compare";
        ReactGA.pageview(window.location.pathname + window.location.hash);
    }

    render() {
        return (
            <Container>

                <Row className="mb-3">
                    <Col>
                        <h1>Flix compared to other programming languages</h1>
                    </Col>
                </Row>

                <Row className="justify-content-md-center mb-3">
                    <Button outline className="btn-sm mr-2" onClick={() => this.changeLanguage("OCaml")}>
                        OCaml
                    </Button>

                    <Button outline className="btn-sm mr-2" onClick={() => this.changeLanguage("Haskell")}>
                        Haskell
                    </Button>

                    <Button outline className="btn-sm mr-2" onClick={() => this.changeLanguage("Scala")}>
                        Scala
                    </Button>
                </Row>

                <Row>
                    <Col>
                        <Table>
                            <thead>
                            <tr>
                                <th/>
                                <th className="text-center">Flix</th>
                                <th className="text-center">Scala</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <th scope="row">Paradigm</th>
                                <td>Multi-paradigm: functional, imperative, logic, channel and process-based concurrency</td>
                                <td>Multi-paradigm: functional, imperative, object-oriented, actor and thread-based concurrency</td>
                            </tr>

                            <tr>
                                <th scope="row">Null</th>
                                <td>N</td>
                                <td>
                                    <Row>
                                        <FaCheck style={{fontSize: '2em'}}/>
                                    </Row>
                                    <Row>
                                        <p className="text-muted">
                                            In Scala null is a subtype of any which can lead to null pointer
                                            exceptions.
                                        </p>

                                    </Row>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">Polymorphic Effects</th>
                                <td>
                                    <FaTimes style={{fontSize: '1em'}}/>
                                    <p className="text-muted  w-50">
                                        Flix separates pure and impure code.
                                    </p>
                                </td>
                                <td>N</td>
                            </tr>
                            <tr>
                                <th scope="row">Compilation Times</th>
                                <td colSpan={2}>

                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Incremental Compilation</th>
                                {this.yes()}
                                {this.no()}
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>);
    }

    yes() {
        return <td className="text-center font-weight-bold text-success">Yes</td>;
    }

    no() {
        return <td className="text-center font-weight-bold text-danger">No</td>;
    }
}

export default Compare;
