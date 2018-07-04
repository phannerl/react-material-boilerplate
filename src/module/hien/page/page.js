import HienPage from './Hien.page';
import HienSinglePage from './HienSingle.page';
export const page = {
	route: {
		hien: {
			path: '/hien',
			exact: true,
			component: HienPage,
			sidebarName: 'HienPage',
			navBarName: 'HienPage',	
		},
		hienSingle: {
			path: '/hien/:id',
			component: HienSinglePage,
			navBarName: 'Hien Single',
		},

	},
};
