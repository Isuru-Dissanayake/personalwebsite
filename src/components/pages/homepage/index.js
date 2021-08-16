import React, { Component } from "react";
import "./styles.css";

import { HeaderTemplate } from "../../templates";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="homeContainer">
        <HeaderTemplate />
      </div>
    );
  }
}

export default HomePage;
