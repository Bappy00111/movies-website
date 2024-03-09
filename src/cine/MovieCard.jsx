import React, { useState } from "react";
import { getImgUrl } from "../utlis/sine-utlis";
import Rating from "./Rating";
import MovieDetelsModal from "./MovieDetelsModal";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [seletedMovie, setSeltedMovie] = useState(null);

  const handleCloseModal = () => {
    setSeltedMovie(false);
    setShowModal(false);
  };

  const handleMovieSelection = (movie) =>{
    setSeltedMovie(movie);
    setShowModal(true)
  }

  return (
    <>
      {showModal && (
        <MovieDetelsModal
          movie={seletedMovie}
          onClose={handleCloseModal}
        ></MovieDetelsModal>
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={()=>handleMovieSelection(movie)}>
        <img
          className="w-full object-cover"
          src={getImgUrl(movie.cover)}
          alt=""
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating rating={movie.rating}></Rating>
          </div>

          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
