import React, { useState } from 'react';
import './app.scss';
import Games from './components/Games/Games';
import { getRandomIndex } from './helpers/Helpers';
import { useDispatch, useSelector } from 'react-redux';
import { MAX_RATING } from './constants/Constants';
import classNames from 'classnames';

let ratingInterval;

const App = () => {
  const games = useSelector(state => state.games);
  const [RATING_ON, setRating] = useState(false);
  const dispatch = useDispatch();

  const setRandom = () => {
    if (!RATING_ON) {
      ratingInterval = setInterval(() => {
        const game = Object.values(games)[getRandomIndex(0, (Object.values(games).length - 1))];
        const rating = getRandomIndex(1, MAX_RATING);
        dispatch({
          type: 'SET_RATING',
          payload: {
            ...game,
            rating
          },
        });
      }, 500);
      setRating(true);
    } else {
      setRating(false);
      clearInterval(ratingInterval);
    }
  };

  return (
    <div className="app">
      <section className="app--container">
        <div className="header">
          <strong>
              Video Games
          </strong>
          <button data-testid="startRating" id="start-rating" onClick={() => setRandom()} className={`button ${classNames({active: RATING_ON})}`}>
            {RATING_ON ? 'Stop Rating' : 'Start Rating'}
          </button>
        </div>
        <Games games={games} />
      </section>
    </div>
  );
};

export default App;
