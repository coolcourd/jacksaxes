import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { Link } from "react-router-dom";

const Nb = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">🪓 Jack's Axes 🪓</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
            <NavLink><Link to="/">Home</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="/schedule">Schedule</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="/waiver">Waiver</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="/about">About</Link></NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Nb;
