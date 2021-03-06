import actionType from './actionType';
export const updateTask = (id, taskUpdated) => {
    return {
        payload: taskUpdated,
        type: actionType.UPDATE_TASK,
    };
};
export const addTask = (task) => {
    return {
        type: actionType.ADD_TASK,
        payload: task,
    };
};
export const deleteTask = (id) => {
    return {
        type: actionType.DELETE_TASK,
        payload: {
            id,
        },
    };
};
