import React from 'react'
import { CardPayment } from '../../../components/Charity/CardPayment'
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