import { shallow } from 'enzyme';

import App from './App';
import TopBar from '../TopBar/TopBar';
import List from '../List/List';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<PrenomProvider><App /></PrenomProvider>, div);
  // ReactDOM.unmountComponentAtNode(div);
  const wrapper = shallow(<App />);

  expect(wrapper.containsMatchingElement(<TopBar />)).toBeTruthy();
  expect(wrapper.containsMatchingElement(<List />)).toBeFalsy();
});

