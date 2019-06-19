import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap');
    font-family: 'Nunito Sans', sans-serif;
    color: #57586D;
    margin: 0;
    padding: 0;
  }

  button {
    background: white;
    border: 2px solid;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    padding: 5px 10px;
    &:hover 
        {
        color: white;
        background-color: black;
        border-color: black;
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