import React from 'react'
import styled from 'styled-components';
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

export default Donation
