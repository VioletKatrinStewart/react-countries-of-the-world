import { render } from '@testing-library/react';
import App from './App';

test.skip('renders header ', () => {
  const app = render(<App />);
  expect(app).toMatchSnapshot();
});
