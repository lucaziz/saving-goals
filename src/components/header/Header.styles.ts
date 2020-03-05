import styled from 'styled-components';
import { device } from '~/styles/tools/breakpoints.styles';
import { animaInToLeft } from '~/styles/objects/animations.styles';

export const CustomHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: ${props => props.theme.space[6]}rem;
  min-height: 10.5rem;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.01);

  ${device.mobile} {
    justify-content: center;
    min-height: 6rem;
    padding-left: 0;

    > img {
      margin-top: 4px;
      width: 77px;
      height: 26px;
    }
  }
`;

export const BackButtonMobile = styled.a`
  display: none;
  position: absolute;
  left: 2.4rem;
  opacity: 0;

  animation: ${animaInToLeft} 200ms ease-out forwards;

  ${device.mobile} {
    display: block;
  }
`;
