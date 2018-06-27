import { createSelector } from 'reselect';
import { filter, compose, keys } from 'ramda';
export const getTasksIndex = (state) => state.todo.tasksIndex;
export const getTasks = (state) => state.todo.tasks;
export const getTags = (state) => state.todo.tags;
export const getTagsIndex = (state) => state.todo.tagsIndex;
export const getTagId = (state, ownProps) => ownProps.tagId;
export const getTasksByTag = createSelector([getTasks, getTagId], (tasks, tagId) => {
    const filterTask = filter((task) => task.tags[0] === tagId);
    return compose(keys, filterTask)(tasks);
});
export const getTaskById = (state, ownProps) => state.todo.tasks[ownProps.taskId];
