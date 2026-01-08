import { useEffect, useState } from "react";
import "./App.css";
import { getetMovieList, searchMovie } from "./api";
import { Introduction } from "./components/Introduction";

function App() {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getetMovieList().then((result) => {
      setPopularMovie(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovie(query.results);
    }
  };

  console.log({ popular: popularMovie });

  const FilmsPopular = () => {
    return popularMovie.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">{movie.title} </div>
          <img className="movie-image" src={`${import.meta.env.VITE_BASEIMGURL}/${movie.poster_path}`} />
          <div className="movie-date">Terbit: {movie.release_date}</div>
          <div className="movie-rate">Ratting: {movie.vote_average}</div>
        </div>
      );
    });
  };

  return (
    <div className="app">
      {/* <Introduction /> */}
      <header className="app-header">
        <h1>BECK123</h1>
        <input
          placeholder="Cari film bebas gratis"
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />

        <div className="movie-container">
          <FilmsPopular />
        </div>
      </header>
    </div>
  );
}

export default App;
