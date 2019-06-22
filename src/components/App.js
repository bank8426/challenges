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
export class App extends Component {
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
  isLoading: 0,
  donate: 0,
  messages: [],
  loadCharities: () => {},
  loadPayments: () => {},
}

App.propTypes={
  charities: PropTypes.arrayOf(PropTypes.shape({
    id :PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
  })),
  isLoading: PropTypes.number.isRequired,
  donate: PropTypes.number.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    id :PropTypes.number.isRequired,
    message:PropTypes.string.isRequired,
    isErrorMessage:PropTypes.bool.isRequired,
  })),
  loadCharities: PropTypes.func.isRequired,
  loadPayments: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  charities: state.charities,
  isLoading: state.apiCallsInProgress > 0,
  donate: state.donate,
  messages: state.messages,
})

const mapDispatchToProps = (dispatch) => ({
  loadCharities: bindActionCreators(charityActions.loadCharities, dispatch),
  loadPayments: bindActionCreators(paymentActions.loadPayments, dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);