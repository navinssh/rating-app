import React from 'react';
import PropTypes from 'prop-types';
import './games.scss';
import Game from './Game';

const Games = ({ games }) => {
  const sortedGames = Object.keys(games).sort((a, b) => games[b].rating - games[a].rating);
  return (
    <div className="games">
      {sortedGames.map(key => (<Game key={key} game={games[key]} />))}
    </div>
  );
};

Games.propTypes = {
  games: PropTypes.object.isRequired,
};

export default Games;
