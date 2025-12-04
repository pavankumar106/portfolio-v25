import { lazy, Suspense, useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Loader from "../../components/loader/Loader";

import "./MainView.scss";
import MobileNav from "../mobileNav/MobileNav";

const About = lazy(() => import("../about/About"));
const Projects = lazy(() => import("../projects/Projects"));
const Experience = lazy(() => import("../experience/Experience"));
const Education = lazy(() => import("../Education/Education"));

const MainView = () => {
  const [activeSection, setActiveSection] = useState("about");

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
    <>
      <MobileNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="main-view">
        {/* side bar */}
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        {/* content view */}
        <div className="content">
          <Suspense fallback={<Loader />}>{renderSection()}</Suspense>
        </div>
      </div>
    </>
  );
};
export default MainView;
