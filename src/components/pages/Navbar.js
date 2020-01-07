import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";

function Nav() {

  return (
    <Navbar
      className="blue-grey darken-3"
      brand={<li className="brand-logo app-title right"></li>}
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
