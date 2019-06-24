import React from 'react'
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types'

/** make StyledMessageList alway display at top right of the screen.*/
const StyledMessageList = styled.div`
  position: fixed;
  right: 0;
  top: 0;
`;
/** 
 * keyframes to make message move into the screen from the right 
 * and then display for a while before disappear
 * */
const messageInKeyframe = keyframes`
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
`

const StyledMessage = styled.p`
  /** change message background color follow isErrorMessage*/
  background: ${props => props.isErrorMessage ? '#EB5757' : '#2F80ED' };
  color: white;
  margin: 0 1em 0;
  padding:10px;
  font-weight: bold;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  visibility: visible;
  overflow: hidden;
  -webkit-animation: ${messageInKeyframe} 2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  animation: ${messageInKeyframe} 2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  /** add margin top for first child */
  &:nth-child(1) {
    margin-top: 1em;
  }
`;

/** div to display multiple messages */
const Message = ({messages}) => {
  return (
    <StyledMessageList>
      { 
        messages.map(({id,message,isErrorMessage}) => (
          <StyledMessage key={id} isErrorMessage={isErrorMessage}>
            {message}
          </StyledMessage>
        ))
      }
    </StyledMessageList>
  )
}

Message.defaultProps = {
  messages: [],
}

Message.propTypes={
  /** array of messages to be display.*/
  messages: PropTypes.arrayOf(PropTypes.shape({
    /** id of message*/
    id :PropTypes.number.isRequired,
    /** message string to display*/
    message:PropTypes.string.isRequired,
    /** boolean indicate message type*/
    isErrorMessage:PropTypes.bool.isRequired,
  })),
}

export default Message
