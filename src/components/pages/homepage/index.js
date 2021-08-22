import React, { Component } from "react";
import "./styles.css";

import {
  HeaderTemplate,
  SectionTemplate,
  SkillsTemplate,
  ProjectTemplate,
  AchievementsTemplate
} from "../../templates";
import { educationData } from "../../../assets/data/educationData";
import { coursesData } from "../../../assets/data/coursesData";
import { skillsData } from "../../../assets/data/skillsData";
import { experienceData } from "../../../assets/data/experienceData";
import { personalData } from "../../../assets/data/personalData";
import { projectsData } from "../../../assets/data/projectsData";

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
          data={personalData}
        />
        <SectionTemplate
          isEducationSection={true}
          title={"Education"}
          data={educationData}
          coursesData={coursesData}
        />
        <SkillsTemplate data={skillsData} />
        <SectionTemplate
          isEducationSection={false}
          title={"Experience"}
          data={experienceData}
        />
        <ProjectTemplate
          isEducationSection={false}
          title={"Projects"}
          data={projectsData}
        />
        <AchievementsTemplate title={"Achievements"} />
      </div>
    );
  }
}

export default HomePage;
