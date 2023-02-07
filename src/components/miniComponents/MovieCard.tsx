import React from "react";
import { Link } from "react-router-dom";
import { movieDetails } from "../../types/movie";
type Props = { movie: movieDetails};

function MovieCard({movie}: Props) {
  return (
    <Link to={`/movies/${movie._id}`}>
    <div className="movie">
      <div>
        <p>{movie.year}</p>
      </div>

      <div>
        <img
          src={
            movie.poster !== "N/A"
              ? movie.poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.poster}
        />
      </div>

      <div>
        <span>{movie.type} </span>
        <h3>{movie.title}</h3>
      </div>
    </div>
    </Link>
    
  );
}

export default MovieCard;
