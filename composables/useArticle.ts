const useArticle = () => {
  const username = "swan14gg";

  const fetchArticles = async (page: number, perPage: number = 5) => {
    return await useFetch<ArticleResponse>(
      `https://qiita.com/api/v2/users/${username}/items`,
      {
        params: {
          page,
          per_page: perPage,
        },
      },
    );
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
export default useArticle;
