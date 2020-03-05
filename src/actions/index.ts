/*
 * action types
 */
import { Goals } from '~reducers';

export interface Actions {
  addGoal: (data: Goals) => void;
  removeGoal: (title: string) => void;
  editGoal: (data: Goals) => void;
}

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';
export const EDIT_GOAL = 'EDIT_GOAL';

/*
 * action creators
 */
export const addGoal = (data: Goals) => (dispatch: any) => {
  return dispatch({
    type: ADD_GOAL,
    data
  });
};

export const removeGoal = (title: string) => (dispatch: any) => {
  console.log(title);
  return dispatch({
    type: REMOVE_GOAL,
    title
  });
};

export const editGoal = (data: Goals) => (dispatch: any) => {
  return dispatch({
    type: EDIT_GOAL,
    data
  });
};
