import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as charityActions from './redux/actions/charityActions';
import * as paymentActions from './redux/actions/paymentActions';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import { bindActionCreators } from 'redux'

const Card = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;

function mapStateToProps(state) {
  return {
    charities: state.charities,
    loading: state.apiCallsInProgress > 0,
    donate: state.donate,
    message: state.message,
    payments: state.payments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCharities: bindActionCreators(charityActions.loadCharities, dispatch),
      loadPayments: bindActionCreators(paymentActions.loadPayments, dispatch),
    },
    dispatch,
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(
  class App extends Component {
    constructor(props) {
      super();

      this.state = {
        selectedAmount: 10,
      };
    }

    componentDidMount() {
      const { charities, actions } = this.props;
      if (charities.length === 0) {
        actions.loadCharities().catch(error => {
          alert('Loading charities failed' + error);
        });
      }

      actions.loadPayments().catch(error => {
        alert('Loading payments failed' + error);
      })
    }

    render() {
      const self = this;
      const cards = this.props.charities.map(function(item, i) {
        const payments = [10, 20, 50, 100, 500].map((amount, j) => (
          <label key={j}>
            <input
              type="radio"
              name="payment"
              onClick={function() {
                self.setState({ selectedAmount: amount })
              }} /> {amount}
          </label>
        ));
        
        return (
          <Card key={i}>
            <p>{item.name}</p>
            <img src={process.env.IMAGES_PATH + item.image} />
            {payments}
            <button onClick={handlePay.call(self, item.id, self.state.selectedAmount, item.currency)}>Pay</button>
          </Card>
        );
      });

      const style = {
        color: 'red',
        margin: '1em 0',
        fontWeight: 'bold',
        fontSize: '16px',
        textAlign: 'center',
      };
      const donate = this.props.donate;
      const message = this.props.message;

      return (
        <div>
          <h1>Tamboon React</h1>
          {this.props.loading ? (
            <div>Loading</div>
          ) : (
            <>
              <p>All donations: {donate}</p>
              <p style={style}>{message}</p>
              {cards}
            </>
          )}
        </div>
      );
    }
  }
);

function handlePay(id, amount, currency) {
  const self = this;
  return function() {
    fetch('http://localhost:3001/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
      .then(function(resp) { return resp.json(); })
      .then(function() {
        self.props.dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount,
        });
        self.props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: `Thanks for donate ${amount}!`,
        });

        setTimeout(function() {
          self.props.dispatch({
            type: 'UPDATE_MESSAGE',
            message: '',
          });
        }, 2000);
      });
  }
}
