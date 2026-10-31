import apiClient from "../lib/apiClient";

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  type?: "news" | "release";
  featured_image: string | null;
  content_images: string[];
  published_at: string;
  published_at_human: string;
  frontend_url: string;
}

export interface ArticleDetailData {
  data: ArticleItem;
  related: ArticleItem[];
}

export interface ArticlePaginationMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface ArticleListResponse {
  data: ArticleItem[];
  meta: ArticlePaginationMeta;
}

export const articleApi = {
  getArticles: async (page = 1): Promise<ArticleListResponse> => {
    const response = await apiClient.get(`/articles?page=${page}`);
    return {
      data: response.data?.data || [],
      meta: response.data?.meta || { current_page: 1, last_page: 1, per_page: 10, total: 0 },
    };
  },
  getAllArticles: async (page = 1): Promise<ArticleItem[]> => {
    const response = await apiClient.get(`/articles?page=${page}`);
    return response.data?.data || response.data || [];
  },
  getArticleBySlug: async (slug: string): Promise<ArticleDetailData> => {
    const response = await apiClient.get(`/articles/${slug}`);
    return response.data;
  },
};
