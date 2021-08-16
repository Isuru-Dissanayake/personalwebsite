import React from "react";
import "./styles.css";

function renderComponent(numberOfEntries, data) {
  const list = [];

  for (var i = 0; i < numberOfEntries; i++) {
    list.push(
      <div className="entryContainer">
        <div className="entryTitleContainer">
          <div className="entryTitle">University of Moratuwa</div>
          <div className="entryDate">September 2017 - April 2022</div>
        </div>
        <div className="entrySubtitle">
          B.Sc. Engineering (Electronics and Telecommunications)
        </div>
        <div className="entryDetails">Semester 6 Undergraduate</div>
      </div>
    );
  }

  return <div>{list}</div>;
}

const SectionTemplate = (props) => {
  const { numberOfEntries, title, data } = props;

  return (
    <div className="sectionContainer">
      <div className="sectionTitle">{title}</div>
      {renderComponent(numberOfEntries, data)}
    </div>
  );
};

export default SectionTemplate;
