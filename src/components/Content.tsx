import { useEffect, useState } from "react";
import { movieDetails } from "../types/movie";
import MovieSection from "./MovieSection";
import axios from "axios";
import SkeletonMovieSection from "./miniComponents/SkeletonMovieSection";

type Props = {};

export default function Content({}: Props) {
  useEffect(() => {
    (async () => {
      setLoading(true);
      const movies = await getMovies();
      console.log(movies);
      setMovies(movies);
      setLoading(false);
    })();
  }, []);
  const getMovies = async (): Promise<movieDetails[]> => {
    const url = `${import.meta.env.VITE_SERVER_URL}/allmovies`;
    const response = await axios.get(url);
    return response.data.data;
  };
  const [movies, setMovies] = useState<[] | movieDetails[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  //console.log(movies)
  return (
    <div className="content-div mb-20">
      {loading ? (
        <>
          <SkeletonMovieSection />
          <SkeletonMovieSection />
          <SkeletonMovieSection />
        </>
      ) : (
        <>
          <MovieSection title="Trending" movies={movies} />
          <MovieSection title="Latest" movies={movies} />
          <MovieSection title="Top Movies this week" movies={movies} />
        </>
      )}
    </div>
  );
}
