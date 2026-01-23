import apiClient from "../lib/apiClient";
import type { ProjectListItem } from "./projectApi";

export interface ClientItem {
  id: string;
  name: string;
  website?: string;
  logo: string | null;
  projects: ProjectListItem[];
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
  return [];
};

export const clientApi = {
  getAllClients: async (): Promise<ClientItem[]> => {
    const response = await apiClient.get("/clients?projects_limit=4");
    return extractData(response);
  },
};
