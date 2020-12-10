const { createMuiTheme, responsiveFontSizes } = require("@material-ui/core");

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    fontFamily: 'Spartan, sans-serif',
    fontWeightBold: '600',
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 14
    },
    caption: {
      fontSize: 12
    },
    overline: {
      fontSize: 12,
      textTransform: "uppercase"
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 14
    },
    h1: {
      fontSize: 70
    },
    h2: {
      fontSize: 57
    },
    h3: {
      fontSize: 48,
      fontWeight: '600'
    },
    h4: {
      fontSize: 32
    },
    h5: {
      fontSize: 28
    },
    h6: {
      fontSize: 24,
      fontWeight: '600'
    }
  },

  palette: {
    common: {
      white: '#fff',
      black: '#2F3542',
    },
    type: 'light',
    primary: {
      main: '#2c3d63'
    },
    secondary: {
      main: '#addcca'
    },
    error: {
      main: '#ff6f5e'
    }
  },

  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },

  overrides: {
    MuiPaper: {
      outlined: {
        padding: 0
      },
      elevation4: {
        boxShadow: 'none',
        border: '#2F3542'
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: '1em'
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#fff',
        color: '#2c3d63'
      }
    },
    MuiDaTable: {
      paper: {
        boxShadow: 'none'
      }
    },
    MuiButton: {
      contained: {
        boxShadow: 'none'
      }
    },
    MuiListItem: {
      dense: {
        padding: 0,
        paddingTop: 0,
        paddingBottom: 0
      },
      root: {
        paddingTop: 0,
        paddingBottom: 0
      }
    },
    MuiCardContent: {
      root: {
        padding: 8
      }
    },
    MuiCardMedia: {
      img: {
        objectFit: 'fill'
      },
      media: {
        width: '90%',
        margin: '25px auto'
      }
    }
  }
});

export default responsiveFontSizes(theme);