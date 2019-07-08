import React, { Component } from "react";
import { Link } from "react-router-dom";
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
} from "reactstrap";

class Navbarthis extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar
        color="black"
        light
        expand="md"
        className=" navbar-dark bg-primary mb-5"
      >
        <NavbarBrand href="/">
          {" "}
          <span className="navbar-brand mb-0 h1">Administrador</span>
        </NavbarBrand>

        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/suscriptores"} className="nav-link">
                Suscriptores
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Libros
              </Link>
            </li>
          </ul>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navbarthis;
