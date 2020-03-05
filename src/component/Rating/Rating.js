
import React from 'react';
import { connect } from 'react-redux';

import {search_rating} from '../../component/js/action'

const Rating = ({ count, search_rating }) => {
    let starArray = [];
    for (let i = 0; i < 5; i++) {
      if (i < count) {
        starArray.push(
          <span
            key={i}
            role='img'
            aria-label='star'
            onClick={() => search_rating(i + 1)}
          >
            ★
          </span>
        );
      } else {
        starArray.push(
          <span
            key={i}
            role='img'
            aria-label='star'
            onClick={() => search_rating(i + 1)}
          >
            ☆
          </span>
        );
      }
    }
    return <div>{starArray}</div>;
  };
  
  export default connect(null, { search_rating })(Rating);