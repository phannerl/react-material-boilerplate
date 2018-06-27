import { compose, path, filter, isNil, flatten, values, mergeAll, mapObjIndexed } from 'ramda';
// tslint:disable-next-line:no-duplicate-imports
import { module } from '../module/module';
function pathDict(data, rootPath, options = { type: 'list' }) {
    const { type } = options;
    const getListData = mapObjIndexed((eachModuleValue) => path(rootPath)(eachModuleValue));
    const removeUndefinedItem = filter((item) => !isNil(item));
    const listCompose = compose(removeUndefinedItem, getListData);
    switch (type) {
        case 'array': return compose(flatten, values, listCompose)(data);
        case 'flatten': return compose(mergeAll, values, listCompose)(data);
        case 'list':
        default: return listCompose(data);
    }
}
export const getSpecificModuleRedux = (key, options) => pathDict(module, ['redux', key], options);
export const getPageList = () => pathDict(module, ['page', 'route'], { type: 'flatten' });
export default { getSpecificModuleRedux, getPageList };
