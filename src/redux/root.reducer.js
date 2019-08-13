import { combineReducers } from 'redux';

import productionReducer from './production/production.reducer';

export default combineReducers({
    production: productionReducer
})