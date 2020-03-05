import React from "react";
import { connect } from "react-redux";
import CardItem from "../CardItem/CardItem";
import { Link } from "react-router-dom";
import "./MoviesList.css";

const MovieList = ({ movies, searchInput, ratingSearch }) => {
  return (
    <div>
      <div className="homebody">
        {(ratingSearch > 0
          ? movies.filter(el => el.rating == ratingSearch)
          : searchInput
          ? movies.filter(el => el.title.toLowerCase().includes(searchInput))
          : movies
        ).map((movies, key) => (
          <div key={key}>
            <CardItem className="Cards" movies={movies} key={key} />
            <Link to={`/Description/${movies.id}`}>Movie Description </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  searchInput: state.searchInput,
  ratingSearch: state.ratingSearch
});

export default connect(mapStateToProps)(MovieList);
