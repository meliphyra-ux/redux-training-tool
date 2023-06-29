import { ToDo } from '~/utils/types';
import { TodoActions } from '../actions/todoActions';

type TodoReducerState = {
  todos: ToDo[];
};
export enum TODO_ACTIONS {
  ADD_NEW_TODO = 'todo/ADD_NEW_TODO',
  REMOVE_TODO = 'todo/REMOVE_TODO',
  CHECK_TODO = 'todo/CHECK_TODO',
  REMOVE_ALL_TODOS = 'todo/REMOVE_ALL_TODOS',
}

const initialValue = {
  todos: [],
} as TodoReducerState;

export default (
  state: TodoReducerState = initialValue,
  action: TodoActions
) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_NEW_TODO: {
      console.log(action.payload)
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case TODO_ACTIONS.REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case TODO_ACTIONS.CHECK_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }
    case TODO_ACTIONS.REMOVE_ALL_TODOS: {
      return { ...state, todos: [] };
    }
    default: 
      return state
  }
};
