import apiClient from "../lib/apiClient";

export interface CertificateItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  issued_by?: string;
  issued_year?: number;
  thumbnail: string | null;
  file: string | null;
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

export const certificateApi = {
  getAllCertificates: async (): Promise<CertificateItem[]> => {
    const response = await apiClient.get("/certificates");
    return extractData(response);
  },
};
