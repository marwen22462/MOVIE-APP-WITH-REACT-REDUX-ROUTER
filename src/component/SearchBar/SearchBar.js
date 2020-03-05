import React from 'react'
import { InputGroup, FormControl } from "react-bootstrap";
import {connect} from 'react-redux'
import {search_movie} from '../js/action/index'
import Rating from '../Rating/Rating'
import './SearchBar.css'

const SearchBar = ({search_movie,minRate}) => {
    return (
        <div className="homeheader">
             <InputGroup className="mb-3" style={{ width: "70%" }}>
        <FormControl
          placeholder="search"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        onChange={e => search_movie(e.target.value)} />
      </InputGroup>
      <Rating count={minRate}/>
        </div>
    )
}

const mSTP =state=> ({
minRate :state.ratingSearch
})

export default connect (mSTP, {search_movie}) (SearchBar);
