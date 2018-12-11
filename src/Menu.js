import React, {Component} from 'react';

import {Button, ButtonGroup} from 'reactstrap';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Menu extends Component {

    changePage(page) {
        this.props.notifyChangePage(page);
    }

    render() {
        return (
            <div className="Menu mb-3">
                <Navbar color="light" light expand="md">
                    <Nav className="mr-auto" navbar>
                        <MenuButton name="Home" changePage={() => this.changePage("home")}/>

                        <MenuButton name="Getting Started" changePage={() => this.changePage("getting-started")}/>

                        <MenuButton name="Design Principles" changePage={() => this.changePage("design-principles")}/>

                        <MenuButton name="Research" changePage={() => this.changePage("research")}/>

                        <MenuButton name="Try Online"/>

                        <MenuButton name="Standard Library"/>
                    </Nav>

                    <NavbarBrand href="/">flix</NavbarBrand>
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
