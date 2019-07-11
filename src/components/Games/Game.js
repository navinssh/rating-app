import React from 'react';
import PropTypes from 'prop-types';
import './games.scss';
import { useDispatch } from 'react-redux';
import Rating from '../Rating/Rating';

const Game = ({ game }) => {
  const { uuid, title, description, rating, avatar } = game;
  const dispatch = useDispatch();
  const avatarPath = require(`../../static/images/${avatar}`);
  const setRating = ratingValue => dispatch({
    type: 'SET_RATING',
    payload: {
      uuid,
      title,
      description,
      avatar,
      rating: ratingValue
    }
  });
  return (
    <div className="game" key={uuid}>
      <div className="game--avatar">
        <img src={avatarPath} alt={title} />
      </div>
      <div className="game--meta">
        <div className="game--title">
          {title}
        </div>
        <div className="game--description">
          {description}
        </div>
        <div className="game--rating">
          <Rating data-testid="rating" rating={rating} onClick={setRating} />
        </div>
      </div>
    </div>
  );
};

Game.propTypes = {
  game: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired
};

export default Game;
