import React from 'react'
import styled from 'styled-components';

const StyledMessage = styled.p`
  color: red;
  margin: 1em 0;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const Message = ({message}) => {
  return (
    <StyledMessage>
      {message}
    </StyledMessage>
  )
}

export default Message
