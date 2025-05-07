import React from "react";
import { NavLink } from "react-router-dom";
import Line from "../components/main/Line.jsx";
import classes from "../components/css/Home.module.css";

const Home = () => {
  return (
    <>
      <Line type="bottom-line">
        <NavLink to="/aboutus/" className={classes.navLink}>
          about us
        </NavLink>
      </Line>

      <Line type="bottom-line">
        <NavLink to="/artists/" className={classes.navLink}>
          talent
        </NavLink>
      </Line>

      <Line type="bottom-line">
        <a
          href="https://www.instagram.com/wonwonleywontalent"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.navLink}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          instagram
        </a>
      </Line>

      {/* <Line type="bottom-line">
        <a
          href="https://www.tiktok.com/@wonwonleywonmusic?_t=ZT-8t4cCGNhE3a&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.navLink}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          tiktok
        </a>
      </Line>

      <Line type="bottom-line">
        <a
          href="https://www.youtube.com/@wonwonleywonmusic"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.navLink}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          youtube
        </a>
      </Line> */}

      <Line type="bottom-line">
        <NavLink to="/contactus/" className={classes.navLink}>
          contact us
        </NavLink>
      </Line>

      <Line type="bottom-line">
        <a
          href="https://www.wonwonleywon.com"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.navLink}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          wonwonleywon the fashion brand
        </a>
      </Line>

      {/* Placeholder lines */}
      <Line type="bottom-line" />
      <Line type="bottom-line" />
      <Line type="bottom-line" />
      <Line type="bottom-line" />
      <Line type="bottom-line" />
      <Line type="bottom-line" />
      <Line type="bottom-line" />
    </>
  );
};

export default Home;
