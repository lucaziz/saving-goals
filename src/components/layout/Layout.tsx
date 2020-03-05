import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '~/styles/global.styles';
import { theme } from '~/styles/theme/theme';
import { LayoutProps } from './Layout.types';
import { Main, MainContainer } from './Layout.styles';
import Header from '~/components/header/Header';

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Header />
        <Main>{children}</Main>
      </MainContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Layout;
