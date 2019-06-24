import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'

const StyledDonation = styled.h3`
  margin: 1em;
`;

/**
 * h3 to display donation amounts.
 */
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
  /** amount of donation to be display */
  donate : PropTypes.number.isRequired,
}

export default Donation
