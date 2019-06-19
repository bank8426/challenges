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
