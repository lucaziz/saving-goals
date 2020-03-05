import React, { useEffect, useState } from 'react';
import { MonthPickerProps } from './MonthPicker.types';
import { FormField, Label } from '~/components/input/Input.styles';
import moment from 'moment';
import {
  ButtonAdd,
  ButtonSubtract,
  FieldMonthPicker,
  Month
} from '~/components/month-picker/MonthPicker.styles';

const arrowIcon = require('~/assets/icons/arrow.svg') as string;

const MonthPicker = (props: MonthPickerProps) => {
  const { label, onChange, monthsFromNow } = props;
  const today = moment(); // should get from server
  const startDate = moment(today).add(monthsFromNow, 'months');

  const [chosenDate, setChosenDate] = useState(startDate);

  useEffect(() => {
    onChange(monthsFromNow, startDate.format('MMMM YYYY'));
  }, [monthsFromNow]);

  const addMonth = () => {
    const newDate = moment(chosenDate).add(1, 'months');
    const rangeOfMonths = Math.round(
      moment(newDate).diff(moment(today), 'months', true)
    );
    onChange && onChange(rangeOfMonths, moment(newDate).format('MMMM YYYY'));
    return setChosenDate(newDate);
  };

  const subtractMonth = () => {
    const newDate = moment(chosenDate).subtract(1, 'months');
    const rangeOfMonths = Math.round(
      moment(newDate).diff(moment(today), 'months', true)
    );
    if (rangeOfMonths < 1) {
      return null;
    }
    onChange && onChange(rangeOfMonths, moment(newDate).format('MMMM YYYY'));
    return setChosenDate(newDate);
  };

  const currentDate = moment(chosenDate);
  return (
    <FormField>
      {label && <Label htmlFor={`form-field-${name}`}>{label}</Label>}
      <FieldMonthPicker>
        <ButtonSubtract onClick={subtractMonth}>
          <img src={arrowIcon} width={12} height={22} alt="Previews month" />
        </ButtonSubtract>
        <Month>
          {currentDate.format('MMMM')}
          <small>{currentDate.format('YYYY')}</small>
        </Month>
        <ButtonAdd onClick={addMonth}>
          <img src={arrowIcon} width={12} height={22} alt="Next month" />
        </ButtonAdd>
      </FieldMonthPicker>
    </FormField>
  );
};

export default MonthPicker;
