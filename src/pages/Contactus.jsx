import React from "react";
import BackButton from "../components/main/BackButton.jsx";
import Line from "../components/main/Line.jsx";
import classes from "../components/css/Home.module.css";
// import Text from '../components/main/Text.jsx';

const Contactus = () => {
  return (
    <>
      <BackButton />
      <Line
        className={classes.navLink}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          flexWrap: "wrap",
        }}
      >
        To become one of our artists, work with us, hire our artists, or for any
        other questions, email us at{" "}
        <a
          href="mailto:support@wonwonleywonmusic.com"
          style={{
            color: "black",
            textDecoration: "underline",
            marginLeft: "5px",
          }}
        >
          support@wonwonleywonmusic.com
        </a>
      </Line>
    </>
  );
};

export default Contactus;
