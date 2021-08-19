import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
  // This will allow for custom wrappers/ allow classes to be passed to children of a div //
};

export default Card;
