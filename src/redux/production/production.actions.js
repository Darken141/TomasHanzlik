import { ProductionActionTypes } from './production.types';

export const showProductionContainer = (id) => ({
    type: ProductionActionTypes.SHOW_PRODUCTION_CONTAINER,
    payload: id
})