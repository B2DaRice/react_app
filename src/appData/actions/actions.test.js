import axios          from 'axios';
import postsFetchData from './actions';

const definitions = require('../../definitions/definitions.json');

describe('actions', () => {
  it('Login successful, creates AUTHENTICATION_PENDING and AUTHENTICATION_SUCCESS', async () => {
    const expected = [
      { type: definitions.isLoadingType },
      { type: definitions.loadSuccessType }
    ];

    axios.post = jest.fn(url => {
      return Promise.resolve();
    });

    // mock the dispatch and getState functions from Redux thunk.
    const dispatch = jest.fn(),
          getState = jest.fn();

    // execute
    await postsFetchData('https://jsonplaceholder.typicode.com/posts')(dispatch, getState);

    // verify
    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
  });
});
