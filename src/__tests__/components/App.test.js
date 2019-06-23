import React from 'react';
import ReactDOM from 'react-dom';
import { App,mapStateToProps,mapDispatchToProps } from '../../components/App';
import { shallow,mount } from 'enzyme';
import StyledSpinner from '../../components/common/Spinner'
import renderer from 'react-test-renderer'
import {charities} from '../../../tools/mockData'
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('it should display App', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should called componentDidMount', () => {
  const mockFn = jest.fn();
  const componentDidMountSpy = jest.spyOn(App.prototype, 'componentDidMount');
  window.alert = () => {mockFn()};
  shallow(<App/>);
  expect(App.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  componentDidMountSpy.mockClear();
});

it('should alert when call loadCharities fail', async () => {
  const asyncMockFn = jest.fn().mockRejectedValue(new Error('Async error'));
  const mockFn2 = jest.fn();
  window.alert = mockFn2();
  shallow(<App loadCharities={ async () => await asyncMockFn() }/>);
  expect(mockFn2).toHaveBeenCalledTimes(1);
});

it('should alert when call loadPayments fail', async () => {
  const asyncMockFn = jest.fn().mockRejectedValue(new Error('Async error'));
  const mockFn2 = jest.fn();
  window.alert = mockFn2();
  shallow(<App loadPayments={ async () => await asyncMockFn() }/>);
  expect(mockFn2).toHaveBeenCalledTimes(1);
});

it('should show Spinner when it loading state', () => {
  const wrapper = mount(<App isLoading={true}/>);
  expect(wrapper.find(StyledSpinner).length).toEqual(1);
});

it('should not show Spinner when it load finish', () => {
  const wrapper = mount(<App isLoading={false}/>);
  expect(wrapper.find(StyledSpinner).length).toEqual(0);
});

it('should dispatch action when loadCharities() is called', () => {
  const dispatch = jest.fn();
  const props = mapDispatchToProps(dispatch); 
  props.loadCharities()
  expect(dispatch).toHaveBeenCalledTimes(1);
});

it('should dispatch action when loadPayments() is called', () => {
  const dispatch = jest.fn();
  const props = mapDispatchToProps(dispatch);
  props.loadPayments()
  expect(dispatch).toHaveBeenCalledTimes(1);
});

it('should mapStateToProps', () => {
  const state = jest.fn();
  const props = mapStateToProps(state);
  props.donate = 0
  expect(props.donate).toEqual(0);
});

it('should display charities when loading finish and have data', () => {
  const initCharities = charities;
  const tree = renderer.create(<App isLoading={false} charities={initCharities} />).toJSON()
  expect(tree).toMatchSnapshot()
});