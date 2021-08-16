import React, { Component } from "react";
import "./styles.css";

import { HeaderTemplate, SectionTemplate } from "../../templates";
import { educationData } from "../../../assets/data/educationData";
import { coursesData } from "../../../assets/data/coursesData";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
  }

  setThemeOnLoad = () => {
    if (localStorage.getItem("theme") === "dark-theme") {
      this.setTheme("dark-theme");
    } else {
      this.setTheme("light-theme");
    }
  };

  toggleTheme = () => {
    console.log(1);
    if (localStorage.getItem("theme") === "dark-theme") {
      this.setTheme("light-theme");
    } else {
      this.setTheme("dark-theme");
    }
  };

  componentDidMount() {
    this.setThemeOnLoad();
  }

  render() {
    return (
      <div className="homeContainer">
        <HeaderTemplate toggleTheme={this.toggleTheme} />
        <SectionTemplate
          isEducationSection={true}
          title={"Education"}
          data={educationData}
          coursesData={coursesData}
        />
      </div>
    );
  }
}

export default HomePage;
