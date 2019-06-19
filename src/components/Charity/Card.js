import React,{useState} from 'react'
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
`;

const StyledH2 = styled.h2`
  margin: 1em 0em 1em 1em;
`;

const StyledButton = styled.button`
  margin: auto 1em auto 0;
`;

const StyledNameLabel = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
`;

const Card = ({item}) => {
  const [displayPayment, setDisplayPayment] = useState(false)
  return (
    <StyledCard>
      <StyledImg src={process.env.IMAGES_PATH + item.image}/>
      <StyledNameLabel>
        <StyledH2>{item.name}</StyledH2>
        <StyledButton className='primary' onClick={() => setDisplayPayment(true) }>Donate</StyledButton>
      </StyledNameLabel>
      { displayPayment ? <CardPayment index={item.id} currency={item.currency} onClose={() => setDisplayPayment(false)}/> : null }
    </StyledCard>
  )
}

export default Card
