import React, {Component} from 'react';
import './App.css';

import Menu from "./Menu";
import Home from "./page/Home";
import GettingStarted from "./page/GettingStarted";
import Principles from "./page/Principles";
import Contribute from "./page/Contribute";
import Research from "./page/Research";
import Documentation from "./page/Documentation";
import {Container} from "reactstrap";

const SocketAddress = 'ws://flix.aau.dk:8080';

class App extends Component {
    constructor(props) {
        super(props);

        console.log("Connecting to: " + SocketAddress);

        this.state = {
            page: null,
            websocket: new window.WebSocket(SocketAddress),
            connected: false
        };

        this.state.websocket.onopen = event => {
            console.log("Connected to: " + SocketAddress);
            this.setState({connected: true})
        }
    }

    runProgram = (src, f) => {
        this.state.websocket.onmessage = event => {
            console.log("Received reply from: " + SocketAddress);
            const data = JSON.parse(event.data);

            console.log(data);
            f(data);
        };

        if (!this.state.connected) {
            console.log("Not connected yet");
            return;
        }
        this.state.websocket.send(src);
    };

    notifyChangePage(page) {
        console.log("Changing page to: " + page);
        this.setState({"page": page});
    }

    getPage() {
        if (this.state.page === "getting-started") {
            return <GettingStarted/>;
        }
        if (this.state.page === "design-principles") {
            return <Principles/>
        }
        if (this.state.page === "research") {
            return <Research/>
        }
        if (this.state.page === "documentation") {
            return <Documentation/>
        }
        if (this.state.page === "contribute") {
            return <Contribute/>
        }

        return <Home flix={{connected: this.state.connected, run: this.runProgram.bind(this)}}/>;
    }

    render() {
        return (
            <Container className="page">
                <Menu notifyChangePage={this.notifyChangePage.bind(this)}/>

                {this.getPage()}
            </Container>
        );
    }
}

export default App;
