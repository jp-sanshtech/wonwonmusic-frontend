import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import classes from "../css/Backbutton.module.css";
import Line from "./Line.jsx";

const BackButton = ({ url, className, children }) => {
  const navigate = useNavigate();

  const goBack = () => {
    if (url) {
      navigate(url);
    } else {
      navigate(-1);
    }
  };

  return (
    <Line type="bottom-line" className={className}>
      <button onClick={goBack} className={classes.button}>
        <IoMdArrowRoundBack />Back
      </button>
      {children}
    </Line>
  );
};

export default BackButton;
