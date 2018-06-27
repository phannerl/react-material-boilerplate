import { Switch } from 'react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import { mapObjIndexed, values, compose, omit } from 'ramda';
import { getPageList } from '../helper/module';
import { withStyles } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';
// import { RootState } from '../reducers';
import DashBoard from '../layout/Dashboard';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const hist = createBrowserHistory();
const pages = getPageList();
class AppRouter extends React.Component {
    constructor() {
        super(...arguments);
        this.renderDashBoard = (props) => {
            const convertRouteComponent = mapObjIndexed((page, key) => (<Route {...page} key={key}/>));
            const routesRender = compose(values, convertRouteComponent)(pages);
            const pageIgnore = [
                'todoSingle',
            ];
            const slidebarRoutes = compose(values, omit(pageIgnore))(pages);
            return (<DashBoard routes={values(pages)} {...props}>
        <Switch>
          {routesRender}
        </Switch>
      </DashBoard>);
        };
    }
    render() {
        // Switch case layout
        return (<div className={this.props.classes.body}>
        <Router history={hist}>
          <Switch>
            <Route path={''} render={this.renderDashBoard}>
            </Route>
          </Switch>
        </Router>
      </div>);
    }
}
const styles = (theme) => createStyles({
    body: {},
});
const mapStateToProps = (state, props) => ({});
export const AppRoute = withStyles(styles)(connect(mapStateToProps)(AppRouter));
