import React from 'react'
import CharityList from '../../../components/Charity/CharityList'
import renderer from 'react-test-renderer'
import {mount} from 'enzyme'
import 'jest-styled-components'
import {charities} from '../../../../tools/mockData'

it('it should display CharityList', () => {
  const tree = renderer.create(<CharityList />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should display charities in CharityList', () => {
  const initCharities =  [charities[0]]
  const tree = renderer.create(<CharityList charities={initCharities} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should display 2 Cards in CharityList', () => {
  const initCharities =  [charities[0],charities[1]]
  const wrapper = mount(<CharityList charities={initCharities} />)
  expect(wrapper.find('Card').length).toEqual(2)
})