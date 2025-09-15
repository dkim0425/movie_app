import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, medium_cover_image, title, genres, summary}) {
    return (
        <div>
            <p style={{ marginTop: "100px" }}>{summary}</p>
            <img src={medium_cover_image}
                alt={title} />
            <h2>
                <Link to={`/movies/${id}`}>{title}</Link>
            </h2>
            <ul>{genres.map((key) => <li key={key}>{key}</li>)}</ul>
            <ul>{summary}</ul>
        </div>
    );

}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;