import React, {Component} from 'react';
import './App.css';

import Home from "./page/Home";
import GettingStarted from "./page/GettingStarted";
import Documentation from "./page/Documentation";
import Principles from "./page/Principles";
import Contribute from "./page/Contribute";
import Research from "./page/Research";
import Faq from "./page/Faq";
import Checklist from "./page/misc/Checklist";
import {Container, Navbar, Nav, NavItem, NavLink, Row} from 'reactstrap';
import {Route} from "react-router";
import {Link} from "react-router-dom";

const SocketAddress = 'wss://evaluator.flix.dev/ws';

class App extends Component {
    constructor(props) {
        super(props);

        console.log("Connecting to: " + SocketAddress);

        this.state = {
            connected: false,
            websocket: null
        };

        try {
            this.state.websocket = new window.WebSocket(SocketAddress);

            this.state.websocket.onopen = event => {
                console.log("Connected to: " + SocketAddress);
                this.setState({connected: true})
            }
        } catch (ex) {
            console.log("Unable to connect: " + ex)
        }
    }

    runProgram = (src, f) => {
        if (!this.state.connected) {
            console.log("Not connected yet");
            return;
        }

        this.state.websocket.onmessage = event => {
            console.log("Received reply from: " + SocketAddress);
            const data = JSON.parse(event.data);

            console.log(data);
            f(data);
        };

        this.state.websocket.send(src);
    };

    getHome() {
        return <Home flix={{connected: this.state.connected, run: this.runProgram.bind(this)}}/>
    }

    render() {
        return (
            <Container className="page">
                <Navbar dark color="info" expand="md" className="menu shadow-sm mb-4">
                    <Nav className="mr-lg-auto" navbar>
                        <NavItem className="pl-1 pr-1">
                            <NavLink tag={Link} to="/">Home</NavLink>
                        </NavItem>

                        <NavItem className="pl-1 pr-1">
                            <NavLink tag={Link} to="/getting-started/">Getting Started</NavLink>
                        </NavItem>

                        <NavItem className="pl-1 pr-1">
                            <NavLink tag={Link} to="/documentation/">Documentation</NavLink>
                        </NavItem>

                        <NavItem className="pl-1 pr-1">
                            <NavLink tag={Link}
                                     to="/principles/">Principles</NavLink>
                        </NavItem>

                        <NavItem className="pl-1 pr-1">
                            <NavLink tag={Link} to="/research/">Research</NavLink>
                        </NavItem>

                        <NavItem className="pl-1 pr-1">
                            <NavLink tag={Link} to="/faq/">FAQ</NavLink>
                        </NavItem>

                        <NavItem className="pl-1 pr-1">
                            <NavLink tag={Link} to="/contribute/">Contribute</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>

                <Route path="/" exact render={() => this.getHome()}/>
                <Route path="/getting-started/" exact component={GettingStarted}/>
                <Route path="/documentation/" exact component={Documentation}/>
                <Route path="/principles/" exact component={Principles}/>
                <Route path="/research/" exact component={Research}/>
                <Route path="/faq/" exact component={Faq}/>
                <Route path="/contribute/" exact component={Contribute}/>

                <Route path="/misc/checklist/" exact component={Checklist}/>

                <Row/>

            </Container>
        );
    }
}

export default App;
