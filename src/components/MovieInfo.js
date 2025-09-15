
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function MovieInfo({ id, genres, title, year, rating, large_cover_image }) {
    return (
        <div>
            <img src={large_cover_image} alt={title} />
            <h2>
                <Link to={`/`}>{title}</Link>
            </h2>
            <ul>{genres.map((key) => <li key={key}>{key}</li>)}</ul>
        </div>
    );
}

export default MovieInfo;