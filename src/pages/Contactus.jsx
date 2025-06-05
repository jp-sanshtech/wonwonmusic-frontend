import React from 'react';
import BackButton from '../components/main/BackButton.jsx';
import Line from '../components/main/Line.jsx';
import classes from '../components/css/Home.module.css';


const Contactus = () => {
  return (
    <>
    <div className={classes.links}>

      <BackButton />
   <Line
        to="/world/oneofoneluxury"
        className={classes.navLink}
        style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '1rem' }}
        >
        <p>
          To become one of our artists, work with us, hire our artists, or for any other questions, email us at <a href="mailto:support@wonwonleywonmusic.com" style={{ color: "black", textDecoration: "underline" }}>support@wonwonleywonmusic.com</a>.
        </p>
      </Line>
        </div>
    </>
  );
};

export default Contactus;
