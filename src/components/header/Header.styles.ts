import styled from 'styled-components';

export const CustomHeader = styled.header`
  display: flex;
  align-items: center;
  padding-left: ${props => props.theme.space[6]}rem;
  min-height: 10.5rem;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.01);
`;
