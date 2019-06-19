import React from 'react'
import styled from 'styled-components';
import Card from './Card';
const StyledCharityList = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  justify-items: center;
  margin: 0 7%;
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
