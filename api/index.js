import { API_HOST, API_KEY } from '../config.json';

export const fetchNewsItems = async ({ page } = { page: 1 }) => {
  const res = await fetch(`${API_HOST}/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=singapore&page=${page}`);
  const data = await res.json();

  return data;
};
