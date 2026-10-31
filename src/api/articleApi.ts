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

export const articleApi = {
  getAllArticles: async (): Promise<ArticleItem[]> => {
    const response = await apiClient.get("/articles");
    return response.data?.data || response.data || [];
  },
  getArticleBySlug: async (slug: string): Promise<ArticleDetailData> => {
    const response = await apiClient.get(`/articles/${slug}`);
    return response.data;
  },
};
