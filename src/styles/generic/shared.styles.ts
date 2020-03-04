import { device } from '../tools/breakpoints.styles';
import { theme } from '../theme/theme';

export const genericShared = () => `
  address,
  h1, h2, h3, h4, h5, h6,
  blockquote, p, pre,
  dl, ol, ul,
  figure,
  hr,
  table,
  fieldset {
    margin-bottom: 1.3rem;
  }

  dd, ol, ul {
    margin-left: 1rem;
  }

  html { font-size: 62.5%; }

  body {
    font-family: ${theme.global.defaultFont};
    font-size: 1.6rem;
    font-weight: normal;
    background-color: ${theme.colors.superlightGrey};
  }

  amp-img {
    display: inline-block;
    align-self: flex-start;

    img {
        object-fit: contain;
    }
  }

  .container {
    margin: 0 auto;
    width: 100%;
    max-width: ${theme.breakpoints[2]};

    ${device.mobile} {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;
