import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year")
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
                <Movie
                    key={movie.id}
                    id={movie.id}
                    medium_cover_image={movie.medium_cover_image} alt={movie.title}
                    title={movie.title}
                    year={movie.year}
                    genres={movie.genres}
                    summary={movie.summary}
                    url={movie.url} />)}
            </span>}
        </h1>
    </div>
    );
}

export default Home;