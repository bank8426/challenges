import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'

const StyledDonation = styled.h3`
  margin: 1em;
`;

const Donation = ({donate}) => {
  return (
    <StyledDonation>
      All donations: {donate.toLocaleString()} THB
    </StyledDonation>
  )
}

Donation.defaultProps = {
  donate: 0,
}

Donation.propTypes={
  donate : PropTypes.number.isRequired,
}

export default Donation
