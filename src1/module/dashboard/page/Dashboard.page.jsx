import * as React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import dashboardStyle from './Dashboard.style';
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Dashboard1'
        }
    }
    render() {
        const {title} = this.state
        return (<div>
       <Typography>{title}</Typography>

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
