import React from 'react';

export interface InputProps {
  type: string;
  name: string;
  value?: string;
  icon?: React.ReactNode | string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  label?: string;
  hasError?: boolean;
  errorMsg?: string;
  disabled?: boolean;
  loading?: boolean;
  placeholder?: string;
}
