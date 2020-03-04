import React from 'react';
import {
  Benefit,
  BenefitHeading,
  HomeContent,
  HomeHeading,
  ListOfBenefits
} from './Home.styles';

const RetirementOptimizationIcon = require('~/assets/icons/retirement_optimization.svg') as string;
const SavingGoalsIcon = require('~/assets/icons/saving_goals.svg') as string;
const StudentLoanManagementIcon = require('~/assets/icons/student_loan_management.svg') as string;
const CreditCardManagementIcon = require('~/assets/icons/credit_card.svg') as string;
const InsuranceIcon = require('~/assets/icons/insurance.svg') as string;

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <HomeContent>
      <HomeHeading>
        A single platform for all of your financial benefits
      </HomeHeading>
      <ListOfBenefits>
        <Benefit disabled>
          <img
            src={RetirementOptimizationIcon}
            width={80}
            height={80}
            alt="Retirement Optimization"
          />
          <BenefitHeading>Retirement Optimization</BenefitHeading>
        </Benefit>

        <Benefit>
          <Link to="/savings">
            <img
              src={SavingGoalsIcon}
              width={80}
              height={80}
              alt="Saving Goals"
            />
            <BenefitHeading>Saving Goals</BenefitHeading>
          </Link>
        </Benefit>

        <Benefit disabled>
          <img
            src={StudentLoanManagementIcon}
            width={80}
            height={80}
            alt="Student Loan Management"
          />
          <BenefitHeading>Student Loan Management</BenefitHeading>
        </Benefit>

        <Benefit disabled>
          <img
            src={CreditCardManagementIcon}
            width={80}
            height={80}
            alt="Credit Card Management"
          />
          <BenefitHeading>Credit Card Management</BenefitHeading>
        </Benefit>

        <Benefit disabled>
          <img src={InsuranceIcon} width={80} height={80} alt="Insurance" />
          <BenefitHeading>Insurance</BenefitHeading>
        </Benefit>
      </ListOfBenefits>
    </HomeContent>
  );
};

export default Home;
