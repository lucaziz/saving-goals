import { createGlobalStyle } from 'styled-components';

import { genericBoxSizing } from './generic/boxSizing.styles';
import { genericTyphography } from './generic/typography.syles';
import { genericReset } from './generic/reset.styles';
import { genericShared } from './generic/shared.styles';
import { trumpsUtilities } from './trumps/utilities.styles';

const GlobalStyle = createGlobalStyle(
  genericReset,
  genericBoxSizing,
  genericTyphography,
  genericShared,
  trumpsUtilities
);

export default GlobalStyle;
