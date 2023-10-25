import React, { useEffect } from "react";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

import "./AboutMe.css";

const AboutMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "As a Global Hackathon winner and full-stack developer, I have a passion for creating innovative solutions to complex problems. With a strong background in computer science, I am skilled in a variety of programming languages and technologies, including Swift, Python, JavaScript, TypeScript, and React. I have gained knowledge in various areas of computer science, including algorithm design, data structures, and software engineering. With my skills and experience, I am looking for software engineering internship opportunities, and the chance to work on challenging projects and to continue learning and growing as a full stack developer.",
    highlights: {
      bullets: [
        "Ex-Apple Software Engineering intern",
        "Full-Stack Developer",
        "Mobile Developer",
        "Front-End Developer",
        "AWS and Cloud Operations",
      ],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a
                href="Godsheritage's Resume.pdf"
                download="Godsheritage's Resume.pdf"
              >
                <button className="btn highlighted-btn"> Get Resume </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
