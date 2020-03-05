import React, { Component } from "react";
import { connect } from "react-redux";
import { add_movie } from "../js/action/index";
import Modal from "react-modal";
import './AddMovie.css'

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

Modal.setAppElement('#root')
class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      newMovie: { title: "", year: "", image: "", rating: "" }
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  addTitle = e => {
    this.setState({
      newMovie: { ...this.state.newMovie, title: e.target.value }
    });
  };

  addDate = e => {
    this.setState({
      newMovie: {
        ...this.state.newMovie,
        year:
          /^[0-9]{4}$/.test(e.target.value) && e.target.value <= 2020
            ? e.target.value
            : ""
      }
    });
  };

  addRating = e => {
    this.setState({
      newMovie: {
        ...this.state.newMovie,
        rating:
          /^[0-9]{1}$/.test(e.target.value) && e.target.value <= 5
            ? e.target.value
            : ""
      }
    });
  };

  addImage = e => {
    this.setState({
      newMovie: {
        ...this.state.newMovie,
        image: (e.target.value)
          ? e.target.value
          : ""
      }
    });
  };

  submitModal = e => {
    e.preventDefault();
    if (Object.values(this.state.newMovie).indexOf("") > -1) {
      alert("Please check your information");
    } else {
      this.setState({
        modalIsOpen: false,
        newMovie: { title: "", year: "", image: "", rating: "" }
      });
      this.props.add_movie({ id: Date.now(), ...this.state.newMovie });
    }
  };

  render() {
    return (
      <div>
        <button className="Add-btn" onClick={this.openModal}>
          <span>Add <br/>Movie</span>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form className='form_modal'>
            <h1>Add A Movie</h1>
            <label className='label'>Movie Titel : </label>
            <input type="text" placeholder='Titel' className='input' onChange={this.addTitle} />
            <label className='label'>Movie release Year :</label>
            <input type="text" placeholder='release Year' className='input' onChange={this.addDate} />
            <label className='label'>Movie Picture :</label>
            <input type="text" placeholder='Picture' className='input' onChange={this.addImage} />
            <label className='label'>Movie Rating :</label>
            <input type="text" placeholder='Rating' className='input' onChange={this.addRating} />
          </form>
          <button className="Modal-btn" onClick={this.submitModal}>
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

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  add_movie: payload => dispatch(add_movie(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
