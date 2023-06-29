import { RootState } from '../reducers/combinedReducers';

export const selectTodos = (state: RootState) => {
  let todos = state.todo.todos
  switch(state.todo.filter){
    case 'completed': {
      return todos.filter(todo => todo.completed)
    }
    case 'uncompleted': {
      return todos.filter(todo => !todo.completed)
    }
    default: {
      return todos
    }
  }
};