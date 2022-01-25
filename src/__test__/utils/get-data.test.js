import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Call a API and return data - Class example', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });

  test('Call a API and return data - My try', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    // I need return my promise
    return getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });
  });
});
