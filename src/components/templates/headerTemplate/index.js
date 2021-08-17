import React, { useState } from "react";
import "./styles.css";

import DarkModeToggle from "react-dark-mode-toggle";
import Icon from "@mdi/react";
import { mdiLinkedin, mdiGithub } from "@mdi/js";
import profilePhoto from "../../../assets/images/logo.jpg";

const onClickSocialIcon = (item, data) => {
  switch (item) {
    case "LinkedIn":
      var url = data[0].linkedIn;
      break;
    case "Github":
      var url = data[0].gitHub;
      break;
    default:
      var url = data[0].linkedIn;
  }
  window.open(url);
};

const HeaderTemplate = (props) => {
  const { toggleTheme, isToggleChecked, data } = props;
  return (
    <div className="headerContainer">
      <div className="headerImage">
        <img src={profilePhoto} className="image" alt="profilePhoto" />
      </div>
      <div className="headerDetails">
        <div className="headerTitle">{data[0].name}</div>
        <div className="headerSubtitle">{data[0].designation}</div>
        <div className="socialMediaIcons">
          <Icon
            path={mdiLinkedin}
            size={1.3}
            className="socialMediaIcons"
            onClick={() => {
              onClickSocialIcon("LinkedIn", data);
            }}
          />
          <Icon
            path={mdiGithub}
            size={1.3}
            className="socialMediaIcons"
            onClick={() => {
              onClickSocialIcon("Github", data);
            }}
          />
        </div>
      </div>
      <DarkModeToggle
        onChange={toggleTheme}
        checked={isToggleChecked}
        size={35}
        speed={2}
        className="darkModeToggle"
      />
    </div>
  );
};

export default HeaderTemplate;
