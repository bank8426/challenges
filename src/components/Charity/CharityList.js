import React,{useState} from 'react'
import styled from 'styled-components';
import Card from './Card';
import PropTypes from 'prop-types'

/**div to display all Charity Card components */
const StyledCharityList = styled.div`
  /**display in grid with 2 elements per row */
  display: grid;
  grid-template-columns: repeat(2,1fr);
  justify-items: center;

  /**display one card in small screen size*/
  @media (max-width: 768px) {
    display: block;
  }
`;

/**
 * div to display all charities,
 * handle which charity currently selected to make that charity's CardPayment appear
 */
const CharityList = ({charities}) => {
  /** hook for set setSelectCharity*/
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
  /** array of charities to be display.*/
  charities: PropTypes.arrayOf(PropTypes.shape({
    /** id of charity*/
    id :PropTypes.number.isRequired,
    /** name string of charity*/
    name:PropTypes.string.isRequired,
    /** image url of charity*/
    image:PropTypes.string.isRequired,
    /** acceptance currency of charity*/
    currency:PropTypes.string.isRequired,
  })),
}

export default CharityList
