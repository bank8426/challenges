import React,{useState} from 'react'
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import * as paymentActions from '../../redux/actions/paymentActions';
import * as messageActions from '../../redux/actions/messageActions';
import { bindActionCreators } from 'redux'
import RadioButton from '../common/RadioButton';
import PropTypes from 'prop-types'

const cardPaymentFadeInKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const StyledCardPayment = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0.95);
  padding: 15% 20px;
  box-sizing: border-box;
  border-radius: 10px;
  opacity: 0;
  -webkit-animation: ${cardPaymentFadeInKeyframes} 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1) 0.05s;
  animation: ${cardPaymentFadeInKeyframes} 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1) 0.05s;
`;

const StyledPaymentList = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  padding: 0 100px;
  @media (max-width: 1280px) {
    padding: 0 50px;
  }
  @media (max-width: 1024px) {
    padding: 0px;
  }
  @media (max-width: 768px) {
    padding: 0 80px;
  }
`;

const StyledHeader = styled.h2`
  text-align: center;
`;

export const StyledCloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  padding: 1px 8px;
  color: #1b53f2;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover{
    color: white;
    background-color: #1B95F2;
    border-color: #0062cc;
  }
  &:active {
    color: rgba(255, 255, 255, 0.5);
    background-color: #1B95F2;
    border-color: #0062cc;
  }
`;

const StyledPayButton = styled.button`
  display: block;
  margin: 2em auto;
`;
export const CardPayment = ({index,savePayment,addMessage,removeMessageById,currency,onClose}) => {
  const payments = [10, 20, 50, 100, 500];
  const [selectedAmount, setSelectedAmount] = useState(payments[0])
  const handlePay = () => {
    savePayment(index, selectedAmount, currency).catch(error => {
      const id = Date.now();
      addMessage('Something went wrong please try again later.',id ,true);
      setTimeout(function() {
        removeMessageById(id)
      }, 2000);
    })
  }
  return (
    <StyledCardPayment>
      <StyledCloseButton onClick={() => onClose()}>X</StyledCloseButton>
      <StyledHeader>Select the amount to donate ({currency})</StyledHeader>
      <StyledPaymentList>
        {
          payments.map((amount, j) => (
            <RadioButton key={j}
              name={`payment${index}`} 
              handleChange={() => {setSelectedAmount(amount)}} 
              displayMessage={amount} 
              checked={amount===selectedAmount}/>
          ))
        }
      </StyledPaymentList>
      <StyledPayButton className='primary' onClick={() => handlePay()}>Pay</StyledPayButton>
    </StyledCardPayment>
  )
}

CardPayment.defaultProps ={
  index : 0,
  savePayment : () => {},
  addMessage : () => {},
  removeMessageById : () => {},
  currency : '',
  onClose : () => {},
}

CardPayment.propTypes={
  index:PropTypes.number.isRequired,
  savePayment: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
  removeMessageById: PropTypes.func.isRequired,
  currency:PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({ 
  savePayment: bindActionCreators(paymentActions.savePayment, dispatch),
  addMessage: bindActionCreators(messageActions.addMessage, dispatch),
  removeMessageById: bindActionCreators(messageActions.removeMessageById, dispatch),
})

export default connect(null,mapDispatchToProps)(CardPayment)


