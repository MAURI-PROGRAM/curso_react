import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/productos">React CRUD & Routing</Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              to="/productos"
              className="nav-link"
              activeClassName="active"
            >
              Productos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/nuevo-producto"
              className="nav-link"
              activeClassName="active"
            >
              Nuevo Productos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
