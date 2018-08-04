import { combineReducers } from 'redux';
import * as types from '../actions/types';

const all = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_NEWS_ITEMS_SUCCESS:
      return action.currentPage !== 1
        ? [...state, ...action.newsItems]
        : [...action.newsItems];

    case types.FETCH_NEWS_ITEMS:
    case types.FETCH_NEWS_ITEMS_FAIL:
      return action.currentPage !== 1 ? [...state] : [];

    default:
      return state;
  }
};

const totalPages = (state = 0, action) => {
  switch (action.type) {
    case types.FETCH_NEWS_ITEMS_SUCCESS:
      return action.totalPages;

    default:
      return state;
  }
};

const currentPage = (state = 1, action) => {
  switch (action.type) {
    case types.FETCH_NEWS_ITEMS_SUCCESS:
      return action.currentPage;

    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_NEWS_ITEMS:
      return true;

    case types.FETCH_NEWS_ITEMS_SUCCESS:
    case types.FETCH_NEWS_ITEMS_FAIL:
      return false;

    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_NEWS_ITEMS_FAIL:
      return action.message;

    case types.FETCH_NEWS_ITEMS:
    case types.FETCH_NEWS_ITEMS_SUCCESS:
      return null;

    default:
      return state;
  }
};

const news = combineReducers({
  all,
  currentPage,
  totalPages,
  isFetching,
  errorMessage,
});

export default news;
