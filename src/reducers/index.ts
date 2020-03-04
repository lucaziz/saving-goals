export interface Goals {
  title: string;
  amount: number;
  reach: string;
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
  console.log(action);
  if (action.type === 'ADD_GOAL') {
    return { ...state, ...[action.response] };
  }

  return state;
};

export default savingGoalsReducer;
