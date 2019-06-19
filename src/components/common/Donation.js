import React from 'react'
import styled from 'styled-components';
const StyledDonation = styled.p`

`;

const Donation = ({donate}) => {
  return (
    <StyledDonation>
      All donations: {donate.toLocaleString()} THB
    </StyledDonation>
  )
}

export default Donation
