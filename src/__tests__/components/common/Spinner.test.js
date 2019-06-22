import React from 'react'
import Spinner from '../../../components/common/Spinner'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

it('it should display spinner', () => {
  const tree = renderer.create(<Spinner />).toJSON()
  expect(tree).toMatchSnapshot()
})
