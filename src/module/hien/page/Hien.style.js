import createStyles from '@material-ui/core/styles/createStyles';
import { left } from 'glamor';
import { height } from 'window-size';
const sampleStyle = (theme) => createStyles({
    root: {
        padding: theme.spacing.unit * 10,
    },
    column: {
        paddingTop: '20px',
        paddingRight: '20px'
    },
    card: {
        marginBottom: '12px'
    },
    content: {
        paddingLeft: '40px',
    },
    cardSeperate: {
        borderBottom: '1px solid black'
    },
    input: {
        backGround: '#4B99AD',
        padding: '8px 15px 8px 15px',
        border: 'none',
        color: '#fff',
    },

   
   
});
export default sampleStyle;
