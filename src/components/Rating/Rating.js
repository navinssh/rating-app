import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './rating.scss';
import { MAX_RATING } from '../../constants/Constants';

class Rating extends Component {
    maxRating = MAX_RATING;

    render() {
      const { rating, onClick } = this.props;
      return (
        <div className="rating">
          {
                    [...Array(this.maxRating).keys()].map(key => (
                      <div
                        key={key}
                        className={`rating--star ${classNames({ active: (key + 1) <= rating })}`}
                        onClick={() => onClick(key + 1)}
                      >★</div>
                    ))
                }
        </div>
      );
    }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Rating;
