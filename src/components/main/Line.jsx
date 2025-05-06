import React from "react";
import classes from "./css/Line.module.css";

const Line = ({ type, className, style, onClick, children }) => {
  const returnClassNames = (baseClass) => {
    return className ? `${baseClass} ${className}` : baseClass;
  };

  const getLineClass = () => {
    switch (type) {
      case "bottom-line":
        return returnClassNames(classes.bottomLine);
      case "top-line":
        return returnClassNames(classes.topLine);
      default:
        return returnClassNames(classes.emptyLine);
    }
  };

  return (
    <div className={getLineClass()} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Line;
