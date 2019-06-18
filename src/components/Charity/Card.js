import React from 'react'
import styled from 'styled-components';
import CardPayment from './CardPayment';
const StyledCard = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;

const Card = ({item,handlePay}) => {
  return (
    <StyledCard>
      <p>{item.name}</p>
      <img src={process.env.IMAGES_PATH + item.image} />
      <CardPayment index={item.id} handlePay={handlePay} currency={item.currency}/>
    </StyledCard>
  )
}

export default Card
