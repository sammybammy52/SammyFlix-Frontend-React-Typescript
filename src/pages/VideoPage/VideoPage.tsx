import { useState, useEffect } from "react";
import { useParams, Params } from "react-router-dom";
import axios from "axios";
import { movieDetails } from "../../types/movie";
import MovieSection from "../../components/MovieSection";
import { FilmIcon } from "@heroicons/react/24/outline";
import MovieCard from "../../components/miniComponents/MovieCard";
type Props = {};

function VideoPage({}: Props) {
  const { id }: Readonly<Params<string>> = useParams();
  const [movie, setMovie] = useState<movieDetails>({
    _id: "",
    title: "",
    year: 0,
    type: "",
    poster: "",
    link: "",
  });

  const [recommend, setRecommend] = useState<[] | movieDetails[]>([]);

  useEffect(() => {
    (async () => {
      const singleMovie = await getMovie();
      console.log(singleMovie);
      setMovie(singleMovie);
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      const recommend = await getRecommend();
      console.log(recommend);
      setRecommend(recommend);
    })();
  }, [id]);

  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  }, [id])
  
  const getMovie = async (): Promise<movieDetails> => {
    const url = `${import.meta.env.VITE_SERVER_URL}/movie/${id}`;
    const response = await axios.get(url);
    return response.data.data;
  };

  const getRecommend = async (): Promise<movieDetails[]> => {
    const url = `${import.meta.env.VITE_SERVER_URL}/allmovies`;
    const response = await axios.get(url);
    return response.data.data;
  };

  

  return (
    <div className="text-white">
      <div className="movie-container  pt-[150px] px-[80px] mb-[48px]">
        <h1 className="text-4xl mb-[20px] text-purple-800">
          {movie.title}, {movie.year}
        </h1>
        
        <iframe
          src={movie.link}
          className="w-full h-screen border-[1px] border-gray-800 rounded-[4px]"
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className="movie-details px-[80px] mb-[48px]">
        <div className="flex gap-2">
          <div>
            <MovieCard movie={movie} />
          </div>
          <div>
            <h1 className="text-4xl pt-6 mb-8 text-purple-800">{movie.title}</h1>
            <div className=" flex gap-[5px] bg-gray-200 px-4 py-1 text-black w-[100px] mb-[20px] border-[2px]  rounded">
              {movie.type}
              <div className="pt-1">
                <FilmIcon className="h-4 w-4" />
              </div>
            </div>

            <p className="mb-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut molestiae libero, impedit qui corrupti amet voluptatibus dolores quis dolorum culpa ea fuga veritatis adipisci cupiditate maiores eveniet incidunt dignissimos! Mollitia. Aut molestiae libero, impedit qui corrupti amet voluptatibus dolores quis dolorum culpa ea fuga veritatis adipisci cupiditate maiores eveniet incidunt dignissimos! Mollitia</p>
            <p>Released:{movie.year}</p>
          </div>
        </div>
      </div>
      <div className="mb-20 px-[80px]">
        <MovieSection title="You may also like" movies={recommend} />
      </div>
    </div>
  );
}

export default VideoPage;
