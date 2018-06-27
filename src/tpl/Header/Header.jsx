import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles, AppBar, Toolbar, Button, Hidden, IconButton, } from '@material-ui/core';
import * as cx from 'classnames';
import styles from './Header.style';
import MenuIcon from '@material-ui/icons/Menu';
import { FormattedMessage } from 'react-intl';
import * as pathToExp from 'path-to-regexp';
class Header extends React.Component {
    isPathInRoute(pathname, routePath) {
        const re = pathToExp(routePath);
        return re.exec(pathname);
    }
    makeBrand() {
        const { routes, location: { pathname } } = this.props;
        for (const prop of routes) {
            if (this.isPathInRoute(pathname, prop.path)) {
                if (prop.navBarI18nId) {
                    return <FormattedMessage id={prop.navBarI18nId}/>;
                }
                return prop.navBarName;
            }
        }
        return '';
    }
    render() {
        // const { classes, image, open, handleDrawerToggle } = this.props;
        const { classes, color, handleDrawerToggle } = this.props;
        const appBarClasses = cx({
            [' ' + classes[color]]: color,
        });
        return (<AppBar position={'static'}>
        <Toolbar className={classes.container + appBarClasses}>
          <Hidden mdUp>
            <IconButton className={classes.appResponsive} color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Button href="#" className={classes.title}>
            {this.makeBrand()}
          </Button>
          <Hidden smDown implementation="css">
            
          </Hidden>

        </Toolbar>
      </AppBar>);
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
// export default (withStyles((theme) => ({ background: {} }))(connect(mapStateToProps, mapDispatchToProps)(Header)));
export default (withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Header)));
