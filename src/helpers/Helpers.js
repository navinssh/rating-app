import gamesData from "../data/data";

const getRandomIndex = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

const objectifyInitialState = Object.assign(...gamesData.map(game => ({
  [game.uuid]: game
})));

export {
  getRandomIndex,
  objectifyInitialState,
};
