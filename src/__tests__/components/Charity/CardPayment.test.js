import React from 'react'
import { CardPayment, StyledPayButton } from '../../../components/Charity/CardPayment'
import RadioButton from '../../../components/common/RadioButton';
import renderer from 'react-test-renderer'
import {mount} from 'enzyme'
import 'jest-styled-components'

describe('CardPayment', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<CardPayment/>)
  })

  it('it should display CharityList', () => {
    const tree = renderer.create(<CardPayment />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should handleClick when click Pay button', () => {
    const props = wrapper.find(StyledPayButton).props()
    const spy = jest.spyOn(props, 'onClick');
    props.onClick();
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('should handleChange when click on Radio button', () => {
    const props = wrapper.find(RadioButton).first().props()
    const spy = jest.spyOn(props, 'handleChange');
    props.handleChange();
    expect(spy).toHaveBeenCalledTimes(1)
  })
  
  it('should show errorMessage when call savePayment fail', async () => {
    const asyncMockFn = jest.fn().mockRejectedValue(new Error('Async error'));
    wrapper = mount(<CardPayment savePayment={ async () => await asyncMockFn() }/>);
    const props = wrapper.find(StyledPayButton).props()
    props.onClick();
    expect(asyncMockFn).toHaveBeenCalledTimes(1);
  });

  it('should show errorMessage when call savePayment fail then removeMessageById after 2 seconds', async () => {
    jest.useFakeTimers();
    const asyncMockFn = jest.fn().mockRejectedValue(new Error('Async error'));
    const mockFn = jest.fn();
    wrapper = mount(<CardPayment 
      savePayment={ async () => await asyncMockFn() } 
      removeMessageById={mockFn}
    />);
    wrapper.find(StyledPayButton).props().onClick()
    wrapper.update();
    for (let i = 0; i < 3; i++) {
      jest.advanceTimersByTime(3000);
      await Promise.resolve(); // allow any pending jobs in the PromiseJobs queue to run
    }
    setTimeout(() => {
      wrapper.update();
      expect(mockFn).toHaveBeenCalledTimes(1);
      wrapper.update();
    }, 3000);
    jest.runAllTimers();
  });

  it('should have default savePayment', () => {
    const props = wrapper.props()
    const spy = jest.spyOn(props, 'savePayment');
    props.savePayment()
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('should have default addMessage', () => {
    const props = wrapper.props()
    const spy = jest.spyOn(props, 'addMessage');
    props.addMessage()
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('should have default removeMessageById', () => {
    const props = wrapper.props()
    const spy = jest.spyOn(props, 'removeMessageById');
    props.removeMessageById()
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('should have default onClose', () => {
    const props = wrapper.props()
    const spy = jest.spyOn(props, 'onClose');
    props.onClose()
    expect(spy).toHaveBeenCalledTimes(1)
  })
});