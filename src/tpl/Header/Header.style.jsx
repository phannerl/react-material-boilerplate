import { createStyles, } from '@material-ui/core';
import { defaultFont, primaryColor, defaultBoxShadow, infoColor, successColor, warningColor, dangerColor, } from '../../theme/default';
const themeStyle = (theme) => createStyles({
    appBar: {
        height: '30px',
        minHeight: '30px',
    },
    container: {
        // ...container,
        height: '70px',
        minHeight: '30px',
    },
    flex: {
        flex: 1,
    },
    title: {
        ...defaultFont,
        // lineHeight: "30px",
        fontSize: '23px',
        borderRadius: '3px',
        textTransform: 'none',
        color: 'inherit',
        '&:hover,&:focus': {
            background: 'transparent',
        },
    },
    appResponsive: {
    // top: "8px"
    },
    primary: {
        backgroundColor: primaryColor,
        color: '#FFFFFF',
    },
    info: {
        backgroundColor: infoColor,
        color: '#FFFFFF',
        ...defaultBoxShadow,
    },
    success: {
        backgroundColor: successColor,
        color: '#FFFFFF',
        ...defaultBoxShadow,
    },
    warning: {
        backgroundColor: warningColor,
        color: '#FFFFFF',
        ...defaultBoxShadow,
    },
    danger: {
        backgroundColor: dangerColor,
        color: '#FFFFFF',
        ...defaultBoxShadow,
    },
});
export default themeStyle;
