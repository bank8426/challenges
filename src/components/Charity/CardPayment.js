import React,{useState} from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as paymentActions from '../../redux/actions/paymentActions';
import { bindActionCreators } from 'redux'
const StyledCardPayment = styled.div`

`;
const CardPayment = ({index,savePayment,currency}) => {
  const payments = [10, 20, 50, 100, 500];
  const [selectedAmount, setSelectedAmount] = useState(payments[0])
  const handlePay = (id, amount, currency) => {
    savePayment(id, amount, currency).catch(error => {
      alert('Saving payments failed' + error);
    })
  }
  return (
    <StyledCardPayment>
      {
        payments.map((amount, j) => (
          <label key={j}>
            <input
              type="radio"
              name={`payment${index}`}
              onClick={ () => {setSelectedAmount(amount)}
              } /> {amount}
          </label>))
      }
      <button onClick={() => handlePay(index, selectedAmount, currency)}>Pay</button>
    </StyledCardPayment>
  )
}

const mapDispatchToProps = (dispatch) => ({ savePayment: bindActionCreators(paymentActions.savePayment, dispatch)})

export default connect(null,mapDispatchToProps)(CardPayment)


