import PropTypes from "prop-types";

function Movie({ medium_cover_image, title, year, genres, summary, url }) {
    return(<div>
        <p style={{ marginTop: "100px" }}>{summary}</p>
        <img src={medium_cover_image}
            alt={title} />
        <h2><a
            href={url}
            target="_blank"
            rel="noopener noreferrer">
            {title}
        </a> <span style={{ fontSize: "large" }}>({year})</span></h2>
        <ul>{genres.map((key) => <li key={key}>{key}</li>)}</ul>
        <ul>{summary}</ul>
        <space></space>
    </div>
    );
    
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;