import DictionaryPage from './Dictionary.page';
export const page = {
    route: {
        dictionary: {
            path: '/dictionary',
            exact: true,
            component: DictionaryPage,
            sidebarName: 'Dictionary',
            navBarName: 'Dictionary Box',
        }
    },
};
