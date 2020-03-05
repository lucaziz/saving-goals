import React from 'react';
import { buildSpy, shallowWithTheme } from '~/utils/testHelpers';
import { Label } from '~/components/input/Input.styles';
import MonthPicker from '../MonthPicker';
import { shallow } from 'enzyme';
import { ButtonAdd, ButtonSubtract, Month } from '../MonthPicker.styles';

describe('MonthPicker', () => {
  it('exist', () => {
    const component = shallow(<MonthPicker monthsFromNow={0} />);

    expect(component.exists()).toEqual(true);
  });

  it('render label', () => {
    const monthPicker = shallowWithTheme(
      <MonthPicker monthsFromNow={6} label="Label title" />
    );

    expect(monthPicker.find(Label).text()).toBe('Label title');
  });

  it('should pass to next month when click add button', () => {
    const timestamp = new Date(2020, 1, 0).getTime();
    jest.spyOn(Date, 'now').mockImplementation(() => timestamp);

    const monthPicker = shallowWithTheme(
      <MonthPicker monthsFromNow={0} label="Label title" />
    );

    monthPicker.find(ButtonAdd).simulate('click');
    expect(monthPicker.find(Month).text()).toBe('February2020');
  });

  it('should pass to previews month when click subtract button', () => {
    const timestamp = new Date(2020, 1, 0).getTime();
    jest.spyOn(Date, 'now').mockImplementation(() => timestamp);

    const monthPicker = shallowWithTheme(
      <MonthPicker monthsFromNow={2} label="Label title" />
    );

    monthPicker.find(ButtonSubtract).simulate('click');
    expect(monthPicker.find(Month).text()).toBe('February2020');
  });

  it('should call change action if the property is set and user changes month', () => {
    const spy = buildSpy();
    const monthPicker = shallowWithTheme(
      <MonthPicker monthsFromNow={2} label="Label title" onChange={spy} />
    );
    monthPicker.find(ButtonAdd).simulate('click');

    expect(spy).toHaveBeenCalled();
  });

  it('should not allow previews date from today and should not trigger change', () => {
    const spy = buildSpy();
    const timestamp = new Date(2020, 1, 0).getTime();
    jest.spyOn(Date, 'now').mockImplementation(() => timestamp);

    const monthPicker = shallowWithTheme(
      <MonthPicker monthsFromNow={0} label="Label title" onChange={spy} />
    );

    monthPicker.find(ButtonSubtract).simulate('click');
    expect(monthPicker.find(Month).text()).toBe('January2020');
    expect(spy).not.toHaveBeenCalled();
  });
});
