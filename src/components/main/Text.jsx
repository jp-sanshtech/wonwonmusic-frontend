import React from "react";
import classes from "../css/Head.module.css";

const Text = ({ className, style, onClick, children }) => {
  return (
    <div
      className={`${classes.text} ${className || ""}`}
      style={{ ...style }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Text;
