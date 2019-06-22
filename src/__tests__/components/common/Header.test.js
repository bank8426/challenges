import React from 'react'
import Header from '../../../components/common/Header'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

it('should display header', () => {
  const tree = renderer.create(<Header />).toJSON()
  expect(tree).toMatchSnapshot()
})
