import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { edit_movie } from "../js/action/index";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    textAlign: "center"
  }
};

class EditMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      id: "",
      title: "",
      year: "",
      image: "",
      rating: ""
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true, EditMovie: this.props.movies });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    if (this.props.movie)
      this.setState({
        id: this.props.movie.id,
        title: this.props.movie.title,
        image: this.props.movie.image,
        rating: this.props.movie.rating,
        year: this.props.movie.year
      });
  }
  handle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitEdit = e => {
    e.preventDefault();
    const { id, title, year, rating, image } = this.state;
    if (this.props.movie) {
      this.props.edit_movie({
        id,
        title,
        year,
        rating,
        image
      });
    } else {
      this.setState({
        modalIsOpen: false,
        EditMovie: { ...this.state.EditMovie, title: "" }
      });
    }
    this.closeModal();
  };

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <button
          className="card-btn"
          onClick={
            (() => this.props.edit_movie(this.props.movies.id), this.openModal)
          }
        >
          Edit
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form>
            <h1>Edit A Movie</h1>
            <label>Movie Title</label>
            <input
              type="text"
              name="title"
              onChange={this.handle}
              defaultValue={this.state.title}
            />
            <label>Movie release Year</label>
            <input
              type="text"
              name="year"
              onChange={this.handle}
              defaultValue={this.state.year}
            />
            <label>Movie Picture</label>
            <input
              type="text"
              name="image"
              onChange={this.handle}
              defaultValue={this.state.image}
            />
            <label>Movie Rating</label>
            <input
              type="text"
              name="rating"
              onChange={this.handle}
              defaultValue={this.state.rating}
            />
          </form>
          <button className="Modal-btn" onClick={this.submitEdit}>
            Submit
          </button>
          <button className="Modal-btn" onClick={this.closeModal}>
            Close
          </button>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    edit_movie: movies => dispatch(edit_movie(movies))
  };
};

export default connect(null, mapDispatchToProps)(EditMovie);
