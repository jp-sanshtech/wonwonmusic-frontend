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
          We are a music record label, currently focused on female DJs based in Los Angeles. 
          A company of the 
          <a
            href="https://www.wonwonleywon.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black", textDecoration: "underline", padding: "5px" }}
          >
            wonwonleywon
          </a>
          fashion brand.
        </p>
        <p style={{ margin: 0 }}>
          We are not a normal record label. We do things different: 
          #1. All DJs are also models and content creators/influencers. 
          #2. Some artists are just learning to DJ and are at the start of their career. 
          #3. Artists are not forced to only focus on DJing as their main life goal. 
          They also model, create content, and do other things to support them to become the best version of themselves.
        </p>
      </Line>
    </div>
  );
};

export default Aboutus;
 