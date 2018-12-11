import React, {Component} from 'react';

import {Button, ButtonGroup} from 'reactstrap';

class Menu extends Component {

    changePage(page) {
        this.props.notifyChangePage(page);
    }

    render() {
        return (
            <div className="Menu">
                <ButtonGroup>
                    <MenuButton name="Home" changePage={() => this.changePage("home")}/>

                    <MenuButton name="Getting Started" changePage={() => this.changePage("getting-started")}/>

                    <MenuButton name="Design Principles" changePage={() => this.changePage("design-principles")}/>

                    <MenuButton name="Research" changePage={() => this.changePage("research")}/>

                    <MenuButton name="Try Online"/>

                    <MenuButton name="Standard Library"/>
                </ButtonGroup>
            </div>
        );
    }
}

class MenuButton extends Component {
    render() {
        return (
            <Button color="primary" onClick={this.props.changePage}>
                {this.props.name}
            </Button>
        );
    }
}

export default Menu;
