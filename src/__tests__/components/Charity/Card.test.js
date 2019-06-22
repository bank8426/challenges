import React from 'react'
import Card , {StyledButton} from '../../../components/Charity/Card'
import {StyledCardPayment , StyledCloseButton} from '../../../components/Charity/CardPayment'
import {mount} from 'enzyme'
import 'jest-styled-components'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';

describe('Card with mock Store', () => {
  // create any initial state needed
  const initialState = {}; 
  // here it is possible to pass in any middleware if needed into //configureStore
  const mockStore = configureStore();
  let wrapper;
  let store;
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
    //creates the store with any initial state or middleware needed  
    store = mockStore(initialState)
    wrapper = mount(<Provider store={store}><Card setSelectCharity={mockFn}/></Provider>)
  })

  it('should display Card', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should handleClick when click Donate button', () => {
    wrapper.find(StyledButton).simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should display CardPayment when selectedCharity equal id', () => {
    wrapper = mount(<Provider store={store}>
      <Card id={0} selectedCharity={0} setSelectCharity={mockFn}/>
    </Provider>)
    expect(wrapper.find(StyledCardPayment).length).toEqual(1)
  })

  it('should handle onClose when display CardPayment', () => {
    wrapper = mount(<Provider store={store}>
      <Card id={0} selectedCharity={0} setSelectCharity={mockFn}/>
    </Provider>)
    const props = wrapper.find(StyledCloseButton).props()
    const spy = jest.spyOn(props, 'onClick');
    props.onClick()
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('should have default setSelectCharity', () => {
    wrapper = mount(<Card />)
    const props = wrapper.props()
    const spy = jest.spyOn(props, 'setSelectCharity');
    props.setSelectCharity()
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
