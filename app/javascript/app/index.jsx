import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import WebFont from 'webfontloader';
import { ThemeProvider } from 'styled-components';

import './global'
import theme from './theme';

import App from './Components/App'

WebFont.load({
  google: {
    families: ['PT Sans:300,400,500,700', 'sans-serif'],
  },
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    document.body.appendChild(document.createElement('div')),
  )
})
