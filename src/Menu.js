import React, {Component} from 'react';
import './Menu.css';

import {Button} from 'reactstrap';

class Menu extends Component {

    changePage(page) {
        this.props.notifyChangePage(page);
    }

    render() {
        return (
            <div className="Menu">
                <MenuButton name="Home" changePage={() => this.changePage("home")}/>

                <MenuButton name="Getting Started" changePage={() => this.changePage("getting-started")}/>

                <MenuButton name="Try Online"/>

                <MenuButton name="Getting Started"/>

                <MenuButton name="Documentation"/>

                <MenuButton name="Standard Library"/>

                <MenuButton name="GitHub"/>

                <MenuButton name="News"/>

                <MenuButton name="Research"/>

                <Button color="danger">foo</Button>
            </div>
        );
    }
}

class MenuButton extends Component {
    render() {
        return (
            <div className="Button" onClick={this.props.changePage}>
                {this.props.name}
            </div>
        );
    }


}

export default Menu;
