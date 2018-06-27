import actionType from './actionType';
export const changeTheme = () => {
    return {
        type: actionType.CHANGE_THEME,
    };
};
export const changeLanguage = (lang) => {
    return {
        lang,
        type: actionType.CHANGE_LANGUAGE,
    };
};
