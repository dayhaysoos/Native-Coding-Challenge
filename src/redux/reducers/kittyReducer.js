import { handleActions } from 'redux-actions';
import { ACTION_TYPES } from '../actions/kittyActions';

export const INITITAL_STATE = {
    kitties: {},
    selectedKitty: {}
};

const getKittyData = (state) => ({
    ...state,
    kitties
});

const kittyReducer = handleActions(
    {
        [ACTION_TYPES.GET_KITTY_DATA]: getKittyData
    },
    INITITAL_STATE
);

export default kittyReducer;