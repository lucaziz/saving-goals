export interface Theme {
  colors: ColorsTheme;
  space: number[];
  breakpoints: string[];
  global: GlobalTheme;
}

// Global
export interface GlobalTheme {
  defaultFont: string;
  secondaryFont: string;
  gutterSpace: number;
}

// Sizes
export interface SizeTheme {
  small: string | number;
  medium: string | number;
  large: string | number;
}

export interface ColorsTheme {
  blue: string;
  lightBlue: string;
  red: string;
  green: string;
  yellow: string;
  black: string;
  almostBlack: string;
  darkGrey: string;
  grey: string;
  lightGrey: string;
  superlightGrey: string;
  greyBlue: string;
  white: string;
}
