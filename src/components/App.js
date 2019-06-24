import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as charityActions from '../redux/actions/charityActions';
import * as paymentActions from '../redux/actions/paymentActions';
import { bindActionCreators } from 'redux'
import Message from './common/Message';
import Donation from './common/Donation';
import Header from './common/Header';
import Spinner from './common/Spinner';
import CharityList from './Charity/CharityList';
import { GlobalStyles } from '../styles/global';
import PropTypes from 'prop-types';

/**
 * App for charity donation,
 * dispatch load charities and payment to make it update information in redux store.
 * display Spinner when still loading
 * after that will display Donation componet and CharityList componet
 * when there is payment message or error message, it will be display in Message component
 */
export class App extends Component {
  /**call load charities and payment*/
  componentDidMount() {
    const { charities, loadCharities , loadPayments } = this.props;
    if (charities.length === 0) {
      loadCharities().catch(error => {
        alert('Loading charities failed' + error);
      });
    }

    loadPayments().catch(error => {
      alert('Loading payments failed' + error);
    })
  }

  render() {
    const {donate,messages,charities,isLoading} = this.props;
    return (
      <>
        <GlobalStyles />
        <Header/>
        {isLoading ? (
          <Spinner/>
        ) : (
          <>
            <Donation donate={donate} />
            <CharityList charities={charities}/>
            <Message messages={messages}/>
          </>
        )}
      </>
    );
  }
}

App.defaultProps ={
  charities: [],
  isLoading: true,
  donate: 0,
  messages: [],
  loadCharities: async () => await Promise.resolve(''),
  loadPayments: async () => await Promise.resolve(''),
}

App.propTypes={
  /** array of charities to be display.*/
  charities: PropTypes.arrayOf(PropTypes.shape({
    /** id of charity*/
    id :PropTypes.number.isRequired,
    /** name string of charity*/
    name:PropTypes.string.isRequired,
    /** image url of charity*/
    image:PropTypes.string.isRequired,
    /** acceptance currency of charity*/
    currency:PropTypes.string.isRequired,
  })),
  /** boolean indicate loading state*/
  isLoading: PropTypes.bool.isRequired,
  /** amount of donation to be display */
  donate: PropTypes.number.isRequired,
  /** array of messages to be display.*/
  messages: PropTypes.arrayOf(PropTypes.shape({
    /** id of message*/
    id :PropTypes.number.isRequired,
    /** message string to display*/
    message:PropTypes.string.isRequired,
    /** boolean indicate message type*/
    isErrorMessage:PropTypes.bool.isRequired,
  })),
  /** action to be dispatch when load Charities information*/
  loadCharities: PropTypes.func.isRequired,
  /** action to be dispatch when load Payments information*/
  loadPayments: PropTypes.func.isRequired,
}

export const mapStateToProps = (state) => ({
  charities: state.charities,
  isLoading: state.apiCallsInProgress > 0,
  donate: state.donate,
  messages: state.messages,
})

export const mapDispatchToProps = (dispatch) => ({
  loadCharities: bindActionCreators(charityActions.loadCharities, dispatch),
  loadPayments: bindActionCreators(paymentActions.loadPayments, dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);