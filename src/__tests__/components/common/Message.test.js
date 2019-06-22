import React from 'react'
import Message from '../../../components/common/Message'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

it('should display message', () => {
  const tree = renderer.create(<Message />).toJSON()
  expect(tree).toMatchSnapshot()
})


it('should display red message for error message', () => {
  const initMessages =  [{id : 1,message: 'Error',isErrorMessage :true}]
  const tree = renderer.create(<Message messages={initMessages} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should display blue message for normal message', () => {
  const initMessages =  [{id : 1,message: 'Thank you',isErrorMessage :false}]
  const tree = renderer.create(<Message messages={initMessages} />).toJSON()
  expect(tree).toMatchSnapshot()
})