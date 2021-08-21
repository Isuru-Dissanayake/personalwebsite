import React from "react";
import "./styles.css";
import theamaya from "../../../assets/images/theamaya.png";

function renderDetails(data) {
  return (
    <>
      {data.map((data) => {
        return <div className="entryDetails">{data}</div>;
      })}
    </>
  );
}

function onClickSubtitleTag(url) {
  if (url) {
    window.open(url);
  }
}

function renderEachEntry(data) {
  return (
    <>
      {data.map((data, key) => {
        return (
          <div className="projectContainer">
            <div className="entryTitleContainer">
              <div className="entryTitle">{data.title}</div>
              {data.date && <div className="entryDate">{data.date}</div>}
            </div>
            {data.image ? (
              <div
                className="projectHeader"
                style={{
                  backgroundImage: `url(${data.image})`
                }}
              >
                <div
                  className="subtitleTag"
                  onClick={() => {
                    onClickSubtitleTag(data.link);
                  }}
                >
                  {data.subTitle}
                </div>
              </div>
            ) : (
              <div
                className="subtitleTag"
                onClick={() => {
                  onClickSubtitleTag(data.link);
                }}
              >
                {data.subTitle}
              </div>
            )}
            <div>{renderDetails(data.details)}</div>
          </div>
        );
      })}
    </>
  );
}

const ProjectTemplate = (props) => {
  const { title, data } = props;

  return (
    <div className="sectionContainer">
      <div className="sectionTitle">{title}</div>
      {renderEachEntry(data)}
    </div>
  );
};

export default ProjectTemplate;
