import { MdMailOutline } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { FaHtml5, FaGithubSquare } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { TbBrandPython, TbBrandRedux } from "react-icons/tb";

import "./About.scss";

const skills = [
  { name: "React", icon: <RiReactjsLine className="icon" /> },
  {
    name: "Redux",
    icon: <TbBrandRedux className="icon" />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="icon" />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="icon" />,
  },
  {
    name: "CSS3",
    icon: <IoLogoCss3 className="icon" />,
  },
  {
    name: "SQL",
    icon: <PiFileSql className="icon" />,
  },
  {
    name: "GIT/GitHub",
    icon: <FaGithubSquare className="icon" />,
  },
  {
    name: "Python",
    icon: <TbBrandPython className="icon" />,
  },
];

const About = () => {
  return (
    <section className="about-section">
      <div className="info">
        <h1 className="heading">The “Honest Engineer”</h1>
        <p>
          Hey there, 👋 I'm Pavan — the guy who swears he writes clean code…
          until future-me proves otherwise. I build things, break things, Google
          things, and sometimes even deploy things on purpose.
          <br />
          <br />
          If it works, it’s a feature. <br />
          If it doesn’t, it’s still a feature… just undocumented. 🐛🤷‍♂️
        </p>
      </div>
      {/* Skills  */}
      <div className="skills">
        <h2 className="about-item">Skills & Technologies</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="contact">
        <h2>Get in Touch</h2>
        <p>
          Got a question, idea, or meme? Drop me an email or ping me on my
          socials — I promise I reply faster than most APIs.
        </p>
        <ul className="contact-list">
          <li className="">
            <MdMailOutline />{" "}
            <a href="mailto:pavankumar494748@gmail.com">
              Email: pavankumar494748@gmail.com
            </a>
          </li>
          <li>
            <IoLogoLinkedin />
            <a href="https://www.linkedin.com/in/pavankumar-guttedar-1027631b2/">
              Connect with me on LinkedIn
            </a>
          </li>
          <li>
            <FaSquareGithub />
            <a href="https://www.linkedin.com/in/pavankumar-guttedar-1027631b2/">
              Check my GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
