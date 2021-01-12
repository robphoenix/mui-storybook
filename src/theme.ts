import { createMuiTheme } from '@material-ui/core';
import { Components } from '@material-ui/core/styles/components';

const palette = {
  primary: {
    main: '#ff69b4',
  },
};

const components: Components = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      color: 'primary',
    },
    styleOverrides: {
      containedPrimary: {
        backgroundColor: 'lightblue',
        ':hover': {
          backgroundColor: 'blue',
        },
      },
    },
  },
};

export default createMuiTheme({ palette, components });
