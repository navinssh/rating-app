import {RATING_ACTIONS} from '../../../constants/Constants';
import {objectifyInitialState} from "../../../helpers/Helpers";

export default (state = objectifyInitialState, action) => {
    if (action.type === RATING_ACTIONS.SET_RATING) {
        return {
            ...state,
            [action.payload.uuid]: action.payload,
        };
    }
    return state;
};
