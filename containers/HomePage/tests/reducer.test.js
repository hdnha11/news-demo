import {
  FETCH_NEWS_ITEMS,
  FETCH_NEWS_ITEMS_SUCCESS,
  FETCH_NEWS_ITEMS_FAIL,
  SHOW_NEWS_ITEM,
  CLOSE_NEWS_ITEM,
} from '../constants';
import homePageReducer from '../reducer';

describe('HomePage Reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      currentNewsItem: null,
      currentPage: 1,
      errorMessage: null,
      isFetching: false,
      newsItems: [],
      totalPages: 0,
    };
  });

  it('should return initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(state);
  });

  it('should handle the FETCH_NEWS_ITEMS action correctly', () => {
    const action = { type: FETCH_NEWS_ITEMS };
    const newState = homePageReducer(state, action);

    expect(newState).toEqual({ ...state, isFetching: true });
  });

  it('should handle the FETCH_NEWS_ITEMS_SUCCESS action correctly', () => {
    state.isFetching = true;
    const newsItems = [{ id: 1 }];
    const action = {
      type: FETCH_NEWS_ITEMS_SUCCESS,
      newsItems,
      currentPage: 1,
      totalPages: 2,
    };
    const newState = homePageReducer(state, action);

    expect(newState).toEqual({
      ...state,
      isFetching: false,
      totalPages: 2,
      newsItems,
    });
  });

  it('should handle the FETCH_NEWS_ITEMS_FAIL action correctly', () => {
    state.isFetching = true;
    const message = 'Error message';
    const action = {
      type: FETCH_NEWS_ITEMS_FAIL,
      message,
    };
    const newState = homePageReducer(state, action);

    expect(newState).toEqual({
      ...state,
      isFetching: false,
      errorMessage: message,
    });
  });

  it('should handle the SHOW_NEWS_ITEM action correctly', () => {
    const newsItem = { id: 1 };
    const action = { type: SHOW_NEWS_ITEM, newsItem };
    const newState = homePageReducer(state, action);

    expect(newState).toEqual({ ...state, currentNewsItem: newsItem });
  });

  it('should handle the CLOSE_NEWS_ITEM action correctly', () => {
    state.currentNewsItem = { id: 1 };
    const action = { type: CLOSE_NEWS_ITEM };
    const newState = homePageReducer(state, action);

    expect(newState).toEqual({ ...state, currentNewsItem: null });
  });
});
