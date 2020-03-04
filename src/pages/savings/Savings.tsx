import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { SavingGoalsState } from '~reducers';

const Savings = (props: SavingGoalsState) => {
  const { goals } = props;

  if (Array.isArray(goals) && !goals.length) {
    return <Redirect to="/savings/detail" />;
  }

  return (
    <div className="container">
      <h1>Savings</h1>
      <Link to="/savings/go-to-college">Go to College!</Link>
    </div>
  );
};

const mapStateToProps = (state: SavingGoalsState) => ({
  goals: state.goals
});

export default connect(mapStateToProps)(Savings);
