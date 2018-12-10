import { handleActions } from 'redux-actions';
import { ACTION_TYPES } from '../actions/kittyActions';

export const INITITAL_STATE = {
    allKitties: [],
    selectedKitty: {},
};

const getKittyData = (state) => ({
    ...state,
    allKitties
});

const addKitty = (state, { payload: { kittyColor, kittyName } }) => ({
    ...state,
    allKitties: [...state.allKitties, { kittyName, kittyColor }]
});

const kittyReducer = handleActions(
    {
        [ACTION_TYPES.GET_KITTY_DATA]: getKittyData,
        [ACTION_TYPES.ADD_KITTY]: addKitty
    },
    INITITAL_STATE
);

export default kittyReducer;