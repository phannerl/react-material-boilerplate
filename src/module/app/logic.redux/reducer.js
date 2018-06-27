import actionType from './actionType';
import { initialState } from './initalState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CHANGE_THEME: {
            const newStyle = state.theme.paletteType === 'light' ? 'dark' : 'light';
            return state.setIn(['theme', 'paletteType'], newStyle);
        }
        case actionType.CHANGE_LANGUAGE: {
            return state.setIn(['lang'], action.lang);
        }
        default: return state;
    }
};
export default reducer;
