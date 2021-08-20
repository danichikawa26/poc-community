import FliperColors from './fliper.colors';

interface IButtonTheme {
  enabledBackgroundGradient1: string;
  enabledBackgroundGradient2: string;
  disabledBackground: string;
  pressedBackground: string;
  shadow: string;
  disabledShadow: string;
  pressedShadow: string;
  enabledText: string;
  disabledText: string;
  enabledBorder: string;
  disabledBorder: string;
}

interface IInputTheme {
  inputFilled: string;
  label: string;
  labelFilled: string;
  inputBorderFilled: string;
  inputBorder: string;
}

export interface ThemeConfig {
  // NOVO TEMA
  colors?: {
    // system primary color
    primary?: string;
    // system accent/secondary color
    accent?: string;
    // system success color
    success?: string;
    // system error color
    error?: string;
    // system background color
    background?: string;
    // card background color
    cardBackground?: string;
    // card shadow color
    cardShadow?: string;
    // system default text color
    defaultText?: string;
    // system default disabled text color
    disabledDefaultText?: string;
    // header background color
    headerBackground?: string;
    // side menu background color
    sideMenuBackground?: string;
    // system tags color
    tag?: string;
    // system scroll bar color
    scrollbar?: string;
    // background card news without image
    cardNewsWithoutImage?: string;
    // color white is not immutable in multiple themes
    white?: string;

    // categorys colors

    fundIndexColors?: {
      lineEvolution?: string;
      IBOV?: string;
      poupanca?: string;
      CDI?: string;
    };

    categoryColors: {
      categoryCurrentAccount: string;
      categoryPostFixed: string;
      categoryInflation: string;
      categoryPreFixed: string;
      categoryMultimarket: string;
      categoryFunds: string;
      categoryVariableIncome: string;
      categoryInternational: string;
      categoryCurrency: string;
      categoryCriptoCurrency: string;
      categoryMetals: string;
      categoryProperty: string;
      categoryOthers: string;
    };

    table: {
      backgroundHeader: string;
      rowPrimary: string;
      rowSecondary: string;
    };

    primaryButton: IButtonTheme;

    secondaryButton: IButtonTheme;

    linkButton: IButtonTheme;

    input: IInputTheme;
  };
  text?: {
    fontFamily?: string;
    headline1?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    headline2?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    headline3?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    body?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    bodyBold?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    display?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    value?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    valueSecondary?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    smallText?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    smallTextBold?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    xSmallText?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    xSmallTextBold?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    button?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    error?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    label?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
    label2?: {
      fontSize?: number;
      fontWeight?: number | string;
    };
  };
  card?: {
    borderRadius?: number;
  };
}

const getDefaultThemeConfig = (): ThemeConfig => {
  return {
    // NOVO TEMA
    colors: {
      // system primary color
      primary: FliperColors.brandPrimary400,
      // system accent/secondary color
      accent: FliperColors.brandSecondary500,
      // system success color
      success: FliperColors.green300,
      // system error color
      error: FliperColors.red500,
      // system background color
      background: FliperColors.brandPrimary50,
      // card background color
      cardBackground: FliperColors.white,
      // card shadow color
      cardShadow: `rgba(0, 0, 0, 0.16)`,
      // system default text color
      defaultText: FliperColors.neutral500,
      // system default disabled text color
      disabledDefaultText: FliperColors.brandPrimary600A,
      // header background color
      headerBackground: FliperColors.white,
      // side menu background color
      sideMenuBackground: FliperColors.brandPrimary400,
      // system tags color
      tag: FliperColors.brandPrimary50,
      // system scroll bar color
      scrollbar: FliperColors.brandPrimary50,
      // background card news without image
      cardNewsWithoutImage: FliperColors.brandPrimary50,
      // color white is not immutable in multiple themes
      white: FliperColors.white,

      fundIndexColors: {
        lineEvolution: 'FliperColors.brandPrimary400',
        CDI: 'FliperColors.brandPrimary600',
        IBOV: 'FliperColors.neutral400',
        poupanca: 'FliperColors.categoryPreFixed',
      },

      // categorys colors
      categoryColors: {
        categoryCurrentAccount: FliperColors.categoryCurrentAccount,
        categoryPostFixed: FliperColors.categoryPostFixed,
        categoryInflation: FliperColors.categoryInflation,
        categoryPreFixed: FliperColors.categoryPreFixed,
        categoryMultimarket: FliperColors.categoryMultimarket,
        categoryFunds: FliperColors.categoryFunds,
        categoryVariableIncome: FliperColors.categoryVariableIncome,
        categoryInternational: FliperColors.categoryInternational,
        categoryCurrency: FliperColors.categoryCurrency,
        categoryCriptoCurrency: FliperColors.categoryCriptoCurrency,
        categoryMetals: FliperColors.categoryMetals,
        categoryProperty: FliperColors.categoryProperty,
        categoryOthers: FliperColors.categoryOthers,
      },

      table: {
        backgroundHeader: FliperColors.brandPrimary50,
        rowPrimary: FliperColors.neutralLightness,
        rowSecondary: FliperColors.brandPrimary50,
      },
      primaryButton: {
        // primary button gradient color 1
        enabledBackgroundGradient1: FliperColors.brandSecondary500,
        // primary button gradient color 2
        enabledBackgroundGradient2: FliperColors.brandSecondary600,

        disabledBackground: FliperColors.neutral100,

        pressedBackground: FliperColors.brandSecondary600,

        shadow: `rgba(0, 0, 0, 0.16)`,

        disabledShadow: 'transparent',

        pressedShadow: 'transparent',

        enabledText: FliperColors.white,

        disabledText: FliperColors.neutral200,

        enabledBorder: FliperColors.brandSecondary500,

        disabledBorder: FliperColors.neutral100,
      },
      secondaryButton: {
        // primary button gradient color 1
        enabledBackgroundGradient1: 'transparent',
        // primary button gradient color 2
        enabledBackgroundGradient2: 'transparent',

        disabledBackground: 'transparent',

        pressedBackground: FliperColors.brandPrimary400A,

        shadow: 'transparent',

        disabledShadow: 'transparent',

        pressedShadow: 'transparent',

        enabledText: FliperColors.brandPrimary400,

        disabledText: FliperColors.neutral200,

        enabledBorder: FliperColors.brandPrimary400,

        disabledBorder: 'transparent',
      },
      linkButton: {
        // primary button gradient color 1
        enabledBackgroundGradient1: 'transparent',
        // primary button gradient color 2
        enabledBackgroundGradient2: 'transparent',

        disabledBackground: 'transparent',

        pressedBackground: FliperColors.brandPrimary400A,

        shadow: 'transparent',

        disabledShadow: 'transparent',

        pressedShadow: 'transparent',

        enabledText: FliperColors.red500,

        disabledText: FliperColors.neutral200,

        enabledBorder: 'transparent',

        disabledBorder: 'transparent',
      },
      input: {
        inputFilled: FliperColors.brandPrimary400,

        label: FliperColors.neutral500,

        labelFilled: FliperColors.brandPrimary400,

        inputBorderFilled: FliperColors.inputBoder,

        inputBorder: FliperColors.neutral500,
      },
    },
    text: {
      fontFamily: 'Proxima Nova',
      headline1: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      headline2: {
        fontSize: 28,
        fontWeight: 'bold',
      },
      headline3: {
        fontSize: 20,
        fontWeight: 500,
      },
      body: {
        fontSize: 16,
        fontWeight: 500,
      },
      bodyBold: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      display: {
        fontSize: 32,
        fontWeight: 200,
      },
      value: {
        fontSize: 22,
        fontWeight: 'bold',
      },
      valueSecondary: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      smallText: {
        fontSize: 14,
        fontWeight: 500,
      },
      smallTextBold: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      xSmallText: {
        fontSize: 12,
        fontWeight: 500,
      },
      xSmallTextBold: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      button: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      error: {
        fontSize: 14,
        fontWeight: 500,
      },
      label: {
        fontSize: 14,
        fontWeight: 500,
      },
    },
    card: {
      borderRadius: 20,
    },
  };
};

export const createThemeConfig = (themeConfig: ThemeConfig): any => {
  return Object.assign(getDefaultThemeConfig(), themeConfig);
};
