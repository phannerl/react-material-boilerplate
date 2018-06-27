import { createMuiTheme } from '@material-ui/core';
import { lightTheme } from './theme';
export const getTheme = (paletteType = 'light') => {
    return createMuiTheme({
        palette: {
            ...lightTheme.getPalette(paletteType),
        },
    });
};
