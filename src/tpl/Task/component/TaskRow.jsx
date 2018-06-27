import * as React from 'react';
import { withStyles, TableRow, TableCell, Checkbox, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import TaskRowStyle from './TaskRow.style';
import { Link } from 'react-router-dom';
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
import * as cs from 'classnames';
import AppTextField from '../../TextField/AppTextField';
import Check from '@material-ui/icons/Check';
import { updateTask, deleteTask } from 'module/todo/logic.redux/action';
class TaskRow extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isEdit: false,
        };
    }
    render() {
        const { classes, task, updateTask, deleteTask } = this.props;
        return (<TableRow className={classes.tableRow}>
        <TableCell classes={{
            root: cs(classes.rootCellCheck),
        }}>
          <Checkbox checked={task.completed} tabIndex={-1} onClick={() => updateTask(task.id, {
            ...task,
            completed: !task.completed,
        })} checkedIcon={<Check className={classes.checkedIcon}/>} icon={<Check className={classes.uncheckedIcon}/>} classes={{
            checked: classes.checked,
            root: classes.rootCheck,
        }}/>
        </TableCell>
        <TableCell classes={{
            root: cs(classes.editTextField),
        }}>
          {!this.state.isEdit
            ? (<Link to={{
                pathname: `/todo/${task.id}`,
            }}>
              {task.title}
              </Link>)
            : <AppTextField onSubmit={(text = '') => {
                updateTask(task.id, {
                    ...task,
                    title: text,
                });
                this.setState({
                    isEdit: false,
                });
            }} label="Update Task" autoFocus value={task.title}/>}
        </TableCell>
        <TableCell className={classes.tableActions}>
            <IconButton aria-label="Edit" className={classes.tableActionButton}>
              <Edit className={classes.tableActionButtonIcon + ' ' + classes.edit} onClick={() => {
            this.setState({
                isEdit: true,
            });
        }}/>
            </IconButton>
            <IconButton aria-label="Close" className={classes.tableActionButton}>
              <Close className={classes.tableActionButtonIcon + ' ' + classes.close} onClick={() => deleteTask(task.id)}/>
            </IconButton>
        </TableCell>
      </TableRow>);
    }
}
const mapStateToProps = (state, ownProps) => ({
    // ...mapStateToProps
    // task: getTaskById(state, ownProps),
    task: state.todo.tasks[ownProps.taskId],
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    // ...mapDispatchToProps
    deleteTask: (id) => dispatch(deleteTask(id)),
    updateTask: (id, task) => dispatch(updateTask(id, task)),
});
export default withStyles(TaskRowStyle)(connect(mapStateToProps, mapDispatchToProps)(TaskRow));
