import React from 'react';
import {
  buildSpy,
  mountWithTheme,
  shallowWithTheme,
  simulateTyping
} from '~/utils/testHelpers';

import Input from '../Input';
import { CustomError, CustomInput, Label } from '../Input.styles';

describe('Input', () => {
  it('should set the id based on the input name', () => {
    const input = shallowWithTheme(
      <Input type="text" name="test_input" label="Name" />
    );

    expect(input.find(Label).prop('htmlFor')).toBe('form-field-test_input');
    expect(input.find(CustomInput).prop('id')).toBe('form-field-test_input');
  });

  it('should have label field if have label prop', () => {
    const input = shallowWithTheme(
      <Input type="text" name="test_input" label="Name" />
    );

    expect(input.find(Label)).toHaveLength(1);
    expect(input.find(Label).prop('htmlFor')).toBe('form-field-test_input');
    expect(input.find(Label).text()).toBe('Name');
  });

  it('should not render label field if there is no prop label', () => {
    const input = shallowWithTheme(<Input type="text" name="test_input" />);

    expect(input.find(Label)).toHaveLength(0);
  });

  it('should call change action if the property is set and user start typing', () => {
    const spy = buildSpy();
    const input = mountWithTheme(
      <Input type="text" name="test_input" onChange={spy} />
    );
    simulateTyping(input.find('input'), 'changetyping');

    expect(spy).toHaveBeenCalled();
  });

  it('should render error message if an error is sent from parent component', () => {
    const input = shallowWithTheme(
      <Input type="text" name="test_input" hasError errorMsg="Required field" />
    );

    expect(input.find(CustomError)).toHaveLength(1);
    expect(input.find(CustomError).text()).toBe('Required field');
  });

  it('should disable input field and prevent action to be called if prop disabled is true', () => {
    const spy = buildSpy();
    const input = mountWithTheme(
      <Input type="text" disabled name="test_input" onChange={spy} />
    );
    simulateTyping(input.find('input'), 'changetyping');
    expect(input.find(CustomInput).prop('disabled')).toBe(true);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should set input to readonly and prevent action to be called if prop loading is true', () => {
    const spy = buildSpy();
    const input = mountWithTheme(
      <Input type="text" loading name="test_input" onChange={spy} />
    );
    simulateTyping(input.find('input'), 'changetyping');

    expect(input.find('input').prop('readOnly')).toBe(true);
    expect(spy).not.toHaveBeenCalled();
  });
});
