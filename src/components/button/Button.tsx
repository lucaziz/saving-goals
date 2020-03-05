import React from 'react';
import { ButtonProps } from './Button.types';
import { CustomButton } from './Button.styles';

const Button = (props: ButtonProps) => {
  const { onClick, loading, disabled, children, size, ...defaultProps } = props;

  return (
    <CustomButton
      onClick={onClick}
      disabled={disabled || loading}
      itemType={size}
      {...defaultProps}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
