import React from "react";
import "./styles.css";

function renderEachEntry(data) {
  return (
    <>
      {data.map((data, key) => {
        return (
          <div className="entryContainer">
            <div className="entryTitleContainer">
              <div className="entryTitle">{data.title}</div>
              <div className="entryDate">{data.date}</div>
            </div>
            <div className="entrySubtitle">{data.subTitle}</div>
            <div className="entryDetails">{data.details}</div>
          </div>
        );
      })}
    </>
  );
}

function renderCoursesData(data) {
  return (
    <>
      {data.map((data, key) => {
        return <div className="entrySubtitle">{data}</div>;
      })}
    </>
  );
}

const SectionTemplate = (props) => {
  const { isEducationSection, title, data, coursesData } = props;

  return (
    <div className="sectionContainer">
      <div className="sectionTitle">{title}</div>
      {renderEachEntry(data)}
      {isEducationSection && (
        <div className="coursesContainer">
          <div className="entryTitle">Certificates and Courses</div>
          {renderCoursesData(coursesData)}
        </div>
      )}
    </div>
  );
};

export default SectionTemplate;
