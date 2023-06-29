import styled from 'styled-components';
import './App.css';
import AddTodo from './components/feature/AddTodo/AddTodo';
import TodoList from './components/feature/TodoList/TodoList';
import Filter from './components/feature/Filter/Filter';
import RemoveTodos from './components/feature/RemoveTodos/RemoveTodos';


const TodoContainer = styled.main`
  background-color: var(--secondary-color);

  border: 0.25rem solid var(--border-color);
  border-radius: 0.5rem;

  width: 40%;

  padding: 1rem 5%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const App = () => {
  return (
    <TodoContainer>
      <AddTodo />
      <Filter />
      <TodoList />
      <RemoveTodos />
    </TodoContainer>
  );
};
export default App;
