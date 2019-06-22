import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { GlobalStyles } from '../../styles/global';
it('should have global styles', () => {
  const tree = renderer.create(GlobalStyles.globalStyle.rules).toJSON();
  expect(tree).toMatchSnapshot();
});