import apiClient from "../lib/apiClient";
import type { ProjectListItem } from "./projectApi";
import type { ClientItem } from "./clientApi";
import type { ServiceCategory } from "./serviceCategoryApi";

export interface ArticleHomeItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  type: "news" | "release";
  thumbnail: string | null;
  published_at: string;
  frontend_url: string;
}

export interface HomeData {
  featured_projects: ProjectListItem[];
  articles: {
    latest_news: ArticleHomeItem[];
    news_release: ArticleHomeItem[];
  };
  services: ServiceCategory[];
  clients: ClientItem[];
}

export const homeApi = {
  getHomeData: async (): Promise<HomeData> => {
    const response = await apiClient.get("/home");
    return response.data;
  },
};
