import React from 'react'
import {ThemeProvider} from '@material-ui/core'
import {StylesProvider} from "@material-ui/core";


import theme from '../src/theme'

export const decorators = [
  (Story) => (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </StylesProvider >
  ),
]

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: {argTypesRegex: '^on.*'},
};

