import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../api/api";

const Film = () => {
  const [movies, setMovies] = useState([]);
  const imgUrl = process.env.REACT_APP_BASEIMGURL;

  useEffect(() => {
    getMovieList().then((movie) => {
      setMovies(movie);
      console.log(movies);
    });
  }, []);

  const PopularMovieList = () => {
    return movies.map((movie, i) => {
      return (
        <div key={i} className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src={`${imgUrl}/${movie.poster_path}`}
              alt="Shoes"
              className="w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <p>{movie.overview}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-primary">{`⭐ ${movie.vote_average}`}</div>
              <div className="badge badge-primary">{movie.release_date}</div>
              <div className="badge badge-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {`${movie.vote_count}`}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setMovies(query.results);
    }
  };
  return (
    <div className="w-full py-10 flex justify-center">
      <div className="w-[90%] flex flex-col items-center">
        <div className="w-full mb-7">
          <p className="font-extrabold text-center text-4xl">Nobar21 Movies</p>
        </div>
        <div className="w-full flex justify-center py-7">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Movies..."
            className="lg:w-1/2 md:w-3/4 w-full input input-bordered input-primary"
            onChange={({ target }) => search(target.value)}
          />
        </div>
        <div className="w-full py-10 grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-10">
          <PopularMovieList />
        </div>
      </div>
    </div>
  );
};
export default Film;
