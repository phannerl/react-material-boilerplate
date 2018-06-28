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
    list: {
        listStyle: 'none',
    },
    card: {
        maxWidth: 275,
        marginBottom: '10px'
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        marginBottom: 16,
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
});
export default sampleStyle;
