import { useState } from "react";
import { GiBatMask } from "react-icons/gi";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import CONSTANTS from "../../utils/CONSTANTS.js";

import "./Sidebar.scss";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  const setActivePage = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="sidebar">
      {/* logo/name, theme toggle */}
      <div className="brand">
        <div className="dev-name">
          <GiBatMask size={30} />
          <span>{CONSTANTS.devName}</span>
        </div>
        <div className="theme-toggle" onClick={toggleMode}>
          {mode == "light" ? (
            <MdLightMode size={25} className="light-mode-icon" />
          ) : (
            <MdDarkMode size={25} className="dark-mode-icon" />
          )}
        </div>
      </div>
      <div className="devider"></div>
      {/* about me */}
      <div className="about-me">
        <h3>About me </h3>
        <p>
          I'm <span>{CONSTANTS.devName}</span>, {CONSTANTS.aboutMe}
        </p>
      </div>
      <div className="devider"></div>
      {/* sections */}
      <div className="sections">
        <div
          className={`about item ${activeSection === "about" ? "active" : ""}`}
          onClick={() => setActivePage("about")}
        >
          <span>About</span>
        </div>
        <div
          className={`projects item ${
            activeSection === "projects" ? "active" : ""
          }`}
          onClick={() => setActivePage("projects")}
        >
          <span>Projects</span>
        </div>
        <div
          className={`experience item ${
            activeSection === "experience" ? "active" : ""
          }`}
          onClick={() => setActivePage("experience")}
        >
          <span>Experience</span>
        </div>
        <div
          className={`education item ${
            activeSection === "education" ? "active" : ""
          }`}
          onClick={() => setActivePage("education")}
        >
          <span>Education</span>
        </div>
      </div>
      <div className="devider"></div>
      {/* social links */}
      <div className="social-links">
        <div className="linkedin">
          <span>LinkedIn</span>
        </div>
        <div className="github">
          <span>GitHub</span>
        </div>
        <div className="twitter">
          <span>Twitter</span>
        </div>
        <div className="instagram">
          <span>Instagram</span>
        </div>
      </div>
      <div className="devider"></div>
    </div>
  );
};
export default Sidebar;
