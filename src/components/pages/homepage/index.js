import React, { Component } from "react";
import "./styles.css";

import { HeaderTemplate, SectionTemplate } from "../../templates";
import { educationData } from "../../../assets/data/educationData";
import { coursesData } from "../../../assets/data/coursesData";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleChecked: false };
  }

  setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
  }

  setThemeOnLoad = () => {
    if (localStorage.getItem("theme") === "dark-theme") {
      this.setState({ isToggleChecked: true });
      this.setTheme("dark-theme");
    } else {
      this.setState({ isToggleChecked: false });
      this.setTheme("light-theme");
    }
  };

  toggleTheme = () => {
    if (localStorage.getItem("theme") === "dark-theme") {
      this.setState({ isToggleChecked: false });
      this.setTheme("light-theme");
    } else {
      this.setState({ isToggleChecked: true });
      this.setTheme("dark-theme");
    }
  };

  componentDidMount() {
    this.setThemeOnLoad();
  }

  render() {
    const { isToggleChecked } = this.state;
    return (
      <div className="homeContainer">
        <HeaderTemplate
          toggleTheme={this.toggleTheme}
          isToggleChecked={isToggleChecked}
        />
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
