import { theme } from '../theme/theme';

export const trumpsUtilities = () => (`
  .full-img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    // amp
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .default-font {
    font-family: ${theme.global.defaultFont};
  }

  .secondary-font {
    font-family: ${theme.global.secondaryFont};
  }
`);
