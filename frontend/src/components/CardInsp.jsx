/* eslint-disable react/prop-types */
import React from "react";

export default function CardInsp({
  imgSrc,
  imgAlt,
  description,
  buttonText,
  link,
}) {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      <div className="card-des">
        {description && <p className="card-description">{description}</p>}
        {buttonText && link && (
          <a href={/tryfreego/} className="card-btn">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}
