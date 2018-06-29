import createStyles from '@material-ui/core/styles/createStyles';
const sampleStyle = (theme) => createStyles({
    root: {
        padding: theme.spacing.unit * 10,
    },
    margin: {
        margin: theme.spacing.unit * 5,
        marginBottom: '0px'
    },
    margina: {
        margin: '0',
        marginLeft: '20px',
        marginTop: '20px',
    },
    left: {
        width: '50%',
        float: 'left',
        paddingLeft: '150px',
        paddingTop: '100px',
    },
    right: {
        width: '50%',
        height: '100%',
        float: 'left',
        paddingTop: '100px',
    },
    list: {
        listStyle: 'none',
    },
    card: {
        maxWidth: 275,
        marginBottom: '10px'
      },
    cardbig: {
        maxWidth: 500,
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
      paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
      },
});
export default sampleStyle;
