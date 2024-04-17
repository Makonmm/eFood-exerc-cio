import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  beige: '#ffebd9',
  white: '#ffffff',
  yellow: '#ffb930',
  lightBeige: '#fff8f2'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '380'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none
  }

  body {
    background-color: ${colors.lightBeige}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

  }
`
