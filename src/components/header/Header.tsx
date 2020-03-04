import React from 'react';
import { CustomHeader } from './Header.styles';
const LogoIcon = require('~/assets/icons/logo.svg') as string;

const Header = () => (
  <CustomHeader>
    <img src={LogoIcon} width={95} height={32} alt="Origin" />
  </CustomHeader>
);

export default Header;
