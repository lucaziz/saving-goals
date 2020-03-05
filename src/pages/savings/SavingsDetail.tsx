import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Amount,
  BackButton,
  Description,
  Field,
  FieldsRow,
  H3,
  InputTitle,
  MonthlyAmount,
  SavingDetailContent,
  SavingDetailHeading,
  SavingDetailTitle,
  SavingsResults,
  Section,
  SubTitle,
  Title,
  Error
} from './SavingsDetail.styles';

import Input from '~components/input/Input';
import MonthPicker from '~components/month-picker/MonthPicker';
import Button from '~components/button/Button';

import { Actions, addGoal, editGoal } from '~actions';
import { Goals, SavingGoalsState } from '~reducers';
import { Loading } from '~components/loading/Loading';
import { currencyMask } from '~utils/currencyMask';

const arrowIcon = require('~/assets/icons/arrow.svg') as string;
const houseIcon = require('~/assets/icons/house.svg') as string;

const SavingsDetail = (
  props: SavingGoalsState & Actions & { location: any }
) => {
  const { addGoal, editGoal, location, goals } = props;
  const [goalData, setGoalData] = useState({
    title: '',
    amount: 0,
    reach: 0,
    lastMonth: '',
    monthlyAmount: 0
  });
  const [loading, setLoading] = useState(true);
  const [duplicatedGoal, setDuplicatedGoal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [monthlyAmount, setMonthlyAmount] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (location.state) {
      setEditMode(true);
      const goalToEdit = goals.filter(
        (goal: Goals) => goal.title === location.state.title
      )[0];
      setGoalData(goalToEdit);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    setDuplicatedGoal(false);
    if (goalData.amount > 0) {
      const calcMonthlyAmount = goalData.amount / goalData.reach;
      setMonthlyAmount(calcMonthlyAmount);
    } else {
      setMonthlyAmount(0);
    }
  }, [goalData]);

  const handleChangeTitle = (event: React.FormEvent<HTMLInputElement>) =>
    setGoalData({ ...goalData, title: event.currentTarget.value });

  const handleChangeAmount = (value: string) => {
    const normalizedValue = value.replace(/\D+/g, '');
    setGoalData({
      ...goalData,
      amount: parseFloat(normalizedValue)
    });
  };

  const handleChangeReach = (value: number, lastMonth: string) => {
    setGoalData({ ...goalData, reach: value, lastMonth });
  };

  const handleSubmit = () => {
    if (editMode) {
      editGoal(goalData);
    } else {
      const isDuplicatedGoal = goals.find(
        (goal: Goals) =>
          goal.title.toLowerCase() === goalData.title.toLowerCase()
      );
      if (isDuplicatedGoal) {
        setDuplicatedGoal(true);
        return null;
      }
      addGoal(goalData);
    }
    return history.push('/savings');
  };

  if (loading) {
    return (
      <div className="centered-content centered-content__full">
        <Loading />
      </div>
    );
  } else {
    return (
      <Section>
        <SavingDetailHeading>
          <BackButton to={!goals.length ? '/' : '/savings'}>
            <img src={arrowIcon} width={14} height={25} alt="Back" />
          </BackButton>
          <H3>
            {editMode ? 'Your ' : "Let's plan your "}
            <strong>saving goal.</strong>
          </H3>
        </SavingDetailHeading>
        <SavingDetailContent>
          <SavingDetailTitle>
            <img src={houseIcon} width={50} height={54} alt="Back" />
            {editMode ? (
              <Title>{goalData.title}</Title>
            ) : (
              <InputTitle
                onChange={handleChangeTitle}
                type="text"
                placeholder="What is your goal?"
                autoFocus
                className={duplicatedGoal && 'has-error'}
              />
            )}
            <SubTitle>Saving goal</SubTitle>
          </SavingDetailTitle>
          <FieldsRow>
            <Field>
              <Input
                type="text"
                name="totalAmount"
                label="Total amount"
                icon="$"
                min="0"
                placeholder="e.g. 25,000"
                value={
                  !goalData.amount
                    ? ''
                    : currencyMask(goalData.amount.toString())
                }
                onChange={handleChangeAmount}
              />
            </Field>
            <Field>
              <MonthPicker
                label="Reach by goal"
                monthsFromNow={goalData.reach || 48}
                onChange={handleChangeReach}
              />
            </Field>
          </FieldsRow>

          <SavingsResults>
            <MonthlyAmount>
              <span>Monthly amount</span>
              <Amount>
                ${currencyMask(parseFloat(monthlyAmount.toFixed(2)))}
              </Amount>
            </MonthlyAmount>
            <Description>
              You&apos;re planning&nbsp;
              <strong>{goalData.reach}&nbsp;monthly deposits</strong>&nbsp; to
              reach your <strong>${goalData.amount || 0}</strong> goal by&nbsp;
              <strong>{goalData.lastMonth}.</strong>
            </Description>
          </SavingsResults>

          <div className="centered-content">
            <Button
              disabled={goalData.title.trim() === '' || !goalData.amount}
              onClick={handleSubmit}
              size="large"
            >
              Finish
            </Button>
          </div>
          {duplicatedGoal && (
            <Error>you already have a goal with the same name :(</Error>
          )}
        </SavingDetailContent>
      </Section>
    );
  }
};

const mapStateToProps = (state: SavingGoalsState) => ({
  goals: state.goals
});

export default connect(mapStateToProps, { addGoal, editGoal })(SavingsDetail);
