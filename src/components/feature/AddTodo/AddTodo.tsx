import { ChangeEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '~/components/ui/Button/Button';
import Input from '~/components/ui/Input/Input';
import { addNewTodo } from '~/store/actions/todoActions';

const AddTodoContainer = styled.section`
  width: 100%;
  height: 31.5px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  
  input {
    height: 100%;
    border: none;
    flex: 1 1 50%;
  }
`

const AddTodo = () => {
  const [todoText, setTodoText] = useState('');
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  const handleTodoText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    setId((prevState) => prevState + 1);
    dispatch(
      addNewTodo({
        id,
        text: todoText,
        createdAt: Date.now(),
        completed: false,
      })
    )
    setTodoText('')
  };
  return (
    <AddTodoContainer>
      <Input value={todoText} onChangeHandler={handleTodoText} />
      <Button colorScheme="green" onClickHandler={handleAddTodo}>
        Add todo
      </Button>
    </AddTodoContainer>
  );
};

export default AddTodo;
