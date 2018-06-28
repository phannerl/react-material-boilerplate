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
    fab: {
        margin: theme.spacing.unit * 2,
    },
    textField: {
        marginRight: theme.spacing.unit,
        width: "540px",
    },
    menu: {
        width: "540px",
    },
    cover: {
        width: 151,
        height: 151,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        opacity: 0,
        margin: 0,
        height: "100%",
    },
    button:{
        position: "relative",
        display: "inline-block",
    },
    img:{
        width:"100px",
    }


});
export default sampleStyle;
