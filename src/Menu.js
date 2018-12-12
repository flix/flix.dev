import React, {Component} from 'react';

import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Menu extends Component {

    changePage(page) {
        this.props.notifyChangePage(page);
    }

    render() {
        return (
            <div className="Menu mb-5">
                <Navbar color="light" light expand="md">
                    <Nav className="mr-lg-auto" navbar>
                        <MenuButton name="Home" changePage={() => this.changePage("home")}/>

                        <MenuButton name="Getting Started" changePage={() => this.changePage("getting-started")}/>

                        <MenuButton name="Principles" changePage={() => this.changePage("design-principles")}/>

                        <MenuButton name="Research" changePage={() => this.changePage("research")}/>

                        <MenuButton name="Documentation" changePage={() => this.changePage("documentation")}/>

                        <MenuButton name="Contribute" changePage={() => this.changePage("contribute")}/>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

class MenuButton extends Component {
    render() {
        return (
            <NavItem>
                <NavLink onClick={this.props.changePage}>{this.props.name}</NavLink>
            </NavItem>
        );
    }
}

export default Menu;
