import { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

import Home from "./page/Home";
import GetStarted from "./page/GetStarted";
import VSCode from "./page/VSCode";
import Documentation from "./page/Documentation";
import Principles from "./page/Principles";
import Contribute from "./page/Contribute";
import Faq from "./page/Faq";
import { Container, Navbar, Nav, NavItem, NavLink, Row } from 'reactstrap';
import { Route } from "react-router";
import { Link } from "react-router-dom";

import ReconnectingWebSocket from 'reconnecting-websocket';
import Blog from "./page/Blog";
import Internships from "./page/Internships";

const SocketAddress = 'wss://evaluator.flix.dev/ws';

function App() {
    const [connected, setConnected] = useState(false);
    const websocketRef = useRef(null);

    useEffect(() => {
        console.log("Connecting to: " + SocketAddress);

        let options = {
            connectionTimeout: 2500
        };

        const ws = new ReconnectingWebSocket(SocketAddress, [], options);

        ws.addEventListener("open", () => {
            console.log("Connected to: " + SocketAddress);
            setConnected(true);
        });
        ws.addEventListener("close", event => {
            console.log("Disconnected from: " + SocketAddress);
            console.log(event);
            setConnected(false);
        });
        ws.addEventListener("error", event => {
            console.log("Disconnected from: " + SocketAddress);
            console.log(event);
            setConnected(false);
        });

        websocketRef.current = ws;

        return () => {
            ws.close();
        };
    }, []);

    const runProgram = useCallback((src, callback) => {
        if (!connected) {
            console.log("Not connected yet");
            return;
        }

        websocketRef.current.onmessage = event => {
            console.log("Received reply from: " + SocketAddress);
            const data = JSON.parse(event.data);

            console.log(data);
            callback(data);
        };

        websocketRef.current.send(JSON.stringify({ src }));
    }, [connected]);

    return (
        <Container className="page">
            <Navbar dark color="info" expand="md" className="menu shadow-sm mb-4">
                <Nav className="mr-lg-auto" navbar>
                    <NavItem className="pl-1 pr-1">
                        <NavLink tag={Link} to="/">Home</NavLink>
                    </NavItem>

                    <NavItem className="pl-1 pr-1">
                        <NavLink tag={Link} to="/get-started/">Get Started</NavLink>
                    </NavItem>

                    <NavItem className="pl-1 pr-1">
                        <NavLink tag={Link} to="/vscode/">VSCode</NavLink>
                    </NavItem>

                    <NavItem className="pl-1 pr-1">
                        <NavLink tag={Link}
                                 to="/principles/">Principles</NavLink>
                    </NavItem>

                    <NavItem className="pl-1 pr-1">
                        <NavLink tag={Link} to="/documentation/">Documentation</NavLink>
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

                    <NavItem className="pl-1 pr-1">
                        <NavLink tag={Link} to="/internships/">Internships</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

            <Route path="/" exact render={() => <Home flix={{ connected, run: runProgram }} />} />
            <Route path="/get-started/" component={GetStarted} />
            <Route path="/vscode/" component={VSCode} />
            <Route path="/principles/" component={Principles} />
            <Route path="/documentation/" component={Documentation} />
            <Route path="/faq/" component={Faq} />
            <Route path="/blog/" component={Blog} />
            <Route path="/contribute/" component={Contribute} />
            <Route path="/internships/" component={Internships} />

            <Row />

        </Container>
    );
}

export default App;
