import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Goals, SavingGoalsState } from '~/reducers';
import {
  BackButton,
  Section,
  SavingsHeading,
  H1,
  ListOfGoals,
  ItemGoal,
  LinkGoal,
  ItemGoalActions,
  RemoveButton
} from './Savings.styles';
import Button from '~/components/button/Button';
import { Actions, removeGoal } from '~/actions';

const arrowIcon = require('~/assets/icons/arrow.svg') as string;
const editIcon = require('~/assets/icons/edit.svg') as string;
const removeIcon = require('~/assets/icons/delete.svg') as string;

const Savings = (props: SavingGoalsState & Actions) => {
  const { goals, removeGoal } = props;

  if (Array.isArray(goals) && !goals.length) {
    return <Redirect to="/savings/detail" />;
  }

  const handleRemoveGoal = (title: string) => (
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.preventDefault();
    removeGoal(title);
  };

  return (
    <Section>
      <SavingsHeading>
        <BackButton to="/">
          <img src={arrowIcon} width={14} height={25} alt="Back" />
        </BackButton>
        <H1>Saving Goal</H1>
      </SavingsHeading>
      <ListOfGoals>
        {goals.map((goal: Goals) => (
          <ItemGoal key={goal.title}>
            <LinkGoal
              to={{
                pathname: '/savings/detail',
                state: { title: goal.title }
              }}
            >
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
        <Button as="Link" to="/savings/detail" size="medium">
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
