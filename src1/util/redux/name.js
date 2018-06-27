export const addPrefix = (nameModule, nameApp = '@@app') => {
    const nameModuleCapital = nameModule.toUpperCase();
    return `${nameApp}/${nameModuleCapital}`;
};
export const addSaga = (name) => {
    return `${name}__SAGA`;
};
export default {
    addPrefix,
    addSaga,
};
