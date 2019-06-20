import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
`;

const StyledMessage = styled.p`
  color: white;
  margin: 1em 1em 0;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  background: #2F80ED;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  padding:10px;
  &:nth-child(n+2) {
    margin-top: 0em;
  }
  visibility: visible;
  -webkit-animation: messageIn 2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  animation: messageIn 2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  overflow: hidden;
  
  @-webkit-keyframes messageIn {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      
    }
    20% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    80% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }
  @keyframes messageIn {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      
    }
    20% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    80% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }
`;

const Message = ({message}) => {
  return (
    <StyledContainer>
      { message 
        ? 
        <StyledMessage>
          {message}
        </StyledMessage> : null
      }
    </StyledContainer>

  )
}

export default Message
