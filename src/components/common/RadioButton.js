import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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

/* span to display styled that represent radio button*/
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

/* h3 to display text for radio button*/
const StyledH3 = styled.h3`
  display:inline;
`

/**
 * label to display radio button with styled
 */
const RadioButton = ({name,handleChange,displayMessage,checked}) => {
  return (
    <StyledLabel>
      <StyledRadioButton
        type="radio"
        name={name}
        onChange={ () => {handleChange()}} 
        checked={checked}
      />
      <StyledH3>{displayMessage}</StyledH3>
      <StyledCheckmark className="checkmark"></StyledCheckmark>
    </StyledLabel>
  )
}

RadioButton.defaultProps = {
  name:'',
  handleChange: () => {},
  displayMessage :'',
  checked:false,
}

RadioButton.propTypes={
  /** string name of radio button*/
  name:PropTypes.string.isRequired,
  /** function that will call when click on radio button*/
  handleChange: PropTypes.func.isRequired,
  /** 
  * display text that will show along radio button
  * can be number or string
  */
  displayMessage :PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  /** boolean default check state for radio button */
  checked:PropTypes.bool.isRequired,
}

export default RadioButton
