/*
 * action types
 */
import { Goals } from '~reducers';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';
export const EDIT_GOAL = 'EDIT_GOAL';

/*
 * action creators
 */
export function addGoal(data: Goals) {
  return { type: ADD_GOAL, data };
}
export function removeGoal(title: string) {
  return { type: REMOVE_GOAL, title };
}
export function editGoal(data: Goals) {
  return { type: EDIT_GOAL, data };
}
