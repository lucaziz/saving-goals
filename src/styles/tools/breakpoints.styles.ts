import { math } from 'polished';
import { theme } from '../theme/theme';

const { breakpoints } = theme;

export const device = {
  mobile: `@media screen and (max-width: ${math(`${breakpoints[0]} - 1px`)})`,
  tablet: `@media screen and (min-width: ${breakpoints[0]}) and (max-width: ${breakpoints[1]})`,
  desktop: `@media screen and (min-width: ${math(`${breakpoints[1]} + 1px`)})`
};
