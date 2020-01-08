import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import './style.css';

function Nav() {

  return (
    <Navbar
      className="blue-grey darken-1 nav-wrapper"
      brand={<li className="brand-logo app-title left"><img src='./images/intermountainmasters.png' style={{ width: "400px" }} alt="logo"/></li>}
      fixed
      alignLinks="right"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >

      <NavItem href="/">Home</NavItem>
      <NavItem href="/schedule">Schedule</NavItem>
      <NavItem href="/results">Results</NavItem>
      <NavItem href="/standings">Standings</NavItem>
      <NavItem href="/contact">Contact</NavItem>

    </Navbar>

  );
}

export default Nav;
