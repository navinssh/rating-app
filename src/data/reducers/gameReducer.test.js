import {RATING_ACTIONS} from "../../constants/Constants";
import gamesReducer from './gamesReducer';
import {objectifyInitialState} from "../../helpers/Helpers";

describe('GamesReducer spec', () => {
    it('should return the initial state', () => {
        expect(gamesReducer(undefined, {})).toEqual(objectifyInitialState);
    });

    it(`handles ${RATING_ACTIONS.SET_RATING}`, () => {
        const selectedGame = Object.values(objectifyInitialState)[2];
        const reducer = gamesReducer(objectifyInitialState, {
            type: RATING_ACTIONS.SET_RATING,
            payload: {
                ...selectedGame,
                rating: 4,
            }
        });
        const nextState = {
            ...objectifyInitialState,
            [selectedGame.uuid]: {
                ...selectedGame,
                rating: 4,
            }
        };
        expect(reducer).toEqual(nextState);
    });
});
