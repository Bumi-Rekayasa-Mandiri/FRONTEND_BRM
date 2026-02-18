import apiClient from "../lib/apiClient";

export interface ProjectGalleryItem {
  id: string;
  title: string;
  slug: string;
  description?: string;
  thumbnail: string;
  gallery: string[];
}

export interface ProjectListItem {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  location?: string;
  thumbnail?: string;
  description?: string;
  gallery?: string[];
  service?: { name: string; slug: string };
  client?: { name: string };
}

export interface ProjectDetailItem extends ProjectListItem {
  completion_date?: string; // Format dari backend: "January 20, 2026"
  gallery: string[]; // Array URL
  client?: { name: string; website?: string };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const extractData = (response: any) => {
  if (response?.data?.data && Array.isArray(response.data.data)) {
    return response.data.data;
  }
  if (response?.data && Array.isArray(response.data)) {
    return response.data;
  }
  if (Array.isArray(response?.data)) {
    return response.data;
  }
  if (Array.isArray(response)) {
    return response;
  }
  return [];
};

export const projectApi = {
  getGalleryData: async (): Promise<ProjectGalleryItem[]> => {
    const response = await apiClient.get("/projects/gallery");
    return extractData(response);
  },

  getAllProjects: async (): Promise<ProjectListItem[]> => {
    const response = await apiClient.get("/projects");
    return extractData(response);
  },

  getProjectBySlug: async (slug: string): Promise<ProjectDetailItem> => {
    const response = await apiClient.get(`/projects/${slug}`);
    return response.data.data;
  },
};
