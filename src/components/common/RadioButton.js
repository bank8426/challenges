import React from 'react'
import styled from 'styled-components'

/* The container */
const StyledLabel = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

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

    /* Create the indicator (the dot/circle - hidden when not checked) */
    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`
const RadioButton = ({name,handleClick,displayMessage,checked}) => {
  return (
    <StyledLabel>
      <StyledRadioButton
        type="radio"
        name={name}
        onChange={ () => {handleClick()}} 
        checked={checked}
      /> {displayMessage}
      <StyledCheckmark className="checkmark"></StyledCheckmark>
    </StyledLabel>
  )
}

export default RadioButton
