const useZenn = () => {
  const username = "swan14gg";

  const fetchArticles = async (count: number = 5) => {
    return await useFetch<ArticleResponse>("https://zenn.dev/api/articles/", {
      params: {
        username,
        order: "latest",
        count,
      },
    });
  };

  const fetchScraps = async (count: number = 5) => {
    return await useFetch<ScrapResponse>("https://zenn.dev/api/scraps/", {
      params: {
        username,
        order: "latest",
        count,
      },
    });
  };

  return {
    fetchArticles,
    fetchScraps,
  };
};
export default useZenn;
