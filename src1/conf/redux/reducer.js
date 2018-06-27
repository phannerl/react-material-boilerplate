import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { getSpecificModuleRedux } from '../../helper/module';
import { PERSIST_CONFIG } from './persist';
const moduleReducer = getSpecificModuleRedux('reducer');
const reducer = combineReducers({
    ...moduleReducer,
});
const rootReducer = (state, action) => {
    const { type } = action;
    switch (type) {
        case 'RS':
        case 'LOGOUT':
            // tslint:disable-next-line:no-parameter-reassignment
            state = undefined;
            // return {}
            break;
        default:
            break;
    }
    return reducer(state, action);
};
export const appReducer = persistReducer(PERSIST_CONFIG.storeConfig, rootReducer);
