import { ProductionActionTypes } from './production.types';

export const closeProductionContainer = () => ({
    type: ProductionActionTypes.CLOSE_PRODUCTION_CONTAINER
})

export const openProductionContainer = production => ({
    type: ProductionActionTypes.OPEN_PRODUCTION_CONTAINER,
    payload: production
})