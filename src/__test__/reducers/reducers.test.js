import reducer from '../../reducers';
import ProductMock from '../../__mocks__/product-mock';

describe('Reducers', () => {
  test('Return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [{ ...payload }],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
