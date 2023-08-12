import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getCurrencies } from '../redux/currency/currencySlice'; // Provide the correct path to your reducers
import { getSingleCurrency } from '../redux/currency/singleCurrency';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Currency Slice', () => {
  it('should handle getCurrencies async thunk', async () => {
    const store = mockStore({});

    await store.dispatch(getCurrencies());

    const actions = store.getActions();
    expect(actions[0].type).toEqual(getCurrencies.pending.type);

    const fetchedData = [
      { code: '00', name: '00 Token' },
      { code: '1inch', name: '1inch' },
      { code: 'aave', name: 'Aave' },
      { code: 'abt', name: 'Arcblock' },
      { code: 'ach', name: 'Alchemy Pay' },
      { code: 'acs', name: 'ACryptoS' },
      { code: 'ada', name: 'Cardano' },
      { code: 'aed', name: 'UAE Dirham' },
      { code: 'aergo', name: 'Aergo' },
      { code: 'afn', name: 'Afghan Afghani' },
    ];
    store.dispatch(getCurrencies.fulfilled(fetchedData));

    const updatedActions = store.getActions();
    expect(updatedActions[1].type).toEqual(getCurrencies.fulfilled.type);
    expect(updatedActions[1].payload.slice(0, 10)).toEqual(fetchedData);
  });
});

describe('SingleCurrency Slice', () => {
  it('should handle getSingleCurrency async thunk', async () => {
    const store = mockStore({});
    const mockParam = { date: '2023-08-11', code: '1inch' };

    await store.dispatch(getSingleCurrency(mockParam));
    const actions = store.getActions();
    expect(actions[0].type).toEqual(getSingleCurrency.pending.type);
    // Simulate a successful response
    const fetchedData = [
      { code: '00', rate: 3.561618 },
      { code: '1inch', rate: 1 },
      { code: 'aave', rate: 0.004611 },
      { code: 'abt', rate: 3.661081 },
      { code: 'ach', rate: 18.27771 },
      { code: 'acs', rate: 155.082899 },
      { code: 'ada', rate: 1.037084 },
      { code: 'aed', rate: 1.131592 },
      { code: 'aergo', rate: 2.880598 },
      { code: 'afn', rate: 25.965857 },
      { code: 'agld', rate: 0.509349 },
      { code: 'aioz', rate: 22.905571 },
    ];
    store.dispatch(getSingleCurrency.fulfilled(fetchedData));
    const updatedActions = store.getActions();
    expect(updatedActions[1].type).toEqual(getSingleCurrency.fulfilled.type);
    expect(updatedActions[1].payload.slice(0, 12)).toEqual(fetchedData);
  });
});
