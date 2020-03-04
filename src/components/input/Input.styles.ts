import styled from 'styled-components';

export const radiusValue = '0.5rem';
export const fieldHeight = '6.5rem';

export const FormField = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  padding-bottom: 0.5rem;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const FieldInput = styled.div`
  display: flex;
  width: 100%;
  min-height: ${fieldHeight};
`;

export const FieldIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${fieldHeight};
  flex: 0 0 ${fieldHeight};
  background-color: ${props => props.theme.colors.superlightGrey};
  border: solid 1px ${props => props.theme.colors.lightGrey};
  border-right: 0;
  border-radius: ${radiusValue};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 2.8rem;
  color: ${props => props.theme.colors.darkGrey};

  & + input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const CustomInput = styled.input`
  flex: 1;
  width: 100%;
  padding: 1.6rem;
  outline: 0;
  font-family: ${props => props.theme.global.defaultFont};
  font-size: 2.2rem;
  font-weight: bold;
  border-radius: ${radiusValue};
  background-color: ${props => props.theme.colors.white};
  border: solid 1px ${props => props.theme.colors.lightGrey};

  &:focus {
    border-color: ${props => props.theme.colors.blue};
    background-color: ${props => props.theme.colors.greyBlue};
  }

  &::placeholder {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${props => props.theme.colors.grey};
  }
`;

export const CustomError = styled.div`
  padding: 0.3rem 0 0;
  color: ${props => props.theme.colors.red};
  font-size: 1.2rem;
`;
