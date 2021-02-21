import React from "react";
import "./PickedSeries.css";

const PickedSeries = ({ imgHref, title, description }) => {
  return (
    <div className="test">
      <img src={imgHref} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PickedSeries;
