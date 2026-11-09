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
  service?: { name: string; slug: string };
  client?: { name: string };
}

export interface ProjectDetailItem extends ProjectListItem {
  completion_date?: string;
  gallery: string[];
  client?: { name: string; website?: string };
}

const extractData = <T>(response: unknown): T[] => {
  const res = response as { data?: { data?: T[] } | T[] };
  if (res?.data && typeof res.data === "object" && "data" in res.data && Array.isArray(res.data.data)) {
    return res.data.data;
  }
  if (Array.isArray(res?.data)) {
    return res.data;
  }
  if (Array.isArray(response)) {
    return response;
  }
  return [];
};

export const projectApi = {
  getGalleryData: async (): Promise<ProjectGalleryItem[]> => {
    const response = await apiClient.get("/projects/gallery");
    return extractData<ProjectGalleryItem>(response);
  },

  getAllProjects: async (): Promise<ProjectListItem[]> => {
    const firstRes = await apiClient.get("/projects?per_page=24");
    const list = extractData<ProjectListItem>(firstRes);
    const lastPage = (firstRes.data as { meta?: { last_page?: number } })?.meta?.last_page || 1;
    let all = list;
    if (lastPage > 1) {
      const rest = await Promise.all(
        Array.from({ length: lastPage - 1 }, (_, i) =>
          apiClient.get(`/projects?per_page=24&page=${i + 2}`).then((res) => extractData<ProjectListItem>(res))
        )
      );
      all = list.concat(...rest);
    }
    return all.reverse();
  },

  getProjectBySlug: async (slug: string): Promise<ProjectDetailItem> => {
    const response = await apiClient.get(`/projects/${slug}`);
    return response.data.data;
  },
};
