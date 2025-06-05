import React from 'react';
import classes from "../components/css/Home.module.css";
import Line from '../components/main/Line.jsx';
import BackButton from '../components/main/BackButton.jsx';

const Aboutus = () => {
  return (
    <div className={classes.links}>
      <BackButton />
      <Line
        to="/world/oneofoneluxury"
        className={classes.navLink}
        style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '1rem' }}
      >
        <p>
          To become one of our artists, work with us, hire our artists, or for any other questions, email us at <a href="mailto:support@wonwonleywonmusic.com">support@wonwonleywonmusic.com</a>.
        </p>
      </Line>
    </div>
  );
};

export default Aboutus;
