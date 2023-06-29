import { useDispatch } from 'react-redux';
import { removeAllTodos } from '~/store/actions/todoActions';
import Button from '~/components/ui/Button/Button';

const RemoveTodos = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(removeAllTodos());
  };
  return (
    <Button onClickHandler={handleOnClick} colorScheme="red">
      Remove All Todo's
    </Button>
  );
};

export default RemoveTodos;
