import React from "react";

import "./Project.css";

function Project(props) {
  return (
  
      <div className="project_container">
        <div className="images_of_project">{props.image}</div>
        <div className="project_name">
          <h4>{props.name}</h4>
        </div>
        <div className="text_tag">
          <h5>{props.textTag}</h5>
        </div>
       
      </div>

     
      
    
  );
}

export default Project;
