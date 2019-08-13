import { ProductionActionTypes } from './production.types';

const INITIAL_STATE = {
    hidden: true
}

const productionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ProductionActionTypes.TOGGLE_CARD_CONTAINER:
            return {
                ...state,
                hidden: !state.hidden
            }

        default:
            return state
    }
}

export default productionReducer;