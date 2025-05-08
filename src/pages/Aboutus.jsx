import React from 'react';
import classes from "../../src/components/css/Home.module.css";
import Line from "../components/main/Line.jsx";
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
          we are a talent management agency representing influencers, creators, and individuals across a wide range of fields, including fashion, music, sports, television, food, art, literature, film, acting, digital media, theater, public speaking, and more. we hope our agency can support our talent to become the best version of themselves.
        </p>
        <p style={{ margin: 0 }}>
          we are a company of the{" "}
          <a
            href="https://www.wonwonleywon.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black", textDecoration: "underline" }}
          >
            wonwonleywon
          </a>
          {" "}fashion brand.
        </p>
      </Line>
    </div>
  );
};

export default Aboutus;
