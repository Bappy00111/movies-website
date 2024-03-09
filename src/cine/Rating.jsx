import React from "react";
import star from "../assets/star.svg";

const Rating = ({ rating }) => {
  const stars = Array(rating).fill(star);
  // console.log(stars)
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} alt="star" />
      ))}
    </>
  );
};

export default Rating;
