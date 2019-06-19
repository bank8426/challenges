import React,{useState} from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as paymentActions from '../../redux/actions/paymentActions';
import { bindActionCreators } from 'redux'
import RadioButton from '../common/RadioButton';
const StyledCardPayment = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0.95);
  padding: 15% 20px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const StyledPaymentList = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  padding: 0 100px;
`;

const StyledHeader = styled.h2`
  text-align: center;
`;

const StyledCloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  padding: 1px 8px;
  color: #1b53f2;
  font-weight: bold;

  &:hover{
    color: white;
    background-color: #1B95F2;
    border-color: #0062cc;
  }
`;

const StyledPayButton = styled.button`
  display: block;
  margin: 2em auto;
`;
const CardPayment = ({index,savePayment,currency,onClose}) => {
  const payments = [10, 20, 50, 100, 500];
  const [selectedAmount, setSelectedAmount] = useState(payments[0])
  const handlePay = (id, amount, currency) => {
    savePayment(id, amount, currency).catch(error => {
      alert('Saving payments failed' + error);
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
              handleClick={() => {setSelectedAmount(amount)}} 
              displayMessage={amount} checked={amount===selectedAmount}/>
          ))
        }
      </StyledPaymentList>
      <StyledPayButton className='primary' onClick={() => handlePay(index, selectedAmount, currency)}>Pay</StyledPayButton>
    </StyledCardPayment>
  )
}

const mapDispatchToProps = (dispatch) => ({ savePayment: bindActionCreators(paymentActions.savePayment, dispatch)})

export default connect(null,mapDispatchToProps)(CardPayment)


