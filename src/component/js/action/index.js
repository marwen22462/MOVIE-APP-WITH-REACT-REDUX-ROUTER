import { ADD, DELETE, EDIT,SEARCH,RATING } from "../constants";

export const add_movie = movies => ({
  type: ADD,
  payload: movies
});
export const delete_movie = id => ({
  type: DELETE,
  payload: id
});
export const edit_movie = movies => ({
  type: EDIT,
  payload: movies
});

export const search_movie =payload => ({
  type: SEARCH,
  payload
})
export const search_rating = payload => ({
  type: RATING,
  payload
});