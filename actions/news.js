import { camelizeKeys } from 'humps';
import * as api from '../api';
import * as types from './types';

const MAX_PAGES = 200;

export const fetchNewsItems = params => dispatch => {
  dispatch({
    type: types.FETCH_NEWS_ITEMS,
  });

  return api.fetchNewsItems(params).then(
    response => {
      const { docs: newsItems } = camelizeKeys(response.response);

      dispatch({
        type: types.FETCH_NEWS_ITEMS_SUCCESS,
        newsItems,
        totalPages: MAX_PAGES,
        currentPage: (params && params.page) || 1,
      });
    },
    error => {
      dispatch({
        type: types.FETCH_NEWS_ITEMS_FAIL,
        message: error,
      });
    },
  );
};
