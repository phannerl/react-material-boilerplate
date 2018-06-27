import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles, } from '@material-ui/core';
import styles from './Sand.style';
import { imageResource } from 'theme/default';
class Sand extends React.Component {
    render() {
        // const { classes, image, open, handleDrawerToggle } = this.props;
        return (<img src={imageResource.slideBar[0]} alt="fireSpot"/>);
    }
}
const mapStateToProps = (state) => {
    return {
    // ...mapStateToProps
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    // ...mapDispatchToProps
    };
};
// export default (withStyles((theme) => ({ background: {} }))(connect(mapStateToProps, mapDispatchToProps)(Sand)));
export default (withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Sand)));
