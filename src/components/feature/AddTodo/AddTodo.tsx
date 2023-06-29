import { ChangeEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '~/components/ui/Button/Button';
import Input from '~/components/ui/Input/Input';
import { addNewTodo } from '~/store/actions/todoActions';

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
    );
  };
  return (
    <section>
      <Input value={todoText} onChangeHandler={handleTodoText} />
      <Button colorScheme="green" onClickHandler={handleAddTodo}>
        Add todo
      </Button>
    </section>
  );
};

export default AddTodo;
