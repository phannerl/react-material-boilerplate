import * as React from 'react';
import { withStyles, Table, TableBody } from '@material-ui/core';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import taskStyle from './Task.style';
import { updateTask, addTask, deleteTask } from 'module/todo/logic.redux/action';
import AppTextField from '../TextField/AppTextField';
import TaskRow from './component/TaskRow';
class Task extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            newTaskText: '',
            editTaskId: '',
            editTaskText: '',
        };
        this.onChange = (event) => {
            const { value } = event.target;
            this.setState({
                newTaskText: value,
            });
        };
        this.onChangeEdit = (event) => {
            const { value } = event.target;
            this.setState({
                editTaskText: value,
            });
        };
        this.onKeyPressEdit = (event, task) => {
            const { editTaskText } = this.state;
            if (event.key === 'Enter') {
                // Do code here
                this.props.updateTask(task.id, {
                    ...task,
                    title: editTaskText,
                });
                this.setState({
                    editTaskId: '',
                });
                event.preventDefault();
            }
        };
        this.onKeyPress = (event, tag) => {
            if (event.key === 'Enter') {
                // Do code here
                const { newTaskText } = this.state;
                this.props.newTask({
                    completed: false,
                    title: newTaskText,
                    tags: [tag],
                    id: v4(),
                });
                this.setState({
                    newTaskText: '',
                });
                event.preventDefault();
            }
        };
        this.onSubmitNewTask = (text) => {
            const { tag } = this.props;
            this.props.newTask({
                completed: false,
                title: text,
                tags: [tag],
                id: v4(),
            });
        };
    }
    render() {
        const { classes, tasksIndex, tasks, tag } = this.props;
        const taskOrder = tasksIndex;
        return (<div>
        <AppTextField onSubmit={this.onSubmitNewTask} label="New Task"/>
        <Table className={classes.table}>
          <TableBody>
            {tasks.map(index => (<TaskRow taskId={index} key={index}/>))}
          </TableBody>
        </Table>
      </div>);
    }
}
const mapStateToProps = (state) => ({
    // ...mapStateToProps
    tasksIndex: state.todo.tasksIndex,
});
const mapDispatchToProps = (dispatch, props) => ({
    // ...mapDispatchToProps
    updateTask: (id, task) => dispatch(updateTask(id, task)),
    newTask: (task) => dispatch(addTask(task)),
    onDeleteTask: (id) => dispatch(deleteTask(id)),
});
export default (withStyles(taskStyle)(connect(mapStateToProps, mapDispatchToProps)(Task)));
