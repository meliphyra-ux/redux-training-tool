import { ChangeEventHandler } from 'react';
import { styled } from 'styled-components';

const StyledInput = styled.input`
  color: var(--text-color);

  border: 1px solid var(--border-color);
  border-radius: 0.25rem;
`;

const Input = ({
  value,
  onChangeHandler,
}: {
  value: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
}) => {
  return (
    <StyledInput
      type="text"
      required
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default Input;
