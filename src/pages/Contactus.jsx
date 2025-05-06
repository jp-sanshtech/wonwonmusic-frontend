import React from 'react';
import BackButton from '../components/main/BackButton.jsx';
import Line from '../components/main/Line.jsx';
import classes from '../components/css/Home.module.css';


const Contactus = () => {
  return (
    <>
      <BackButton />
      <Line type="bottom-lin">
        <div className={classes.contactContainer}>
          <p 
            className={classes.contactText} 
            style={{ marginTop: "28px", lineHeight: "1.47", padding: "0 1px" }} // Adjust lineHeight and padding for better spacing
          >
           to become one of our talents, work with us, hire our talents, or for any other questions, email us at{' '}
            <a 
              href="mailto:support@wonwonleywontalent.com" 
              className={classes.emailLink} 
              style={{ color: "black", marginTop: "25px" }}
            >
              support@wonwonleywontalent.com
            </a>
          </p>
        </div>
      </Line>
    </>
  );
};

export default Contactus;
