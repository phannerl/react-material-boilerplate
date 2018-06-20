import * as React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import dashboardStyle from './Dashboard.style';
class Dashboard extends React.Component {
    render() {
        return (<div>
       <Typography>Dashboard</Typography>

      </div>);
    }
}
const mapStateToProps = (state) => ({
// ...mapStateToProps
});
const mapDispatchToProps = (dispatch, props) => ({
// ...mapDispatchToProps
});
export default (withStyles(dashboardStyle)(connect(mapStateToProps, mapDispatchToProps)(Dashboard)));
