import { MouseEventHandler, ReactNode } from 'react';
import { css, styled } from 'styled-components';

const buttonColorThemes = {
  red: () => css`
    background-color: var(--error-color);
    color: var(--text-color-inverted);
    border: none;
  `,
  green: () => css`
    background-color: var(--completed-color);
    color: var(--text-color-inverted);
    border: none;
  `,
  normal: () => css`
    background-color: transparent;
    color: var(--text-color);
    border: 1px solid var(--border-color);
  `,
};

type ButtonColorThemes = keyof typeof buttonColorThemes;

type ButtonProps = {
  children: ReactNode;
  type?: 'submit' | 'button';
  colorScheme: ButtonColorThemes;
  onClickHandler: MouseEventHandler;
};

const StyledButton = styled.button<{ $colorTheme: ButtonColorThemes }>`
  padding: 0.5rem;

  ${(props) => buttonColorThemes[props.$colorTheme]}

  border-radius: 0.25rem;

  cursor: pointer;
`;

const Button = ({
  children,
  type,
  colorScheme,
  onClickHandler,
}: ButtonProps) => {
  return (
    <StyledButton
      type={type ?? 'button'}
      onClick={onClickHandler}
      $colorTheme={colorScheme}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
