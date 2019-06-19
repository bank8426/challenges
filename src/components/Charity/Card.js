import React from 'react'
import styled from 'styled-components';
import CardPayment from './CardPayment';
const StyledCard = styled.div`
  margin: 0 10px 50px;
  background: #FFFFFF;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 10px 10px;
  position: relative;
`;

const StyledImg = styled.div`
  width: 650px;
  overflow: hidden;
  background-image: url(${props => props.src});
  height: 300px;
  border-radius: 10px 10px 0px 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1366px) {
    width: 600px;
    height: 275px;
  }
  @media (max-width: 1280px) {
    width: 480px;
    height: 230px;
  }
  @media (max-width: 1024px) {
    width: 385px;
    height: 195px;
  }
  @media (max-width: 834px) {
    width: 345px;
    height: 175px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 250px;
  }
`;

const StyledH3 = styled.h3`
  margin: 1em 0em 1em 1em;
`;

const StyledButton = styled.button`
  margin: auto 1em auto 0;
  @media (max-width: 834px) and (min-width: 768px) {
    margin: 0.5em 0.5em 0.5em 0;
    }
`;

const StyledNameLabel = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
`;

const Card = ({item,selectedCharity,setSelectCharity}) => {
  return (
    <StyledCard>
      <StyledImg src={process.env.IMAGES_PATH + item.image}/>
      <StyledNameLabel>
        <StyledH3>{item.name}</StyledH3>
        <StyledButton className='primary' onClick={() => setSelectCharity(item.id) }>Donate</StyledButton>
      </StyledNameLabel>
      { selectedCharity===item.id ? <CardPayment index={item.id} currency={item.currency} onClose={() => setSelectCharity(0)}/> : null }
    </StyledCard>
  )
}

export default Card
