import React, { useEffect, useRef } from 'react';
import { InputProps } from './Input.types';
import {
  CustomInput,
  CustomError,
  Label,
  FormField,
  FieldIcon,
  FieldInput
} from './Input.styles';

const Input = (props: InputProps) => {
  const inputRef = useRef(null);

  const {
    label,
    value,
    onChange,
    type,
    name,
    hasError,
    errorMsg,
    disabled,
    loading,
    icon,
    placeholder,
    min
  } = props;

  useEffect(() => {
    if (inputRef.current.value) {
      onChange(inputRef.current.value);
    }
  }, [inputRef]);

  const inputChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (!loading && !disabled) {
      return onChange && onChange(event.currentTarget.value);
    }
  };

  return (
    <FormField>
      {label && <Label htmlFor={`form-field-${name}`}>{label}</Label>}
      <FieldInput>
        {icon && <FieldIcon>{icon}</FieldIcon>}
        <CustomInput
          value={value}
          ref={inputRef}
          type={type}
          name={name}
          disabled={disabled}
          readOnly={loading}
          id={`form-field-${name.toLowerCase()}`}
          onChange={inputChange}
          min={min}
          placeholder={placeholder}
        />
      </FieldInput>
      {hasError && <CustomError>{errorMsg}</CustomError>}
    </FormField>
  );
};

export default Input;
