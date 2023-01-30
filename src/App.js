import React from "react";
import Profile from "./components/Profile/Profile";
import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Contact from "./components/Contact/Contact";
import Skill from './components/Skill/Skill'
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Skill/>
      <h1 className="projecth1"><span>Projects</span></h1>
  <ProjectDetail/>
  <hr/>

      <Contact />

  <Navbar />
  
  
    </div>
  );
}

export default App;
