import React, { useState } from "react";
import "./styles.css";

import UseWindowDimensions from "../../../assets/utility/windowsize";

function renderCardDetails(data) {
  return (
    <>
      <div className="cardHeader">{data.status}</div>
      <div className="cardDetails">
        <div className="cardTitle">{data.title}</div>
        <div className="cardSubTitle">{data.subTitle}</div>
      </div>
    </>
  );
}

function renderAchievementsCards(data) {
  const { height, width } = UseWindowDimensions();
  if (width > 800) {
    return (
      <>
        <div className="itemsContainer">
          <div className="achievementCard">{renderCardDetails(data[0])}</div>
          <div className="achievementCard">{renderCardDetails(data[1])}</div>
          <div className="achievementCard">{renderCardDetails(data[2])}</div>
        </div>
      </>
    );
  } else if (width > 580) {
    return (
      <>
        <div className="itemsContainer">
          <div className="achievementCard">{renderCardDetails(data[0])}</div>
          <div className="achievementCard">{renderCardDetails(data[1])}</div>
        </div>
        <div className="itemsContainer">
          <div className="achievementCard">{renderCardDetails(data[2])}</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="itemsContainer">
          <div className="achievementCard">{renderCardDetails(data[0])}</div>
        </div>
        <div className="itemsContainer">
          <div className="achievementCard">{renderCardDetails(data[1])}</div>
        </div>
        <div className="itemsContainer">
          <div className="achievementCard">{renderCardDetails(data[2])}</div>
        </div>
      </>
    );
  }
}

const AchievementsTemplate = (props) => {
  const { title, data } = props;
  return (
    <div className="achievementsContainer">
      <div className="sectionTitle">{title}</div>
      {renderAchievementsCards(data)}
    </div>
  );
};

export default AchievementsTemplate;
