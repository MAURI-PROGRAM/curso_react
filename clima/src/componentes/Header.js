import React from "react";

const Header = ({ titulo }) => {
  return (
    <nav>
      <div className="nav-wrapper ligh-blue darken-2">
        <a href="#!" className="brand-logo">
          {titulo}
        </a>
      </div>
    </nav>
  );
};

export default Header;
