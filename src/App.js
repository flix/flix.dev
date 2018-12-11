import React, {Component} from 'react';
import './App.css';

import Menu from "./Menu";
import Home from "./page/Home";
import GettingStarted from "./page/GettingStarted";
import DesignPrinciples from "./page/DesignPrinciples";
import Research from "./page/Research";
import News from "./page/News";
import Features from "./page/Features";

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
        if (this.state.page === "getting-started") {
            return <GettingStarted/>;
        }
        if (this.state.page === "design-principles") {
            return <DesignPrinciples/>
        }
        if (this.state.page === "research") {
            return <Research/>
        }
        if (this.state.page === "news") {
            return <News/>
        }
        if (this.state.page === "Features") {
            return <Features/>
        }

        return <Home/>;
    }

    render() {
        return (
            <div className="container">
                <Menu notifyChangePage={this.notifyChangePage.bind(this)}/>

                {this.getPage()}
            </div>
        );
    }
}

export default App;
