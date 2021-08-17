import React from "react";
import "./styles.css";

function renderSkills(data, id) {
  return (
    <div id={"skillsRow" + id} className="skillsRow">
      <div className="skillElement">{data[0]}</div>
      <div className="skillElement">{data[1]}</div>
      <div className="skillElement">{data[2]}</div>
    </div>
  );
}

const SkillsTemplate = (props) => {
  const { data } = props;
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    if (width < 600) {
      document.getElementById("skillsRow1").style.flexDirection = "column";
      document.getElementById("skillsRow2").style.flexDirection = "column";
      document.getElementById("skillsRow3").style.flexDirection = "column";
    } else {
      document.getElementById("skillsRow1").style.flexDirection = "row";
      document.getElementById("skillsRow2").style.flexDirection = "row";
      document.getElementById("skillsRow3").style.flexDirection = "row";
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return (
    <div className="skillsContainer">
      <div className="sectionTitle">Technical Skills</div>
      <div className="itemContainer">
        {renderSkills([data[0], data[1], data[2]], 1)}
        {renderSkills([data[3], data[4], data[5]], 2)}
        {renderSkills([data[6], data[7], data[8]], 3)}
      </div>
    </div>
  );
};

export default SkillsTemplate;
