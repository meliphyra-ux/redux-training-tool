import { RootState } from '../reducers/combinedReducers';

export const selectTodos = (state: RootState) => state.todo.todos;
