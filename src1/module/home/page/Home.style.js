import createStyles from '@material-ui/core/styles/createStyles';
const sampleStyle = (theme) => createStyles({
    root: {
        padding: theme.spacing.unit * 2,
    },
    textEffect: {
        color: theme.palette.text.primary,
    },
});
export default sampleStyle;
