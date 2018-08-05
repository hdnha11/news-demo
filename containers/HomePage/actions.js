import { camelizeKeys } from 'humps';
import * as api from '../../api';
import {
  FETCH_NEWS_ITEMS,
  FETCH_NEWS_ITEMS_SUCCESS,
  FETCH_NEWS_ITEMS_FAIL,
} from './constants';

const MAX_PAGES = 200;

export const fetchNewsItems = params => dispatch => {
  dispatch({
    type: FETCH_NEWS_ITEMS,
  });

  return api.fetchNewsItems(params).then(
    response => {
      const { docs: newsItems } = camelizeKeys(response.response);

      dispatch({
        type: FETCH_NEWS_ITEMS_SUCCESS,
        newsItems,
        totalPages: MAX_PAGES,
        currentPage: (params && params.page) || 1,
      });
    },
    error => {
      dispatch({
        type: FETCH_NEWS_ITEMS_FAIL,
        message: error,
      });
    },
  );
};
