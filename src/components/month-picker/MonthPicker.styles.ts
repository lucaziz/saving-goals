import styled, { css } from 'styled-components';
import { fieldHeight, radiusValue } from '~/components/input/Input.styles';

const Button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  flex: 0 0 6rem;
  background-color: ${props => props.theme.colors.lightGrey};
  border: solid 1px ${props => props.theme.colors.lightGrey};
  border-radius: ${radiusValue};
  font-size: 2.8rem;
  color: ${props => props.theme.colors.darkGrey};
  outline: 0;
  transition: box-shadow 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);

  &:focus {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }

  &:active {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const FieldMonthPicker = styled.div`
  display: flex;
  width: 100%;
  min-height: ${fieldHeight};
`;

export const ButtonSubtract = styled.button`
  ${Button}
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
`;

export const ButtonAdd = styled.button`
  ${Button}
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 0;

  img {
    transform: rotate(180deg);
  }
`;

export const Month = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  flex: 1;
  font-size: 2.2rem;
  font-weight: bold;
  border-top: solid 1px ${props => props.theme.colors.lightGrey};
  border-bottom: solid 1px ${props => props.theme.colors.lightGrey};

  small {
    font-weight: 500;
    font-size: 1.8rem;
  }
`;
