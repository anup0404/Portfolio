import React from "react";
import Project from "../Project/Project";
import pic1 from "./images/expenses.jpeg";
import pic2 from "./images/myntracolon.jpeg";
import pic3 from "./images/placementpic.jpeg";
import pic4 from "./images/digital1.png";
import "./ProjectDetail.css";
function ProjectDetail(props) {
  let project = [
    {
      img: <img src={pic1} />,
      name: "Daily Expenses",
      textTag: "HTML || CSS || REACT JS",
    },
    {
      img: <img src={pic2} />,
      name: "Myntra (e-commerce)",
      textTag: "HTML || CSS ",
    },
    {
      img: <img src={pic3} />,
      name: "Placement Portal page",
      textTag: "HTML || CSS || BOOTSTRAP || JS",
    },
    {
      img: <img src={pic4} />,
      name: "Digital Clock",
      textTag: "HTML || CSS || JS",
    },
  ];
  return (
    <div className="projectDetail_container">
      <Project
        image={project[0].img}
        name={project[0].name}
        textTag={project[0].textTag}
      />
      <Project
        image={project[1].img}
        name={project[1].name}
        textTag={project[1].textTag}
      />
      <Project
        image={project[2].img}
        name={project[2].name}
        textTag={project[2].textTag}
      />
      <Project
        image={project[3].img}
        name={project[3].name}
        textTag={project[3].textTag}
      />
    </div>
  );
}

export default ProjectDetail;
