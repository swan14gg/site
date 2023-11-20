// Qiita

type ArticleResponse = {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string; // ISO8601形式の日付文字列
  group: {
    created_at: string;
    description: string;
    name: string;
    private: boolean;
    updated_at: string;
    url_name: string;
  };
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  stocks_count: number;
  tags: Array<{
    name: string;
    versions: string[];
  }>;
  title: string;
  updated_at: string;
  url: string;
  user: {
    description: string;
    facebook_id: string;
    followees_count: number;
    followers_count: number;
    github_login_name: string;
    id: string;
    items_count: number;
    linkedin_id: string;
    location: string;
    name: string;
    organization: string;
    permanent_id: number;
    profile_image_url: string;
    team_only: boolean;
    twitter_screen_name: string;
    website_url: string;
  };
  page_views_count: number;
  team_membership: {
    name: string;
  };
  organization_url_name: string;
  slide: boolean;
}[];

// Zenn

type ScrapResponse = {
  scraps: Scrap[];
  next_page: number | null;
};

type User = {
  id: number;
  username: string;
  name: string;
  avatar_small_url: string;
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
