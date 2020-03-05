import React from 'react';
import { BackButtonMobile, CustomHeader } from './Header.styles';
import { useHistory } from 'react-router-dom';
import { Goals, SavingGoalsState } from '~reducers';
import { connect } from 'react-redux';
const LogoIcon = require('~/assets/icons/logo.svg') as string;

const arrowBack = require('~/assets/icons/back.svg') as string;

interface HeaderProps {
  goals: Goals[];
}
const Header = (props: HeaderProps) => {
  const { goals } = props;
  const history = useHistory();
  const handleNavigatingBack = () => {
    const currentPath = history.location.pathname;
    if (currentPath === '/savings') {
      history.push('/');
    }

    if (currentPath === '/savings/detail') {
      const pathToGo = goals && !goals.length ? '/' : '/savings';
      history.push(pathToGo);
    }
  };

  return (
    <CustomHeader>
      {history.location.pathname !== '/' && (
        <BackButtonMobile onClick={handleNavigatingBack}>
          <img src={arrowBack} width={24} height={24} alt="Back" />
        </BackButtonMobile>
      )}
      <img src={LogoIcon} width={95} height={32} alt="Origin" />
    </CustomHeader>
  );
};

const mapStateToProps = (state: SavingGoalsState) => ({
  goals: state.goals
});

export default connect(mapStateToProps)(Header);
