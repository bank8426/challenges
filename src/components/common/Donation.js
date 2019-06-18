import React from 'react'
import styled from 'styled-components';
const StyledDonation = styled.p`

`;

const Donation = ({donate}) => {
  return (
    <StyledDonation>
      All donations: {donate}
    </StyledDonation>
  )
}

export default Donation
