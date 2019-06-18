import React from "react";

const Header = ({ titulo }) => {
  return (
    <nav className="nav-wraper light-blue darcken-3">
      <a className="brand-logo center">{titulo}</a>
    </nav>
  );
};

export default Header;
