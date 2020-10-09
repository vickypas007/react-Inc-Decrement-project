import React, { Component } from "react";

class navbar extends Component {
  render() {
    console.log("Nevbar-render");
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="index.html">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounter}{" "}
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default navbar;
