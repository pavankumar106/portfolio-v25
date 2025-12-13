import { FaCode } from "react-icons/fa";

import "./MobileNav.scss";

const MobileNav = ({ activeSection, setActiveSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      default:
        return <About />;
    }
  };
  return (
    <nav className="mobile-nav">
      <div className="dev-name">
        <FaCode size={25} />
        <span>Pavan.dev</span>
      </div>
      <div className="nav-links">
        <div
          className={activeSection === "about" ? "active" : ""}
          onClick={() => setActiveSection("about")}
        >
          About
        </div>
        <div
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => setActiveSection("projects")}
        >
          Projects
        </div>
        <div
          className={activeSection === "experience" ? "active" : ""}
          onClick={() => setActiveSection("experience")}
        >
          Experience
        </div>
        <div
          className={activeSection === "education" ? "active" : ""}
          onClick={() => setActiveSection("education")}
        >
          Education
        </div>
      </div>
    </nav>
  );
};
export default MobileNav;
