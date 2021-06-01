import { Theme } from '../types';

const initialState = {
    isDark: false,
    UI: []
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Theme:
            return {
                ...state,
                isDark: action.theme.isDark,
                UI: action.theme.UI
            }
        default : return state
    }
}

export default themeReducer;