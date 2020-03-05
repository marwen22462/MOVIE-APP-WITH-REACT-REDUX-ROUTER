import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./component/Home";
import Discription from "./component/Description/Discription";
import {connect} from 'react-redux'

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        
        <Route
          exact
          path="/description/:id"
          render={props => <Discription {...props} />}
        />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  movies: state.movies
});


export default connect(mapStateToProps) (App);
