import React from 'react';
import { mountWithTheme } from '~/utils/testHelpers';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SavingsDetail from '../SavingsDetail';
import {
  Amount,
  Description,
  HeadingTitle,
  Title
} from '~/pages/savings/SavingsDetail.styles';
import Button from '~/components/button/Button';
import Input from '~/components/input/Input';
import routeData from 'react-router-dom';
import { act } from 'react-dom/test-utils';

let middlewares: any;
let mockStore: any;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  })
}));

jest.useFakeTimers();

describe('SavingsDetail', () => {
  beforeEach(() => {
    middlewares = [];
    mockStore = configureStore(middlewares);
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('render SavingDetail component', () => {
    const initialState = {};
    const store = mockStore(initialState);

    const savingsDetail = mountWithTheme(
      <Provider store={store}>
        <SavingsDetail />
      </Provider>
    );

    expect(savingsDetail.exists()).toEqual(true);
  });

  it('enable finish button only when fields are filled', () => {
    const initialState = {
      goals: [
        {
          title: 'Go to college',
          amount: 0, // empty
          reach: 48,
          lastMonth: 'October 2025',
          monthlyAmount: 525
        }
      ]
    };
    const store = mockStore(initialState);

    const mockLocation = {
      push: jest.fn(),
      location: { state: { title: 'Go to college' } }
    };
    const spyOn = jest
      .spyOn(routeData, 'useHistory')
      .mockReturnValue(mockLocation as any);

    const savingsDetail = mountWithTheme(
      <Provider store={store}>
        <SavingsDetail />
      </Provider>
    );
    expect(savingsDetail.find(Button).prop('disabled')).toEqual(true);

    act(() => {
      savingsDetail.find(Input).prop('onChange')('25000');
    });

    savingsDetail.update();

    expect(savingsDetail.find(Button).prop('disabled')).toEqual(false);

    spyOn.mockRestore();
  });

  it('should show the right value for the monthly amount', () => {
    const initialState = {};
    const store = mockStore(initialState);

    const savingsDetail = mountWithTheme(
      <Provider store={store}>
        <SavingsDetail />
      </Provider>
    );

    act(() => {
      savingsDetail.find(Input).prop('onChange')('10000');
    });

    expect(savingsDetail.find(Amount).text()).toEqual('$208.33');
  });

  it('Edit Goal', () => {
    const initialState = {
      goals: [
        {
          title: 'Go to college',
          amount: 25000,
          reach: 48,
          lastMonth: 'October 2025',
          monthlyAmount: 525
        }
      ]
    };
    const store = mockStore(initialState);

    const mockLocation = {
      push: jest.fn(),
      location: { state: { title: 'Go to college' } }
    };
    const spyOn = jest
      .spyOn(routeData, 'useHistory')
      .mockReturnValue(mockLocation as any);

    const savingsDetail = mountWithTheme(
      <Provider store={store}>
        <SavingsDetail />
      </Provider>
    );

    expect(savingsDetail.find(HeadingTitle).text()).toEqual(
      'Your saving goal.'
    );
    expect(savingsDetail.find(Title).text()).toEqual('Go to college');
    expect(savingsDetail.find(Description).text()).toEqual(
      "You're planning 48 monthly deposits  to reach your $25,000 goal by March 2024."
    );

    spyOn.mockRestore();
  });
});
