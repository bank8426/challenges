import React from 'react'
import styled from 'styled-components'

/* The container */
const StyledLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  @media (max-width: 1280px) {
    font-size: 20px;
  }
  @media (max-width: 1024px) {
    font-size: 18px;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
      background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  & input:checked ~ .checkmark {
      background-color: #2196F3;
  }

  /* Show the indicator (dot/circle) when checked */
  & input:checked ~ .checkmark:after {
      display: block;
  }

  /* Style the indicator (dot/circle) */
  & .checkmark:after {
    margin: 25%;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background: white;
  } 
`
/* Hide the browser's default radio button */
const StyledRadioButton = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`
const StyledCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
  -webkit-transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  /* Create the indicator (the dot/circle - hidden when not checked) */
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`
const StyledH3 = styled.h3`
  display:inline;
`
const RadioButton = ({name,handleClick,displayMessage,checked}) => {
  return (
    <StyledLabel>
      <StyledRadioButton
        type="radio"
        name={name}
        onChange={ () => {handleClick()}} 
        checked={checked}
      />
      <StyledH3>{displayMessage}</StyledH3>
      <StyledCheckmark className="checkmark"></StyledCheckmark>
    </StyledLabel>
  )
}

export default RadioButton
