import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar bg-light">
      <div className="container-fluid">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
