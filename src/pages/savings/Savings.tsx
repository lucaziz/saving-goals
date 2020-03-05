import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Goals, SavingGoalsState } from '~/reducers';
import {
  Section,
  SavingsHeading,
  HeadingTitle,
  ListOfGoals,
  ItemGoal,
  LinkGoal,
  ItemGoalActions,
  RemoveButton
} from './Savings.styles';
import Button from '~/components/button/Button';
import BackButton from '~/components/back-button/BackButton';
import { Actions, removeGoal } from '~/actions';

const editIcon = require('~/assets/icons/edit.svg') as string;
const removeIcon = require('~/assets/icons/delete.svg') as string;

const Savings = (props: SavingGoalsState & Partial<Actions>) => {
  const { goals, removeGoal } = props;
  const history = useHistory();
  if (Array.isArray(goals) && !goals.length) {
    return <Redirect to="/savings/detail" />;
  }

  const handleRemoveGoal = (title: string) => (
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.stopPropagation();
    removeGoal(title);
  };

  const handleEditGoal = (goal: Goals) => () =>
    history.push('/savings/detail', { title: goal.title });

  const handleAddNewGoal = () => history.push('/savings/detail');

  return (
    <Section>
      <SavingsHeading>
        <BackButton to="/" />
        <HeadingTitle>Saving Goal</HeadingTitle>
      </SavingsHeading>
      <ListOfGoals>
        {goals.map((goal: Goals) => (
          <ItemGoal key={goal.title}>
            <LinkGoal onClick={handleEditGoal(goal)}>
              {goal.title}
              <ItemGoalActions>
                <img src={editIcon} width={16} height={16} alt="Edit Goal" />

                <RemoveButton onClick={handleRemoveGoal(goal.title)}>
                  <img
                    src={removeIcon}
                    width={16}
                    height={16}
                    alt="Remove Goal"
                  />
                </RemoveButton>
              </ItemGoalActions>
            </LinkGoal>
          </ItemGoal>
        ))}
      </ListOfGoals>

      <div className="centered-content">
        <Button onClick={handleAddNewGoal} size="medium">
          Add a new goal
        </Button>
      </div>
    </Section>
  );
};

const mapStateToProps = (state: SavingGoalsState) => ({
  goals: state.goals
});

export default connect(mapStateToProps, { removeGoal })(Savings);
