import * as cx from 'classnames';
import * as React from 'react';
import AppLinkStyle from './AppLink.style';
import { ListItem, ListItemText, withStyles, } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
class AppLink extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        const { classes, color, isActive, redirect, sidebarI18nId, sidebarName, path } = this.props;
        if (redirect)
            return null;
        const listItemClasses = cx({
            [' ' + classes[color]]: isActive,
        });
        const whiteFontClasses = cx({
            [' ' + classes.whiteFont]: isActive,
        });
        const sidebarNameUpdated = sidebarI18nId
            ? <FormattedMessage id={sidebarI18nId}/>
            : sidebarName;
        if (!sidebarName)
            return null;
        return (<NavLink to={path} className={classes.item} activeClassName="active">
        <ListItem button className={classes.itemLink + listItemClasses}>
          <ListItemText primary={sidebarNameUpdated} className={classes.itemText + whiteFontClasses} disableTypography={true}/>
        </ListItem>
      </NavLink>);
    }
}
export default withStyles(AppLinkStyle)(AppLink);
