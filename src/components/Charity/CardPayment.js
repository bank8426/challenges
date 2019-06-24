import React,{Component} from 'react'
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import * as paymentActions from '../../redux/actions/paymentActions';
import * as messageActions from '../../redux/actions/messageActions';
import { bindActionCreators } from 'redux'
import RadioButton from '../common/RadioButton';
import Spinner from '../common/Spinner';
import PropTypes from 'prop-types'

/** keyframes to make cardPayment appear */
const cardPaymentFadeInKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

/**
 * div to display card component
 */
export const StyledCardPayment = styled.div`
  /**display it on top of card component*/
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

/**div to display all payment radio buttons */
const StyledSelectPaymentList = styled.div`
  /**display in grid with 5 elements per row */
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
    padding: 0 30px;
  }
`;

const StyledHeader = styled.h2`
  text-align: center;
`;

/**span to display as close button */
export const StyledCloseButton = styled.span`
  color: #1b53f2;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 1px 8px;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
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

export const StyledPayButton = styled.button`
  display: block;
  margin: 2em auto;
`;


/**
 * div to display payment part of each Charity card.
 * show acceptance currency , radio button to select payment amount ,
 * close button and  pay button
 * Have local state to handle selected payment amount.
 * Dispatch savePayment when user click pay.
 */
export class CardPayment extends Component {
  state = {
    payments : [10, 20, 50, 100, 500],
    /**number of amount that user select */
    selectedAmount: 10,
    /**boolean indicate processing status of payment*/
    isProcessing: false,
  }

  render() {
    const {index,currency,onClose} = this.props;
    const {selectedAmount,isProcessing,payments} =  this.state;
    /** handle local state for selectedAmount*/
    const setSelectedAmount = (selectedAmount) => this.setState({selectedAmount})
    /** handle local state for setIsProcessing*/
    const setIsProcessing = (isProcessing) => this.setState({isProcessing})
    /** 
    * function to dispatch savePayment action.
    * When savePayment fail it will dispatch to display error message
    * */
    const handlePay = () => {
      const {index,savePayment,addMessage,removeMessageById,currency} = this.props;
      setIsProcessing(true)
      savePayment(index, selectedAmount, currency).then(function() {
        setIsProcessing(false)
      }).catch(error => {
        const id = Date.now();
        addMessage('Something went wrong please try again later.',id ,true);
        setTimeout(function() {
          removeMessageById(id)
        }, 2000);
        setIsProcessing(false)
      })
    }
    return (
      <StyledCardPayment>
        <StyledCloseButton onClick={() => onClose()}>X</StyledCloseButton>
        <StyledHeader>Select the amount to donate ({currency})</StyledHeader>
        <StyledSelectPaymentList>
          {
            payments.map((amount, j) => (
              <RadioButton key={j}
                name={`payment${index}`} 
                handleChange={() => {setSelectedAmount(amount)}} 
                displayMessage={amount} 
                checked={amount===selectedAmount}/>
            ))
          }
        </StyledSelectPaymentList>
        {
          isProcessing ? <Spinner/>
            : <StyledPayButton className='primary' onClick={() => handlePay()}>Pay</StyledPayButton>
        }
      </StyledCardPayment>
    )
  }
}

CardPayment.defaultProps ={
  index : 0,
  currency : '',
  onClose : () => {},
  savePayment: async () => await Promise.resolve(''),
  addMessage: async () => await Promise.resolve(''),
  removeMessageById: async () => await Promise.resolve(''),
}

CardPayment.propTypes={
  /** id of charity*/
  index:PropTypes.number.isRequired,
  /** action to be dispatch when user click pay*/
  savePayment: PropTypes.func.isRequired,
  /** action to be dispatch when create message to be display on Message component*/
  addMessage: PropTypes.func.isRequired,
  /** action to be dispatch when remove message on Message component*/
  removeMessageById: PropTypes.func.isRequired,
  /** acceptance currency of charity*/
  currency:PropTypes.string.isRequired,
  /** callback function to set selected charity*/
  onClose: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({ 
  savePayment: bindActionCreators(paymentActions.savePayment, dispatch),
  addMessage: bindActionCreators(messageActions.addMessage, dispatch),
  removeMessageById: bindActionCreators(messageActions.removeMessageById, dispatch),
})

export default connect(null,mapDispatchToProps)(CardPayment)


