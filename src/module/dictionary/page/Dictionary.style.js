import createStyles from '@material-ui/core/styles/createStyles';
const sampleStyle = (theme) => createStyles({
    root: {
        padding: theme.spacing.unit * 10,
    },
    margin: {
        margin: theme.spacing.unit * 5,
        marginBottom: '0px'
    },
    left: {
        width: '50%',
        float: 'left'
    },
    right: {
        width: '50%',
        float: 'left'
    },
});
export default sampleStyle;
