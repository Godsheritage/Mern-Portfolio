import React, { useEffect, useState, useRef } from "react";

import "./ContactMe.css";
import Typical from "react-typical";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import imgBack from "../../../src/images/im4.jpg";
import load1 from "../../../src/images/load2.gif";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import emailjs from "@emailjs/browser";

const ContactMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  // export const ContactUs = () => {
  //   const form = useRef();

  //   const sendEmail = (e) => {

  //   };

  //   return (
  //     <form ref={form} onSubmit={sendEmail}>
  //       <label>Name</label>
  //       <input type="text" name="user_name" />
  //       <label>Email</label>
  //       <input type="email" name="user_email" />
  //       <label>Message</label>
  //       <textarea name="message" />
  //       <input type="submit" value="Send" />
  //     </form>
  //   );
  // };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  // handle inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const formSubmit = async (e) => {
    e.preventDefault();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setBanner("Error, Check the required fields and try again");
      toast.error("Error, Check the required fields and try again");
      setBool(false);
    } else {
      emailjs
        .sendForm(
          "service_kkvp73u",
          "template_f77a84k",
          form.current,
          "AcdUpOs6TrJL2aXTH"
        )
        .then(
          (result) => {
            setBanner("Message sent successfully");
            toast.success("Message sent successfully");
            setBool(false);

            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading
        subHeading={"Let's Keep In Touch"}
        title={props.screenName ? props.screenName : ""}
      />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {" "}
            <Typical loop={Infinity} steps={["Get in Touch 🤝", 1000]} />
          </h2>
          <a href="https://facebook.com">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="https://twitter.com/kyng_Herit">
            <i className="fa fa-twitter" />
          </a>
          <a href="https://www.linkedin.com/in/godsheritage/">
            <i className="fa fa-linkedin" />
          </a>
          <a href="https://github.com/Godsheritage">
            <i className="fa fa-github" />
          </a>
        </div>

        <div className="back-form">
          <div className="img-back">
            <h4>Send your message</h4>
            <img src={imgBack} alt="" />
          </div>
          <form ref={form} onSubmit={formSubmit}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              onChange={handleMessage}
              value={message}
              name="message"
            />

            <div className="send-btn">
              <button type="submit">
                Send <i className="fa fa-paper-plane"></i>
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="load1" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
