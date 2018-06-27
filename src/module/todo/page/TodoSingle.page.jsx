import * as React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import TodoSingleStyle from './TodoSingle.style';
class TodoSingle extends React.Component {
    render() {
        const { classes } = this.props;
        const { task } = this.props;
        return (<div className={classes.container}>
        <Typography>{`Title: ${task.title}`}</Typography>
        <Typography>{`Completed: ${task.completed}`}</Typography>
        <Typography>{`Id: ${task.id}`}</Typography>
        <Typography>{`Tags: ${task.tags}`}</Typography>
      </div>);
    }
}
const mapStateToProps = (state, ownProps) => ({
    tasks: state.todo.tasks,
    task: state.todo.tasks[ownProps.match.params.id],
});
const mapDispatchToProps = (dispatch, props) => ({
// ...mapDispatchToProps
});
export default (withStyles(TodoSingleStyle)(connect(mapStateToProps, mapDispatchToProps)(TodoSingle)));
