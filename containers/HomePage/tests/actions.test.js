import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  FETCH_NEWS_ITEMS,
  FETCH_NEWS_ITEMS_SUCCESS,
  FETCH_NEWS_ITEMS_FAIL,
  SHOW_NEWS_ITEM,
  CLOSE_NEWS_ITEM,
} from '../constants';
import { fetchNewsItems, showNewsItem, closeNewsItem } from '../actions';

describe('HomePage Actions', () => {
  let store;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore();
    fetch.resetMocks();
  });

  describe('fetchNewsItems', () => {
    it('should return correct type and data if success', async () => {
      const res = { response: { docs: { newsItems: [] } } };
      fetch.mockResponse(JSON.stringify(res));

      await store.dispatch(fetchNewsItems({ page: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual({ type: FETCH_NEWS_ITEMS });
      expect(actions[1]).toEqual({
        type: FETCH_NEWS_ITEMS_SUCCESS, currentPage: 1, newsItems: { newsItems: [] }, totalPages: 200,
      });
    });

    it('should return correct type and data if fail', async () => {
      const message = 'fake error message';
      fetch.mockReject(message);

      await store.dispatch(fetchNewsItems());

      const actions = store.getActions();

      expect(actions[0]).toEqual({ type: FETCH_NEWS_ITEMS });
      expect(actions[1]).toEqual({ type: FETCH_NEWS_ITEMS_FAIL, message });
    });
  });

  describe('showNewsItem', () => {
    it('should return correct type', () => {
      expect(showNewsItem()).toEqual({ type: SHOW_NEWS_ITEM });
    });
  });

  describe('closeNewsItem', () => {
    it('should return correct type', () => {
      expect(closeNewsItem()).toEqual({ type: CLOSE_NEWS_ITEM });
    });
  });
});
