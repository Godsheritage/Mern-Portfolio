import "./Resume.css";
import React, { useState, useEffect } from "react";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
          {props.link && (
            <div>
              <a href={props.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript" },
    { skill: "Python" },
    { skill: "React JS" },
    { skill: "Express JS" },
    { skill: "TypeScript" },
    { skill: "Node JS" },
    { skill: "Express JS" },
    { skill: "Mongo Db" },
    { skill: "Rest API" },
    { skill: "Docker" },
    { skill: "SASS" },
    { skill: "CLOUD & AWS" },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading:
        "Technologies Used: React JS, Node JS, Express JS, Nodemailer, Bootstrap",
      link: "#",
    },
    {
      title: "Github Profile finder",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Full-Stack application that is integrated with the official Github API to enable users search for their Github profiles",
      subHeading:
        "Technologies Used:  React JS, TypeScript, Redux, Daisy UI, Tailwind CSS.",
      link: "https://github-finder-b7x80zhfb-godsheritage.vercel.app/",
    },
    {
      title: "Nasa Space project",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Full-Stack Application that allows users to Pick a habitable planet, set a date, then blast off into space with the NASA API",
      subHeading:
        "Technologies Used:  MERN Stack, TypeScript, Bootstrap, and SASS.",
      link: "https://nasa-space-application.herokuapp.com/",
    },
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Morgan State University"}
        subHeading={"Bachelor of science in Computer science"}
        // fromDate={"2014"}
        // toDate={"2018"}
      />
      <ResumeHeading
        heading={"Google Developer Student Clubs (GDSC)"}
        subHeading={"Front-End experience Coding Bootcamp."}
        // fromDate={"2019"}
        // toDate={"2020"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"Chapel Secondary school."}
        // fromDate={"2007"}
        // toDate={"2012"}
      />
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Femtech I.T Consultants"}
          subHeading={"FULL STACK MERN ENGINEER"}
          fromDate={"2020"}
          toDate={"2022"}
        />
        <div className="experience-description">
          {/* <span className="resume-description-text">
            I am currently working remotely as a full stack engineer at femtech
            IT Consultants.
          </span> */}
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            ✅Contributed to the development of 10+ Full Stack MERN
            applications, from production to deployment.
          </span>
          <br />
          <span className="resume-description-text">
            ✅Trained over 20 junior developers on internal web functions,
            including steps on how to independently make contributions to the
            codebase.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            ✅Engineered and maintained 30+ REST API writing documentation using
            Open APIs specifications
          </span>
          <br />
          <span className="resume-description-text">
            ✅Utilized AWS cloud solutions to develop and deploy
            web applications faster.
          </span>
        </div>
      </div>
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          {/* <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div> */}
        </div>
      ))}
    </div>,
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          link={projectsDetails.link}
          // fromDate={projectsDetails.duration.fromDate}
          // toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Photography"
        description="I take a lot of pictures in my spare time, mainly because to me the best thing about a picture is that it never changes, even when the people in it do"
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in Action, wrestling games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
