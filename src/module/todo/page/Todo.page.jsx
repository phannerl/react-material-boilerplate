import * as React from 'react';
import { withStyles, Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { groupBy, mapObjIndexed, compose, values } from 'ramda';
import BugReport from '@material-ui/icons/BugReport';
import Code from '@material-ui/icons/Code';
import AddIcon from '@material-ui/icons/Add';
import todoStyle from './Todo.style';
import AppTab from 'tpl/Tab/AppTab';
import { Task } from 'tpl';
class Todo extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: 0,
        };
        this.handleChange = (event, value) => {
            this.setState({ value });
        };
        this.renderTabData = () => {
            const { tasks, tags } = this.props;
            const tagGroup = groupBy(task => task.tags[0]);
            const addProperties = mapObjIndexed((value, key) => {
                switch (tags[key].title) {
                    case 'Home': return {
                        tabName: tags[key].title,
                        tabIcon: BugReport,
                        tabContent: (<Task tasks={value} tag={key}/>),
                    };
                    case 'Work': return {
                        tabName: tags[key].title,
                        tabIcon: Code,
                        tabContent: (<Task tasks={value} tag={key}/>),
                    };
                    default: break;
                }
                return {
                    tabName: 'Other',
                    tabIcon: Code,
                    tabContent: (<Task tasks={value} tag={'Other'}/>),
                };
            });
            return compose(values, addProperties, tagGroup)(tasks);
        };
    }
    render() {
        const { classes } = this.props;
        const { tasks } = this.props;
        const tabs = this.renderTabData();
        console.log('RENDER Todo');
        return (<div className={classes.container}>
        <Grid container>
          <Grid xs={12} sm={12} md={6} className={classes.todoContainer}>
            <AppTab renderLeft={() => (<div className={classes.addButtonContainer}>
                  <Button variant="fab" color="primary" className={classes.addButton}>
                    <AddIcon />
                  </Button>
                </div>)} headerColor="info" tabs={tabs}/>
          </Grid>
        </Grid>
      </div>);
    }
}
const mapStateToProps = (state) => ({
    tasks: state.todo.tasks,
    tags: state.todo.tags,
});
const mapDispatchToProps = (dispatch, props) => ({
// ...mapDispatchToProps
});
export default (withStyles(todoStyle)(connect(mapStateToProps, mapDispatchToProps)(Todo)));
