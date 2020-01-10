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

import ReconnectingWebSocket from 'reconnecting-websocket';
import About from "./page/About";
import Blog from "./page/Blog";

const SocketAddress = 'wss://evaluator.flix.dev/ws';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            connected: false
        };

        console.log("Connecting to: " + SocketAddress);

        let options = {
            connectionTimeout: 2500
        };

        this.websocket = new ReconnectingWebSocket(SocketAddress, [], options);

        this.websocket.addEventListener("open", event => {
            console.log("Connected to: " + SocketAddress);
            this.setState({connected: true});
        });
        this.websocket.addEventListener("close", event => {
            console.log("Disconnected from: " + SocketAddress);
            console.log(event);
            this.setState({connected: false});
        });
        this.websocket.addEventListener("error", event => {
            console.log("Disconnected from: " + SocketAddress);
            console.log(event);
            this.setState({connected: false});
        });
    }

    runProgram = (src, callback) => {
        if (!this.state.connected) {
            console.log("Not connected yet");
            return;
        }

        this.websocket.onmessage = event => {
            console.log("Received reply from: " + SocketAddress);
            const data = JSON.parse(event.data);

            console.log(data);
            callback(data);
        };

        this.websocket.send(src);
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
                            <NavLink tag={Link} to="/about/">About</NavLink>
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
                            <NavLink tag={Link} to="/blog/">Blog</NavLink>
                        </NavItem>

                        <NavItem className="pl-1 pr-1">
                            <NavLink tag={Link} to="/contribute/">Contribute</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>

                <Route path="/" exact render={() => this.getHome()}/>
                <Route path="/about/" component={About}/>
                <Route path="/getting-started/" component={GettingStarted}/>
                <Route path="/documentation/" component={Documentation}/>
                <Route path="/principles/" component={Principles}/>
                <Route path="/research/" component={Research}/>
                <Route path="/faq/" component={Faq}/>
                <Route path="/blog/" component={Blog}/>
                <Route path="/contribute/" component={Contribute}/>

                <Route path="/misc/checklist/" component={Checklist}/>

                <Row/>

            </Container>
        );
    }
}

export default App;
