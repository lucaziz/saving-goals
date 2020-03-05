import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { device } from '~/styles/tools/breakpoints.styles';

const CustomBackButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 0.5rem;
  width: 7rem;
  height: 7rem;
  background-color: ${props => props.theme.colors.white};
  border: solid 1px ${props => props.theme.colors.lightGrey};
  border-radius: 50%;
  cursor: pointer;

  ${device.mobile} {
    display: none;
  }
`;

const arrowIcon = require('~/assets/icons/arrow.svg') as string;

const BackButton = (props: { to: string }) => {
  const { to } = props;
  const history = useHistory();

  const handleClick = () => history.push(to);

  return (
    <CustomBackButton onClick={handleClick}>
      <img src={arrowIcon} width={14} height={25} alt="Back" />
    </CustomBackButton>
  );
};

export default BackButton;
