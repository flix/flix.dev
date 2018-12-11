import React, {Component} from 'react';
import './App.css';
import Menu from "./Menu";
import Home from "./Home";
import GettingStarted from "./GettingStarted";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {page: null}
    }

    notifyChangePage(page) {
        console.log("Changing page to: " + page);
        this.setState({"page": page});
    }

    getPage() {
        if (this.state.page === "home") {
            return <Home/>;
        }
        if (this.state.page === "getting-started") {
            return <GettingStarted/>;
        }

        return <div/>
    }

    render() {
        return (
            <div className="App">
                <Menu notifyChangePage={this.notifyChangePage.bind(this)}/>
                <h1>Flix Programming Language</h1>

                {this.getPage()}

            </div>
        );
    }
}

export default App;
