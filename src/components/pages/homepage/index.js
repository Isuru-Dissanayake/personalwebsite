import React, { Component } from "react";
import "./styles.css";

import { HeaderTemplate, SectionTemplate } from "../../templates";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="homeContainer">
        <HeaderTemplate />
        <SectionTemplate numberOfEntries={1} title={"Education"} />
      </div>
    );
  }
}

export default HomePage;
