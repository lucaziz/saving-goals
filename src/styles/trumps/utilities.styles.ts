import { theme } from '../theme/theme';

export const trumpsUtilities = () => `
  .centered-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    &__full {
      flex: 1;
    }
  }

  .default-font {
    font-family: ${theme.global.defaultFont};
  }

  .secondary-font {
    font-family: ${theme.global.secondaryFont};
  }
`;
