import React from 'react';
import { ButtonProps } from './Button.types';
import { CustomButton, CustomLink } from './Button.styles';

const Button = (props: ButtonProps) => {
  const {
    onClick,
    loading,
    disabled,
    children,
    to,
    as,
    size,
    ...defaultProps
  } = props;

  if (as === 'Link') {
    return (
      <CustomLink to={to} itemType={size}>
        {children}
      </CustomLink>
    );
  }

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
