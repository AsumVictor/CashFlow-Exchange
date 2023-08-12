import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store'; // Import configureStore
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/Home';
// Adjust the path to your Home component
const mockStore = configureStore([]); // Create a mock store using redux-mock-store

test('renders the All Pages component', () => {
  // Mock Redux store data (adjust as needed)
  const initialState = {
    allCurrencies: {
      data: [{ code: 'acs', name: 'ACryptoS' }],
      isFetchError: false,
    },
  };

  const store = mockStore(initialState); // Create the mock store

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
  );

  const currencyCard = screen.getByText('ACryptoS');
  expect(currencyCard).toBeInTheDocument();
});
