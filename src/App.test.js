import { render, screen }               from '@testing-library/react';
import App                              from './App';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk                       from 'redux-thunk';
import allReducers                      from './appData/reducers/reducers'

const store = createStore(allReducers, {}, applyMiddleware(ReduxThunk));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

