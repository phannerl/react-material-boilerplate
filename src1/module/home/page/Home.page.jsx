import * as React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import homeStyle from './Home.style';
class Sample extends React.Component {
    render() {
        const { classes } = this.props;
        return (<div className={classes.root}>
       <Typography>Typography</Typography>
      {'This text is raw'}
      <div className={classes.textEffect}>
        {'This text is effected'}
      </div>
      </div>);
    }
}
const mapStateToProps = (state) => ({
// ...mapStateToProps
});
const mapDispatchToProps = (dispatch, props) => ({
// ...mapDispatchToProps
});
export default (withStyles(homeStyle)(connect(mapStateToProps, mapDispatchToProps)(Sample)));
