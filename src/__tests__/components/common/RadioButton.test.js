import React from 'react'
import RadioButton from '../../../components/common/RadioButton'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';
import 'jest-styled-components'

it('should display radio button', () => {
  const tree = renderer.create(<RadioButton />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should display radio with checked state', () => {
  const tree = renderer.create(<RadioButton name='radio1' handleChange={jest.fn() } displayMessage='' checked={true} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should handle onChange', () => {
  const mockFn = jest.fn();
  const wrapper = mount(<RadioButton name='radio1' handleChange={mockFn} displayMessage='' checked={false} />);
  wrapper.find('input').simulate('change')
  expect(mockFn).toHaveBeenCalledTimes(1)
})

it('should passed checked to the input', () => {
  const mockFn = jest.fn();
  const wrapper = mount(
    <RadioButton
      name='radio1'
      handleChange={mockFn} 
      displayMessage='100' 
      checked={true}
    />,
  ).find('input');

  expect(wrapper.prop('checked')).toEqual(true);
});

it('should passed name to the input', () => {
  const mockFn = jest.fn();
  const wrapper = mount(
    <RadioButton
      name='radio1'
      handleChange={mockFn} 
      displayMessage='100' 
      checked={false}
    />,
  ).find('input');

  expect(wrapper.prop('name')).toEqual('radio1');
});


it('should passed displayMessage to the h3', () => {
  const mockFn = jest.fn();
  const wrapper = mount(
    <RadioButton
      name='radio1'
      handleChange={mockFn} 
      displayMessage='100' 
      checked={false}
    />,
  ).find('h3');

  expect(wrapper.text()).toEqual('100');
});

it('should have default handleChange', () => {
  const wrapper = mount(
    <RadioButton
      name='radio1'
      displayMessage='100' 
      checked={false}
    />,
  );
  const props = wrapper.props()
  const spy = jest.spyOn(props, 'handleChange');
  props.handleChange()
  expect(spy).toHaveBeenCalledTimes(1)
});