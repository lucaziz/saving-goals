import React from 'react';
import {
  BackButton,
  Field,
  FieldsRow,
  H3,
  SavingDetailContent,
  SavingDetailHeading,
  Section
} from './SavingsDetail.styles';
import Input from '~components/input/Input';
import MonthPicker from '~components/month-picker/MonthPicker';

const arrowIcon = require('~/assets/icons/arrow.svg') as string;

const SavingsDetail = () => {
  return (
    <Section>
      <SavingDetailHeading>
        <BackButton to="/savings">
          <img src={arrowIcon} width={14} height={25} alt="Back" />
        </BackButton>
        <H3>
          Let&apos;s plan your <strong>saving goal.</strong>
        </H3>
      </SavingDetailHeading>
      <SavingDetailContent>
        <input type="text" />
        <h2>Saving goal</h2>

        <FieldsRow>
          <Field>
            <Input
              type="text"
              name="totalAmount"
              label="Total amount"
              icon="$"
              placeholder="e.g. 25,000"
            />
          </Field>
          <Field>
            <MonthPicker label="Reach by goal" monthsFromNow={6} />
          </Field>
        </FieldsRow>
      </SavingDetailContent>
    </Section>
  );
};

export default SavingsDetail;
