import styled, { ThemedStyledProps } from 'styled-components';
import { lighten } from 'polished';
import { ButtonProps } from './Button.types';
import { device } from '~/styles/tools/breakpoints.styles';

export const CustomButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 53.5rem;
  height: 7.5rem;
  font-family: ${props => props.theme.global.defaultFont};
  font-size: 1.6rem;
  font-weight: 600;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 3.75rem;
  background-color: ${props => props.theme.colors.blue};
  transition: box-shadow 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s,
    background-color 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s,
    transform 100ms cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s;
  outline: 0;

  &:focus {
    box-shadow: rgba(27, 49, 168, 0.5) 0px 8px 16px 0px;
    background-color: rgb(44, 68, 201);
  }

  &:active {
    transform: scale(1.04);
  }

  ${(props: ButtonProps & ThemedStyledProps<object, any>) =>
    !props.disabled
      ? `&:hover {
          background-color: ${lighten(0.05, props.theme.colors.blue)};
        }`
      : `
        cursor: default;
        background-color: ${props.theme.colors.grey};
      `}

  ${(props: ButtonProps & ThemedStyledProps<object, any>) =>
    props.disabled &&
    `
    cursor: default;
    background-color: ${props.theme.colors.grey};
  `}

  ${(props: ButtonProps & ThemedStyledProps<object, any>) =>
    props.itemType === 'medium' &&
    `
    max-width: 30rem;
    height: 5.5rem;
  `}

  ${device.mobile} {
    height: 5.5rem;
  }
`;
