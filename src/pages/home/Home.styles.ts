import styled from 'styled-components';
import { device } from '~/styles/tools/breakpoints.styles';

interface BenefitProps {
  disabled?: boolean;
}

export const HomeContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: ${props => props.theme.space[6]}rem 0;

  ${device.tablet} {
    padding: ${props => props.theme.space[6]}rem 1rem;
  }
`;

export const HomeHeading = styled.h1`
  margin-bottom: ${props => props.theme.space[5]}rem;
  padding: 0 ${props => props.theme.global.gutterSpace / 2}px;
  font-family: ${props => props.theme.global.secondaryFont};
  font-size: 4rem;
  font-weight: 700;

  ${device.mobile} {
    padding: 0 calc(1rem + ${props => props.theme.global.gutterSpace / 2}px);
    font-size: 2.6rem;
    text-align: center;
  }
`;

export const ListOfBenefits = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;
  list-style: none;

  ${device.mobile} {
    padding: 0 1rem;
  }
`;

export const Benefit = styled.li`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: ${props => props.theme.global.gutterSpace / 2}px;
  padding: 0;
  min-height: 19rem;
  list-style: none;
  background-color: ${props => props.theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1.25rem 1.875rem 0px;
  border-radius: 0.8rem;
  width: 17rem;
  transition: transform 150ms cubic-bezier(0.17, 0.67, 0.64, 1.49);
  cursor: not-allowed;

  ${(props: BenefitProps) =>
    !props.disabled &&
    `
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  `}

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.black};
  }

  ${device.mobile} {
    width: calc(50% - ${props => props.theme.global.gutterSpace}px);
  }
`;

export const BenefitHeading = styled.h2`
  margin-top: ${props => props.theme.global.gutterSpace}px;
  margin-bottom: 0;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
`;
