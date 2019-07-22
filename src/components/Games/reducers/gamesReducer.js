import {RATING_ACTIONS} from 'src/constants/Constants';
import {objectifyInitialState} from "src/helpers/Helpers";

export default (state = objectifyInitialState, action) => {
    if (action.type === RATING_ACTIONS.SET_RATING) {
        return {
            ...state,
            [action.payload.uuid]: action.payload,
        };
    }
    return state;
};
