export interface Goals {
  title: string;
  amount: number;
  reach: number;
  lastMonth: string;
  monthlyAmount: number;
}

export interface SavingGoalsState {
  goals: Goals[];
}

const initialState = (): SavingGoalsState => ({
  goals: []
});

const savingGoalsReducer = (
  state = initialState(),
  action: any
): SavingGoalsState => {
  if (action.type === 'ADD_GOAL') {
    return { goals: [...state.goals, ...[action.data]] };
  }

  if (action.type === 'EDIT_GOAL') {
    const newGoals = state.goals.map(goal => {
      let returnValue = { ...goal };
      if (goal.title === action.data.title) {
        returnValue = action.data;
      }
      return returnValue;
    });
    return { goals: newGoals };
  }

  if (action.type === 'REMOVE_GOAL') {
    const newGoals = state.goals.filter(goal => goal.title !== action.title);
    return { goals: newGoals };
  }

  return state;
};

export default savingGoalsReducer;
