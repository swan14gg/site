type ArticleResponse = {
  articles: Article[];
  next_page: number | null;
};

type ScrapResponse = {
  scraps: Scrap[];
  next_page: number | null;
};

type Article = {
  id: number;
  post_type: "Article";
  title: string;
  slug: string;
  published: boolean;
  comments_count: number;
  liked_count: number;
  body_letters_count: number;
  article_type: "tech" | "idea";
  emoji: string;
  is_suspending_private: boolean;
  published_at: string;
  body_updated_at: string;
  source_repo_updated_at: string;
  path: string;
  user: User;
  publication: Publication | null;
};

type User = {
  id: number;
  username: string;
  name: string;
  avatar_small_url: string;
};

type Publication = {
  id: number;
  name: string;
  avatar_small_url: string;
  display_name: string;
  beta_stats: boolean;
  avatar_registered: boolean;
};

type Scrap = {
  id: number;
  post_type: "Scrap";
  user_id: number;
  slug: string;
  title: string;
  closed: boolean;
  closed_at: string | null;
  archived: boolean;
  liked_count: number;
  can_others_post: boolean;
  comments_count: number;
  created_at: string;
  last_comment_created_at: string;
  should_noindex: boolean;
  path: string;
  topics: Topic[];
  user: User;
};

type Topic = {
  id: number;
  name: string;
  display_name: string;
  taggings_count: number;
  image_url: string;
};
