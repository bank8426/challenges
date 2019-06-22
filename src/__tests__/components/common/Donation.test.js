import React from 'react'
import Donation from '../../../components/common/Donation'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

it('should display total 0 THB', () => {
  const tree = renderer.create(<Donation />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should display total 100 THB', () => {
  const tree = renderer.create(<Donation donate={100}/>).toJSON()
  expect(tree).toMatchSnapshot()
})

