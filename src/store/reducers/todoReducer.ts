import { ToDo } from '~/utils/types';
import { TodoActions } from '../actions/todoActions';

export type Filters = 'all' | 'completed' | 'uncompleted'

type TodoReducerState = {
  todos: ToDo[];
  filter: Filters;
};
export enum TODO_ACTIONS {
  ADD_NEW_TODO = 'todo/ADD_NEW_TODO',
  REMOVE_TODO = 'todo/REMOVE_TODO',
  CHECK_TODO = 'todo/CHECK_TODO',
  REMOVE_ALL_TODOS = 'todo/REMOVE_ALL_TODOS',
  SET_FILTER = 'todo/SET_FILTER',
}

const initialValue = {
  todos: [],
  filter: 'all'
} as TodoReducerState;

export default (
  state: TodoReducerState = initialValue,
  action: TodoActions
) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_NEW_TODO: {
      console.log(action.payload);
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
    case TODO_ACTIONS.SET_FILTER: {
      return {...state, filter: action.payload}
    }
    default:
      return state;
  }
};
