import React from "react";
import "./dogCard.css";

const DogCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt="dog-pic" src={props.image} />
    </div>
    <div className="content">
      <button className="button" id="thumbs-down" data-value="nah" onClick={props.handleBtnClick}>👎 </button>
      <button className="button" id="thumbs-up" data-value="like" onClick={props.handleBtnClick}>👍</button>
    </div>
    
  </div>
);

export default DogCard;