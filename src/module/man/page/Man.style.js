import createStyles from '@material-ui/core/styles/createStyles';
import { left } from 'glamor';
import { height } from 'window-size';
const sampleStyle = (theme) => createStyles({
    root: {
        padding: theme.spacing.unit * 10,
    },

    content: {
        paddingLeft: '40px',
    },

    describe: {
        color: "red",
    },
    
    inputlist: {
        display: 'flex',
    },
    inputtab: {
        width : '300px', 
        height : '50px', 
        fontSize : '24px', 
        padding : '0px',
    },
    buttontab: {
        width : '50px', 
        height : '50px', 
        padding : '0'
    },
    listitem: {
        marginBottom: '10px',
        listStyleType: 'none',
        backgroundColor: 'red',
        width: '300px',
        height: '50px',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    list: {
        padding: '0',
        width: '300px'
    },
});
export default sampleStyle;
