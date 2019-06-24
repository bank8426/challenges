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

  label{
    @media (max-width: 1280px) {
    font-size: 20px;
    }
    @media (max-width: 1024px) {
      font-size: 18px;
    }
  }

  button {
    background: white;
    border: 2px solid;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    padding: 5px 10px;
    -webkit-transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
    transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    &:hover 
    {
      color: white;
      background-color: black;
      border-color: black;
    }
    &:active {
      color: rgba(0,0,0,0.5);
      background-color: black;
      border-color: black;
      outline: none;
    }
    
    &:focus {
      outline:0;
    }

    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: 0.8em;
    }
  }

  button.primary{
    border-color: #1b53f2;
    background-color: white;
    color: #1b53f2;
    &:hover {
      color: white;
      background-color: #0069d9;
      border-color: #0062cc;
    }
    &:active {
      color: rgba(255, 255, 255, 0.5);
      background-color: #0069d9;
      border-color: #0062cc;
    }
  }
;
`