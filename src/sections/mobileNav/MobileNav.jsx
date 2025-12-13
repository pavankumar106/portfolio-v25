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
        <div className={activeSection === "about" ? "active" : ""}>About</div>
        <div className={activeSection === "projects" ? "active" : ""}>
          Projects
        </div>
        <div className={activeSection === "experience" ? "active" : ""}>
          Experience
        </div>
        <div className={activeSection === "education" ? "active" : ""}>
          Education
        </div>
      </div>
    </nav>
  );
};
export default MobileNav;
