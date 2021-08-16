import React, { useState } from "react";
import "./styles.css";

import Icon from "@mdi/react";
import { mdiLinkedin, mdiGithub } from "@mdi/js";
import profilePhoto from "../../../assets/images/logo.jpg";

const onClickSocialIcon = (item) => {
  switch (item) {
    case "LinkedIn":
      var url = "https://www.linkedin.com/in/isurudissanayakepage/";
      break;
    case "Github":
      var url = "https://github.com/Isuru-Dissanayake";
      break;
    default:
      var url = "https://www.linkedin.com/in/isurudissanayakepage/";
  }
  window.open(url);
};

const HeaderTemplate = (props) => {
  const {} = props;
  return (
    <div className="headerContainer">
      <div className="headerImage">
        <img src={profilePhoto} className="image" alt="profilePhoto" />
      </div>
      <div className="headerDetails">
        <div className="headerTitle">Isuru Dissanayake</div>
        <div className="headerSubtitle">Software Developer</div>
        <div className="socialMediaIcons">
          <Icon
            path={mdiLinkedin}
            size={1.3}
            className="socialMediaIcons"
            onClick={() => {
              onClickSocialIcon("LinkedIn");
            }}
          />
          <Icon
            path={mdiGithub}
            size={1.3}
            className="socialMediaIcons"
            onClick={() => {
              onClickSocialIcon("Github");
            }}
          />
        </div>
      </div>
      <div className="headerToggle"></div>
    </div>
  );
};

export default HeaderTemplate;
