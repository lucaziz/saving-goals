import React from 'react';
import Button from '../Button';
import { buildSpy, mountWithTheme, noop } from '~/utils/testHelpers';

describe('Button', () => {
  it('should render children', () => {
    const button = mountWithTheme(<Button onClick={noop}>text</Button>);

    expect(button.find('button').text()).toBe('text');
  });

  it('should call action on click', () => {
    const spy = buildSpy();
    const button = mountWithTheme(<Button onClick={spy}>text</Button>);
    button.find('button').simulate('click');

    expect(spy).toHaveBeenCalled();
  });

  it('should not call action on click when loading status is true', () => {
    const spy = buildSpy();
    const button = mountWithTheme(
      <Button onClick={spy} loading>
        text
      </Button>
    );
    button.find('button').simulate('click');

    expect(spy).not.toHaveBeenCalled();
  });

  it('should not call action on click when button is disabled', () => {
    const spy = buildSpy();
    const button = mountWithTheme(
      <Button onClick={spy} disabled>
        text
      </Button>
    );
    button.find('button').simulate('click');

    expect(spy).not.toHaveBeenCalled();
  });
});
