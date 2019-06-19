import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap');
    font-family: 'Nunito Sans', sans-serif;
    color: #57586D;
    margin: 0;
    padding: 0;
  }

  h1 {
    @media (max-width: 1024px) {
      font-size: 1.5em;
    }
  }

  h2 {
    @media (max-width: 1024px) {
      font-size: 1.1em;
    }
    @media (max-width: 834px) {
      font-size: 1em;
    }
    @media (max-width: 768px) {
      font-size: 1.2em;
    }
  }

  h3 {
    @media (max-width: 1024px) {
      font-size: 0.85em;
    }
  }

  button {
    background: white;
    border: 2px solid;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    padding: 5px 10px;
    &:hover 
        {
        color: white;
        background-color: black;
        border-color: black;
    }

    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: 0.8em;
    }
  }

  button.primary{
    border-color: #1b53f2;
    color: #1b53f2;
    &:hover {
      color: #fff;
      background-color: #0069d9;
      border-color: #0062cc;
    }
  }
;
`