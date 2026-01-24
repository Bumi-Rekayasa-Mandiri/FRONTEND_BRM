import apiClient from "../lib/apiClient";
import { apiRoutes } from "../config/appConfig";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  location?: string;
  thumbnail?: string;
  description?: string;
  service?: { name: string; slug: string };
  client?: { name: string };
}

export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  excerpt?: string;
  description?: string;
  thumbnail?: string;
  gallery: string[];
  projects_count?: number;
  category?: { name: string; slug: string };
  projects?: ProjectItem[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  services_count?: number;
  services?: ServiceItem[];
}

export interface ApiResponse<T> {
  data: T;
  meta?: unknown;
  links?: unknown;
}

export const serviceCategoryApi = {
  getAllCategories: async (): Promise<ServiceCategory[]> => {
    const response = await apiClient.get<ApiResponse<ServiceCategory[]>>(
      apiRoutes.SERVICE_CATEGORIES,
    );
    return response.data.data;
  },

  getCategoryBySlug: async (slug: string): Promise<ServiceCategory> => {
    const response = await apiClient.get<ApiResponse<ServiceCategory>>(
      apiRoutes.SERVICE_CATEGORY_DETAIL(slug),
    );
    return response.data.data;
  },

  getServiceBySlug: async (slug: string): Promise<ServiceItem> => {
    const response = await apiClient.get<ApiResponse<ServiceItem>>(
      `/services/${slug}` 
    );
    return response.data.data;
  }
};