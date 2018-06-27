import * as R from 'ramda';
import { addPrefix } from './name';
import { getRule } from './rule';
const makeGetActionType = (nameModule, appName = '@@app') => {
    return (nameAction) => `${addPrefix(nameModule, appName)}/${nameAction.toUpperCase()}/`;
};
const generateActionTypeList = (nameModule, options) => {
    const { actionType, appName, groupName } = options;
    const rules = getRule(actionType, groupName);
    const getActionType = makeGetActionType(nameModule, appName);
    return R.compose(R.mergeAll, R.map((key) => ({ [key]: getActionType(key) })))(rules);
};
export { generateActionTypeList, };
