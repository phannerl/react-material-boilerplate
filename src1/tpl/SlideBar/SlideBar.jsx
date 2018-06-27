import * as React from 'react';
import * as cx from 'classnames';
import { NavLink } from 'react-router-dom';
import { withStyles, Drawer, Hidden, List, ListItem, 
// ListItemIcon,
ListItemText, } from '@material-ui/core';
import styles from './SlideBar.style';
import { FormattedMessage } from 'react-intl';
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
        return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
        // return true;
    }
    renderLink() {
        const { classes, routes, color } = this.props;
        return (<List>
        {routes.map((prop, key) => {
            if (prop.redirect)
                return null;
            const listItemClasses = cx({
                [' ' + classes[color]]: this.activeRoute(prop.path),
            });
            const whiteFontClasses = cx({
                [' ' + classes.whiteFont]: this.activeRoute(prop.path),
            });
            const sidebarName = prop.sidebarI18nId
                ? <FormattedMessage id={prop.sidebarI18nId}/>
                : prop.sidebarName;
            return (<NavLink to={prop.path} className={classes.item} activeClassName="active" key={key}>
              <ListItem button className={classes.itemLink + listItemClasses}>
                
                <ListItemText primary={sidebarName} className={classes.itemText + whiteFontClasses} disableTypography={true}/>
              </ListItem>
            </NavLink>);
        })}
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
