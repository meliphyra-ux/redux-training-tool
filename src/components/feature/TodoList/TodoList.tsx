import { useSelector } from 'react-redux';
import { selectTodos } from '~/store/selectors/todoSelectors';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <section>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

export default TodoList;
