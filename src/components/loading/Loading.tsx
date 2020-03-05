import styled from 'styled-components';
import { rotate } from '~styles/objects/animations.styles';

export const Loading = styled.div`
  position: relative;
  display: inline-block;
  height: 48px;
  width: 48px;
  color: ${props => props.theme.colors.blue};
  border: 5px solid;
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${rotate} 1s linear infinite;
`;
