import { useSelector } from 'react-redux';
import { selectTodos } from '~/store/selectors/todoSelectors';
import Todo from '../Todo/Todo';
import styled from 'styled-components';

const TodoListContainer = styled.section`
  width: 100%;
  height: 375px;
  margin-top: 0.5rem;

  overflow: scroll;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <TodoListContainer>
      {Boolean(todos.length) ? todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      )) : <p>There is no active todos</p>}
    </TodoListContainer>
  );
};

export default TodoList;
