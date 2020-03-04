import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '~/styles/global.styles';
import { theme } from '~/styles/theme/theme';
import { LayoutProps } from './Layout.types';
import { Main } from './Layout.styles';

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <Main>{children}</Main>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Layout;
