import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";

function Info() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(id);
                setMovie(json.data.movie);
                console.log(json.data.movie);
                setLoading(false);
            })
    }, [])


    return (<div>
        <h1>{loading ?
            <span>
                Loading...
            </span> :
            <span>{[movie].map((info) =>
                <MovieInfo
                    id={info.id}
                    large_cover_image={info.large_cover_image}
                    title={info.title}
                    year={info.year}
                    genres={info.genres}
                    rating={info.rating} />)}
            </span>}
        </h1>
    </div>
    );
}

export default Info;