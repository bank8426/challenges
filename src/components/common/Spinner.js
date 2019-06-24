import React from 'react'
import styled, { keyframes } from 'styled-components';
/** keyframes to make spinnner rotate */
const spinKeyframe = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

export const StyledSpinner = styled.div`
  margin: 30px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-radius: 50%;
  border: 1em solid rgba(27, 149, 242, 0.2);
  /**make one border side to different color */
  border-left-color: #1b95f2;
  width: 3em;
  height: 3em;
  overflow: hidden;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${spinKeyframe} 1.1s infinite linear;
  animation: ${spinKeyframe} 1.1s infinite linear;
`;

/**
 * div to display spinning circle
 */
const Spinner = () => {
  return (
    <StyledSpinner/>
  )
}

export default Spinner
