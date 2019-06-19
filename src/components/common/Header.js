import React from 'react'
import styled from 'styled-components';
const StyledHeader = styled.h1`
  background-color: #1B95F2;
  margin: 0;
  padding: 10px;
  color: white;
  text-align:center;
`;
const Header = () => {
  return (
    <StyledHeader>
      Tamboon React
    </StyledHeader>
  )
}

export default Header
