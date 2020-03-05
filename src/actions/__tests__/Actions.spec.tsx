import configureStore from 'redux-mock-store';
import { addGoal, editGoal, removeGoal } from '~/actions';
import { Goals } from '~/reducers';

let middlewares: any;
let mockStore: any;

describe('Actions', () => {
  beforeEach(() => {
    middlewares = [];
    mockStore = configureStore(middlewares);
  });

  it('addGoal should dispatch action and return expected payload', () => {
    const initialState = {};
    const store = mockStore(initialState);

    const data: Goals = {
      title: 'Go to college',
      amount: 25000,
      reach: 48,
      lastMonth: 'October 2025',
      monthlyAmount: 525
    };

    addGoal(data)(store.dispatch);

    const actions = store.getActions();
    const expectedPayload = { type: 'ADD_GOAL', data };
    expect(actions).toEqual([expectedPayload]);
  });

  it('removeGoal should dispatch action and return expected payload', () => {
    const initialState = {};
    const store = mockStore(initialState);

    removeGoal('Go to college')(store.dispatch);

    const actions = store.getActions();

    const expectedPayload = { type: 'REMOVE_GOAL', title: 'Go to college' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('editGoal should dispatch action and return expected payload', () => {
    const initialState = {};
    const store = mockStore(initialState);

    const data: Goals = {
      title: 'Go to college',
      amount: 25000,
      reach: 48,
      lastMonth: 'October 2025',
      monthlyAmount: 525
    };

    editGoal(data)(store.dispatch);

    const actions = store.getActions();

    const expectedPayload = { type: 'EDIT_GOAL', data };
    expect(actions).toEqual([expectedPayload]);
  });
});
