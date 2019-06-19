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
class App extends Component {
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
    const {donate,message,charities,isLoading} = this.props;
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
            <Message message={message}/>
          </>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    charities: state.charities,
    isLoading: state.apiCallsInProgress > 0,
    donate: state.donate,
    message: state.message,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCharities: bindActionCreators(charityActions.loadCharities, dispatch),
    loadPayments: bindActionCreators(paymentActions.loadPayments, dispatch),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);