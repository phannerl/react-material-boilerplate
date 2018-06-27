import * as React from 'react';
import styles from './SlideBar.style';
import { split } from 'ramda';
import { withStyles, Drawer, Hidden, List, } from '@material-ui/core';
import AppLink from './component/AppLink';
class SlideBar extends React.Component {
    renderBrand() {
        const { classes, 
        // logo,
        logoText, } = this.props;
        return (<div className={classes.logo}>
        <a href="/dashboard" className={classes.logoLink}>
          {logoText}
        </a>
      </div>);
    }
    activeRoute(routeName) {
        const { pathname } = this.props.location;
        return split('/')(routeName)[1] === split('/')(pathname)[1];
        // return this.props.location.pathname === routeName
        // return true;
    }
    renderLink() {
        const { classes, routes, color } = this.props;
        return (<List>
        {routes.map((prop, key) => <AppLink color={color} isActive={this.activeRoute(prop.path)} sidebarI18nId={prop.sidebarI18nId} sidebarName={prop.sidebarName} path={prop.path} key={key}/>)}
      </List>);
    }
    render() {
        const { classes, image, open, handleDrawerToggle } = this.props;
        return (<div className={classes.container}>
        <Hidden mdUp>
        <Drawer variant="temporary" anchor="left" open={open} classes={{
            paper: classes.drawerPaper,
        }} onClose={handleDrawerToggle} ModalProps={{
            keepMounted: true,
        }}>
          {this.renderBrand()}
          <div className={classes.sidebarWrapper}>{this.renderLink()}</div>
          {image !== undefined ? (<div className={classes.background} style={{ backgroundImage: 'url(' + image + ')' }}/>) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer anchor="left" variant="permanent" open classes={{
            paper: classes.drawerPaper,
        }}>
          {this.renderBrand()}
          <div className={classes.sidebarWrapper}>{this.renderLink()}</div>
          {image !== undefined ? (<div className={classes.background} style={{ backgroundImage: 'url(' + image + ')' }}/>) : null}
        </Drawer>
      </Hidden>
      </div>);
    }
}
export default (withStyles(styles)(SlideBar));
