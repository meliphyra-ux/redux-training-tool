import { MouseEventHandler } from "react";
import { useDispatch } from "react-redux"
import styled from "styled-components";
import Button from "~/components/ui/Button/Button";
import { setFilter } from "~/store/actions/todoActions";
import { Filters } from "~/store/reducers/todoReducer";

const filters : Filters[] = ['all', 'completed', 'uncompleted'];

const FiltersContainer = styled.div`
  width: 100%;

  margin-top: 0.25rem;

  display: flex;
  gap: 0.25rem;
`

const Filter = () => {
  const dispatch = useDispatch()
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(setFilter(e.currentTarget.textContent as Filters))
  }
  return (
    <FiltersContainer>
      {
        filters.map(filter => (
          <Button key={filter} onClickHandler={handleClick} colorScheme="normal">{filter}</Button>
        ))
      }
    </FiltersContainer>
  )
}

export default Filter