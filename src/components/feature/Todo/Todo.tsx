import { useDispatch } from 'react-redux';
import { checkTodo, removeTodo } from '~/store/actions/todoActions';
import { ToDo } from '~/utils/types';

import Button from '~/components/ui/Button/Button';

import styled from 'styled-components';

const StyledTodoContainer = styled.div<{ $completed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid
    ${(props) => (props.$completed ? 'var(--completed-color)' : 'black')};
  & p {
    width: 300px;
    height: min-content;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Todo = ({ todo }: { todo: ToDo }) => {
  const { text, completed, id } = todo;
  const dispatch = useDispatch();

  const handleCompletedStatus = () => {
    dispatch(checkTodo(id));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  return (
    <StyledTodoContainer $completed={completed}>
      <p title={text}>{text}</p>
      <span>Status</span>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCompletedStatus}
      />
      <Button colorScheme='red' onClickHandler={handleRemoveTodo}>Remove</Button>
    </StyledTodoContainer>
  );
};

export default Todo;
