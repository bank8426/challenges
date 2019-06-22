import React,{useState} from 'react'
import styled from 'styled-components';
import Card from './Card';
import PropTypes from 'prop-types'

const StyledCharityList = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  justify-items: center;
  @media (max-width: 768px) {
    display: block;
  }
`;

const CharityList = ({charities}) => {
  const [selectedCharity,setSelectCharity] = useState(0)
  return (
    <StyledCharityList>
      {
        charities.map((item, i) => 
          <Card key={i} 
            item={item} 
            selectedCharity={selectedCharity} 
            setSelectCharity={setSelectCharity} 
            index={i}/>)
      }
    </StyledCharityList>
  )
}

CharityList.defaultProps ={
  charities : [],
}

CharityList.propTypes={
  charities: PropTypes.arrayOf(PropTypes.shape({
    id :PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
  })),
}

export default CharityList
