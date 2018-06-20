import * as React from 'react';
import { withStyles } from '@material-ui/core';
import dashboardStyle from './Dashboard.style';
import { SlideBar, Header } from '../tpl/';
import { imageResource } from '../theme/default';
class Dashboard extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            drawerOpen: false,
        };
        this.handleDrawerToggle = () => {
            this.setState({
                drawerOpen: !this.state.drawerOpen,
            });
        };
    }
    renderRouter() {
        if (this.props.renderRouter)
            return this.props.renderRouter();
        return this.props.children;
    }
    render() {
        const { routes, classes, ...routeHistory } = this.props;
        return (<div className={classes.wrapper}>
        <SlideBar routes={routes} logoText={'Track It For Life'} 
        // logo={logo}
        image={imageResource.slideBar[1]} handleDrawerToggle={this.handleDrawerToggle} open={this.state.drawerOpen} color="blue" {...routeHistory}/>
        <div className={classes.mainPanel}>
          <Header routes={routes} handleDrawerToggle={this.handleDrawerToggle} {...routeHistory}/>
          {this.renderRouter()}
        </div>
      </div>);
    }
}
export default withStyles(dashboardStyle)((Dashboard));
