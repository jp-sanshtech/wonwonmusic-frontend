import React from 'react';
import classes from "../components/css/Home.module.css";
import Line from '../components/main/Line.jsx';
import BackButton from '../components/main/BackButton.jsx';

const Aboutus = () => {
  return (
    // <div className={classes.links}>
    <>
      <BackButton />
      <Line
         className={classes.navLink}
         style={{
           display: "flex",
           alignItems: "center",
           padding: "1rem",
           flexWrap: "wrap",
          }}  >
  

          We are a music record label, currently focused on female DJs. 
          We are not a normal record label. We do things different: 
          #1. All DJs are also models and content creators/influencers. 
          #2. Some artists are just learning to DJ and are at the start of their career. 
          #3. Artists are not forced to only focus on DJing as their main life goal. 
          They also model, create content, and do other things to support them to become the best version of themselves.
      
      
     <p style={{ marginLeft: "-7px" }}>

          We are a company of the
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
    
      </Line>
            </>
    // </div>
  );
};

export default Aboutus;
