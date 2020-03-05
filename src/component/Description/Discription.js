import React from "react";
import { connect } from "react-redux";
import './Description.css'

function Discription(props) {
  return (
    <div>
      {props.movies
      //e
        .filter(el => el.id == props.match.params.id)
        .map(el => (
          <div>
          <p className="description"> {el.description}</p>
          </div>
        ))}
    </div>
  );
}
const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(Discription);
