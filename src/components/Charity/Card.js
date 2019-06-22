import React from 'react'
import styled,{keyframes} from 'styled-components';
import CardPayment from './CardPayment';
import PropTypes from 'prop-types'

const cardFadeInKeyframe = keyframes`
  0% {
    opacity: 0;
    top: 10px;
  }
  100% {
    opacity: 1;
    top: 0px;
  }
`

const StyledCard = styled.div`
  margin: 0 10px 50px;
  background: #FFFFFF;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 10px 10px;
  position: relative;
  -webkit-animation: ${cardFadeInKeyframe} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1) ${props => (props.index/8+.02)+'s'};
  animation: ${cardFadeInKeyframe} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1) ${props => (props.index/8+.02)+'s'};
  opacity: 0;
  top: 10px;
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

export const StyledButton = styled.button`
  margin: auto 1em auto 0;
  @media (max-width: 834px) and (min-width: 768px) {
    margin: 0.5em 0.5em 0.5em 0;
    }
`;

const StyledNameLabel = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
`;

const Card = ({item,selectedCharity,setSelectCharity,index}) => {
  return (
    <StyledCard index={index}>
      <StyledImg src={process.env.IMAGES_PATH + item.image}/>
      <StyledNameLabel>
        <StyledH3>{item.name}</StyledH3>
        <StyledButton className='primary' onClick={() => setSelectCharity(item.id) }>Donate</StyledButton>
      </StyledNameLabel>
      { selectedCharity===item.id ? 
        <CardPayment 
          index={item.id} 
          currency={item.currency} 
          onClose={() => setSelectCharity(0)}/> 
        : null }
    </StyledCard>
  )
}

Card.defaultProps ={
  item : {
    id : 0,
    name : '',
    image : '',
    currency : '',
  },
  selectedCharity : -1,
  setSelectCharity : () => {},
  index : 0,
}

Card.propTypes={
  item: PropTypes.shape({
    id :PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
  }),
  selectedCharity : PropTypes.number.isRequired,
  setSelectCharity : PropTypes.func.isRequired,
  index : PropTypes.number.isRequired,
}


export default Card
