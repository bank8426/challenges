import React from 'react'
import styled from 'styled-components';
import Card from './Card';
const StyledCharityList = styled.div`

`;

const CharityList = ({charities}) => {
  return (
    <StyledCharityList>
      {
        charities.map((item, i) => <Card key={i} item={item}/>)
      }
    </StyledCharityList>
  )
}


export default CharityList
