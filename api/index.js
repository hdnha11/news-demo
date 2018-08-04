export const fetchNewsItems = async ({ page } = { page: 1 }) => {
  const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5763846de30d489aa867f0711e2b031c&q=singapore&page=${page}`);
  const data = await res.json();

  return data;
};
