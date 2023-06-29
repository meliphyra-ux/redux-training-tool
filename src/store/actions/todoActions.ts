import { Action, ActionWithPayload, ToDo } from '~/utils/types';

import { TODO_ACTIONS } from '../reducers/todoReducer';

export type TodoActions =
  | ActionWithPayload<typeof TODO_ACTIONS.ADD_NEW_TODO, ToDo>
  | ActionWithPayload<typeof TODO_ACTIONS.REMOVE_TODO, number>
  | ActionWithPayload<typeof TODO_ACTIONS.CHECK_TODO, number>
  | Action<typeof TODO_ACTIONS.REMOVE_ALL_TODOS>;

export const addNewTodo = (
  todo: ToDo
): ActionWithPayload<typeof TODO_ACTIONS.ADD_NEW_TODO, ToDo> => ({
  type: TODO_ACTIONS.ADD_NEW_TODO,
  payload: todo,
});
export const removeTodo = (
  todoId: number
): ActionWithPayload<typeof TODO_ACTIONS.REMOVE_TODO, number> => ({
  type: TODO_ACTIONS.REMOVE_TODO,
  payload: todoId,
});
export const checkTodo = (
  todoId: number
): ActionWithPayload<typeof TODO_ACTIONS.CHECK_TODO, number> => ({
  type: TODO_ACTIONS.CHECK_TODO,
  payload: todoId,
});
export const removeAllTodos = (): Action<
  typeof TODO_ACTIONS.REMOVE_ALL_TODOS
> => ({
  type: TODO_ACTIONS.REMOVE_ALL_TODOS,
});