import { createAction } from 'redux-actions';

import createContants from 'namespace-constants';

export const ACTION_TYPES = createContants('kitty', [
    'GET_KITTY_DATA'
]);

export const getKittyData = createAction(ACTION_TYPES.GET_KITTY_DATA);