import Head from "next/head";
import layout from "../styles/pages.module.scss";
import classes from "../styles/index.module.scss";
import { RefObject, useEffect, useRef } from "react";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const rolls: string[] = [
    "A Fullstack Developer",
    "An UI/UX Designer",
    "A Machine Learning Enthusiast",
  ];

  const rollRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rollRef.current;

    if (el) {
      const typed: Typed = new Typed(el, {
        strings: rolls,
        typeSpeed: 80,
        startDelay: 40,
        backSpeed: 50,
      });
    }
  }, [rollRef]);

  return (
    <section className={layout.Content}>
      <div className={classes.Container}>
        <div className={classes.title}>
          <h1>Arefin, Mehedi Ibtesham</h1>
          <h2 className={classes.rolls} ref={rollRef}></h2>
        </div>

        <div className={classes.social}>
          <a href="https://www.instagram.com/im_arefin/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className={classes.icon} />
          </a>

          <a href="https://www.facebook.com/Rafin.Ryan/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className={classes.icon} />
          </a>

          <a href="https://github.com/rafin007" target="_blank">
            <FontAwesomeIcon icon={faGithub} className={classes.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/mehedi-arefin-31a842139/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
