import createStyles from '@material-ui/core/styles/createStyles';
const settingStyle = (theme) => createStyles({
    root: {
        padding: theme.spacing.unit,
    },
    childLabel: {
        fontSize: '0.8rem',
        lineHeight: '1.428571429',
        fontWeight: 'lighter',
        display: 'inline-flex',
        float: 'left',
    },
});
export default settingStyle;
