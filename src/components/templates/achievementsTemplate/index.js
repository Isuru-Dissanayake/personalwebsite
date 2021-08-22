import React, { useState } from "react";
import "./styles.css";

function renderAchievements(data) {
  return (
    <div className="itemsContainer">
      <div className="achievementCard"></div>
      <div className="achievementCard"></div>
      <div className="achievementCard"></div>
    </div>
  );
}

const AchievementsTemplate = (props) => {
  const { title, data } = props;
  return (
    <div className="achievementsContainer">
      <div className="sectionTitle">{title}</div>
      {renderAchievements(data)}
    </div>
  );
};

export default AchievementsTemplate;
