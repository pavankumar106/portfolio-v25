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
        <div className="">About</div>
        <div className="">Projects</div>
        <div className="">Experience</div>
        <div className="">Education</div>
      </div>
    </nav>
  );
};
export default MobileNav;
