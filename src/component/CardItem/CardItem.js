import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { delete_movie, edit_movie } from "../js/action/index";
import EditMovie from "../EditMovie/EditMovie";
import Rating from "../Rating/Rating";

 function  CardItem(props) {
  const { title, image, year, rating, id } = props.movies;
    return (
      <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{ maxHeight: "380px" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text> {year} </Card.Text>
          <Card.Text> <Rating count={rating} /> </Card.Text>
          
          <Button variant="primary">
            <EditMovie movie={props.movies} />
          </Button>
          <Button
            variant="danger"
            onClick={() => props.delete_movie(id)}
          >
            Remove
          </Button>
        </Card.Body>
      </Card>
      </div>
    );
  }


const mapDispatchToProps = dispatch => ({
  delete_movie: id => dispatch(delete_movie(id)),
  edit_movie: id => dispatch(edit_movie(id))
});

export default connect(null, mapDispatchToProps)(CardItem);
