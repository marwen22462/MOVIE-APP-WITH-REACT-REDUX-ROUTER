import { ADD, DELETE, EDIT, SEARCH,RATING } from "../constants/index";

const initialState = {
  movies: [
    {
      id: '1',
      title: "Avengers END GAME",
      rating: 5,
      image:
        "https://fr.web.img2.acsta.net/pictures/19/04/04/09/04/0472053.jpg",
      year: 2019,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim sem, maximus sagittis mauris at, elementum congue tortor. Sed ultricies ipsum non tempor imperdiet. Fusce in condimentum erat, at pellentesque ante. Integer et libero justo. Quisque mattis velit nec metus pretium, non viverra nisl porttitor. Aliquam vel massa lacus. Integer sed lobortis lectus. Sed porttitor metus vel iaculis cursus. Praesent placerat laoreet neque, non venenatis odio molestie sit amet. Proin orci neque, ullamcorper et ante in, bibendum congue neque. Cras vel eros in odio ullamcorper sollicitudin molestie et lectus. Cras nibh elit, tristique ut tristique sit amet, ultricies elementum neque."
    },
    {
      id: '2',
      title: "Mission Impossible 4",
      rating: 4,
      image:
        "https://fr.web.img3.acsta.net/medias/nmedia/18/85/51/98/19843153.jpg",
      year: 2011,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim sem, maximus sagittis mauris at, elementum congue tortor. Sed ultricies ipsum non tempor imperdiet. Fusce in condimentum erat, at pellentesque ante. Integer et libero justo. Quisque mattis velit nec metus pretium, non viverra nisl porttitor. Aliquam vel massa lacus. Integer sed lobortis lectus. Sed porttitor metus vel iaculis cursus. Praesent placerat laoreet neque, non venenatis odio molestie sit amet. Proin orci neque, ullamcorper et ante in, bibendum congue neque. Cras vel eros in odio ullamcorper sollicitudin molestie et lectus. Cras nibh elit, tristique ut tristique sit amet, ultricies elementum neque."
    },
    {
      id: '3',
      title: "Fast & Furious 8",
      rating: 3,
      image:
        "https://sergetisseron.com/wp-content/uploads/2018/03/fast-furious-8-92720-670x949.jpg",
      year: 2017,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim sem, maximus sagittis mauris at, elementum congue tortor. Sed ultricies ipsum non tempor imperdiet. Fusce in condimentum erat, at pellentesque ante. Integer et libero justo. Quisque mattis velit nec metus pretium, non viverra nisl porttitor. Aliquam vel massa lacus. Integer sed lobortis lectus. Sed porttitor metus vel iaculis cursus. Praesent placerat laoreet neque, non venenatis odio molestie sit amet. Proin orci neque, ullamcorper et ante in, bibendum congue neque. Cras vel eros in odio ullamcorper sollicitudin molestie et lectus. Cras nibh elit, tristique ut tristique sit amet, ultricies elementum neque."
    },
    {
      id: '4',
      title: "Transformer 3",
      rating: 4,
      image:
        " https://fr.web.img6.acsta.net/medias/nmedia/18/66/69/68/18979539.jpg",
      year: 2008,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim sem, maximus sagittis mauris at, elementum congue tortor. Sed ultricies ipsum non tempor imperdiet. Fusce in condimentum erat, at pellentesque ante. Integer et libero justo. Quisque mattis velit nec metus pretium, non viverra nisl porttitor. Aliquam vel massa lacus. Integer sed lobortis lectus. Sed porttitor metus vel iaculis cursus. Praesent placerat laoreet neque, non venenatis odio molestie sit amet. Proin orci neque, ullamcorper et ante in, bibendum congue neque. Cras vel eros in odio ullamcorper sollicitudin molestie et lectus. Cras nibh elit, tristique ut tristique sit amet, ultricies elementum neque."
    }
  ],
  searchInput: "",
  ratingSearch: 0
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, movies: state.movies.concat(action.payload) };
    case DELETE:
      return {
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };
    case EDIT:
      return {
        movies: state.movies.map(el =>
          el.id === action.payload.id ? { ...action.payload } : el
        )
      };
    case SEARCH:
      return { ...state, searchInput: action.payload };

      case RATING:
      return { ...state, ratingSearch: action.payload };

    default:
      return state;
  }
};

export default movies;
