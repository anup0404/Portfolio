import React from "react";
import pic from "./anup.png";
import "./Profile.css";

function Profile() {
  return (
    <>
      
      <div className="profile_container">
        <div className="profile_container_left">
          <h1>
            Nice to meet you!
            <br />
            I'm <span className="name"> Anup Kumar</span>
          </h1>
          <p className="profile_info">
           
            I am a Java programmer and Front-end developer passionate about
            building accessible web apps that users love. I believe in smart
            work, work dedication and self determination. I like to be friendly
            with every person and also meeting new people and getting experience
            of interacting with them and discovering new things.
          </p>
          <br />
          <h4>
           
            <a href="#">
              <span className="left_contactme">CONTACT ME</span>
            </a>
          </h4>
        </div>
        <div className="profile_container_right">
          <img src={pic} width={250} height={280} />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Profile;
