import React from "react";
import MovieList from '../component/MovieList/MoviesList'
import AddMovie from '../component/AddMovie/AddMovie'
import SearchBar from '../component/SearchBar/SearchBar'

function Home() {
  return (
    <div>
      <SearchBar />
      <MovieList />
      <AddMovie />
    </div>
  );
}

export default Home;
