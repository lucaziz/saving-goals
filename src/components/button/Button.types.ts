import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactChild;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  loading?: boolean;
  disabled?: boolean;
  to?: string;
  rel?: string;
  as?: 'button' | 'Link';
  size?: 'medium' | 'large';
}
