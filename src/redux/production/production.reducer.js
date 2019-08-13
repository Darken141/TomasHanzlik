import { ProductionActionTypes } from './production.types';

const INITIAL_STATE = {
    hidden: true,
    production: null
}

const productionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ProductionActionTypes.CLOSE_PRODUCTION_CONTAINER:
            return {
                ...state,
                hidden: true,
                production: null
            }

        case ProductionActionTypes.OPEN_PRODUCTION_CONTAINER:
            return {
                ...state,
                hidden: false,
                production: action.payload
            }

        default:
            return state
    }
}

export default productionReducer;