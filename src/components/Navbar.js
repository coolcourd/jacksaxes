import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { NavLink } from "react-router-dom";

const Nb = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const activeStyle = {
    background: "blue",
  };

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/"> <img src='/assets/logo-small.png' alt='jacksaxes logo'></img> </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
            <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink to="/schedule">Schedule</NavLink>
            </NavItem>
            <NavItem>
            <NavLink to="/waiver">Waiver</NavLink>
            </NavItem>
            <NavItem>
            <NavLink to="/about">About</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className='text-light margin-right-md'>Booking Now!</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Nb;
