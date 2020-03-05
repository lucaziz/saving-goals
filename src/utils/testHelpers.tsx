import React from 'react';
import { theme } from '~/styles/theme/theme';
import { ThemeProvider } from 'styled-components';
import { mount, shallow } from 'enzyme';

export const buildSpy = () => jest.fn();

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};

export const simulateTyping = (element: any, value: string) =>
  element.simulate('change', { target: { value } });

export function mountWithTheme(child: any) {
  return mount(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
  });
}

export function shallowWithTheme(child: any) {
  return shallow(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
  });
}
