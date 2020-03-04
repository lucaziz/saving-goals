import { Theme } from './theme.types';

import { colors } from './colors.theme';
import { fontRubik, fontWorkSans } from './fonts.theme';

export const theme: Theme = {
  colors,
  space: [0, 0.4, 0.8, 1.6, 2.4, 3.2, 4.8, 6.4, 12.8, 19.2, 25.6, 51.2],
  breakpoints: ['768px', '1024px', '1200px'],
  global: {
    defaultFont: fontWorkSans,
    secondaryFont: fontRubik,
    gutterSpace: 16
  }
};
