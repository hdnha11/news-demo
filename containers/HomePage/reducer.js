import { combineReducers } from 'redux';
import {
  FETCH_NEWS_ITEMS,
  FETCH_NEWS_ITEMS_SUCCESS,
  FETCH_NEWS_ITEMS_FAIL,
  SHOW_NEWS_ITEM,
  CLOSE_NEWS_ITEM,
} from './constants';

const newsItems = (state = [], action) => {
  switch (action.type) {
    case FETCH_NEWS_ITEMS_SUCCESS:
      return action.currentPage !== 1
        ? [...state, ...action.newsItems]
        : [...action.newsItems];

    case FETCH_NEWS_ITEMS:
    case FETCH_NEWS_ITEMS_FAIL:
      return action.currentPage !== 1 ? [...state] : [];

    default:
      return state;
  }
};

const totalPages = (state = 0, action) => {
  switch (action.type) {
    case FETCH_NEWS_ITEMS_SUCCESS:
      return action.totalPages;

    default:
      return state;
  }
};

const currentPage = (state = 1, action) => {
  switch (action.type) {
    case FETCH_NEWS_ITEMS_SUCCESS:
      return action.currentPage;

    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_NEWS_ITEMS:
      return true;

    case FETCH_NEWS_ITEMS_SUCCESS:
    case FETCH_NEWS_ITEMS_FAIL:
      return false;

    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case FETCH_NEWS_ITEMS_FAIL:
      return action.message;

    case FETCH_NEWS_ITEMS:
    case FETCH_NEWS_ITEMS_SUCCESS:
      return null;

    default:
      return state;
  }
};

const currentNewsItem = (state = null, action) => {
  switch (action.type) {
    case SHOW_NEWS_ITEM:
      return action.newsItem;

    case CLOSE_NEWS_ITEM:
      return null;

    default:
      return state;
  }
};

const homePage = combineReducers({
  newsItems,
  currentPage,
  totalPages,
  isFetching,
  errorMessage,
  currentNewsItem,
});

export default homePage;
