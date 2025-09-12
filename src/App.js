import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (<div>
    <h1>{loading ?
      <span>
        Loading...
      </span> :
      <span>{movies.map((movie) =>
        <div key={movie.id}>
          <img src={movie.medium_cover_image}
            alt={movie.title} />
          <h2><a
            href={movie.url}
            target="_blank"
            rel="noopener noreferrer">
              {movie.title}
            </a> <span style={{ fontSize: "large" }}>({movie.year})</span></h2>
          <ul>{movie.genres.map((key) => <li key={key}>{key}</li>)}</ul>
          <ul>{movie.summary}</ul>
        </div>)}
      </span>}
    </h1>
  </div>
  );
}

export default App;