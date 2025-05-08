import React from 'react';
import { Link } from 'react-router-dom';
import classes from "../../components/css/Head.module.css";
import logo from "../../assets/Logo.png"; // Adjust the path as necessary

const Head = () => {
  return (
    <div className={classes.head}>
      <Link to="/">
        <img 
          src={logo} 
          style={{ width: '157px' , height: 'auto' , marginLeft:"2px" }} // Adjust the size as necessary
          alt="Logo" 
          className={classes.logo}
        />
      </Link>
      
    </div>
  );
};

export default Head;
