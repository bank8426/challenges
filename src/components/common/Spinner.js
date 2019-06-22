import React from 'react'
import styled, { keyframes } from 'styled-components';
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

const StyledSpinner = styled.div`
  margin: 30px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-radius: 50%;
  border: 1em solid rgba(27, 149, 242, 0.2);
  border-left-color: #1b95f2;
  width: 3em;
  height: 3em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${spinKeyframe} 1.1s infinite linear;
  animation: ${spinKeyframe} 1.1s infinite linear;
  overflow: hidden;
`;

const Spinner = () => {
  return (
    <StyledSpinner/>
  )
}

export default Spinner
