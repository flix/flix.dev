import './App.css';

import Home from "./page/Home";
import GetStarted from "./page/GetStarted";
import VSCode from "./page/VSCode";
import Documentation from "./page/Documentation";
import Principles from "./page/Principles";
import Contribute from "./page/Contribute";
import Faq from "./page/Faq";
import { Container, Navbar, Nav, NavItem, NavLink, Row } from 'reactstrap';
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

import Blog from "./page/Blog";
import Internships from "./page/Internships";

function App() {
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

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/get-started/" element={<GetStarted />} />
                <Route path="/vscode/" element={<VSCode />} />
                <Route path="/principles/" element={<Principles />} />
                <Route path="/documentation/" element={<Documentation />} />
                <Route path="/faq/" element={<Faq />} />
                <Route path="/blog/" element={<Blog />} />
                <Route path="/contribute/" element={<Contribute />} />
                <Route path="/internships/" element={<Internships />} />
            </Routes>

            <Row />

        </Container>
    );
}

export default App;
