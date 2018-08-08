import {
  getNewsItems,
  getTotalPages,
  getCurrentPage,
  getIsFetching,
  getCurrentNewsItem,
} from '../selectors';

describe('HomePage Selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      homePage: {
        newsItems: undefined,
        totalPages: undefined,
        currentPage: undefined,
        isFetching: undefined,
        currentNewsItem: undefined,
      },
    };
  });

  describe('getNewsItems', () => {
    it('should select news items', () => {
      const expected = [{ id: 1 }];

      expect(getNewsItems(state)).toBe(undefined);

      state.homePage.newsItems = [];
      expect(getNewsItems(state)).toEqual([]);

      state.homePage.newsItems = expected;
      expect(getNewsItems(state)).toEqual(expected);
    });
  });

  describe('getTotalPages', () => {
    it('should select total pages', () => {
      expect(getTotalPages(state)).toBe(undefined);

      state.homePage.totalPages = 1;
      expect(getTotalPages(state)).toEqual(1);

      state.homePage.totalPages = 10;
      expect(getTotalPages(state)).toEqual(10);
    });
  });

  describe('getCurrentPage', () => {
    it('should select current page', () => {
      expect(getCurrentPage(state)).toBe(undefined);

      state.homePage.currentPage = 1;
      expect(getCurrentPage(state)).toEqual(1);

      state.homePage.currentPage = 2;
      expect(getCurrentPage(state)).toEqual(2);
    });
  });

  describe('getIsFetching', () => {
    it('should select is fetching', () => {
      expect(getIsFetching(state)).toBe(undefined);

      state.homePage.isFetching = true;
      expect(getIsFetching(state)).toEqual(true);

      state.homePage.isFetching = false;
      expect(getIsFetching(state)).toEqual(false);
    });
  });

  describe('getCurrentNewsItem', () => {
    it('should select current news item', () => {
      const expected = { id: 1 };

      expect(getCurrentNewsItem(state)).toBe(undefined);

      state.homePage.currentNewsItem = null;
      expect(getCurrentNewsItem(state)).toEqual(null);

      state.homePage.currentNewsItem = expected;
      expect(getCurrentNewsItem(state)).toEqual(expected);
    });
  });
});
