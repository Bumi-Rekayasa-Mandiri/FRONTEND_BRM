const appConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api",

  apiRoutes: {
    HOME: "/home",

    SERVICE_CATEGORIES: "/service-categories",
    SERVICE_CATEGORY_DETAIL: (slug: string) => `/service-categories/${slug}`,

    SERVICES: "/services",
    SERVICE_DETAIL: (slug: string) => `/services/${slug}`,

    PROJECTS: "/projects",
    PROJECT_GALLERY: "/projects/gallery",
    PROJECT_DETAIL: (slug: string) => `/projects/${slug}`,

    CLIENTS: "/clients",
    CLIENT_DETAIL: (id: string | number) => `/clients/${id}`,

    ARTICLES: "/articles",
    ARTICLE_DETAIL: (slug: string) => `/articles/${slug}`,

    CERTIFICATES: "/certificates",
  },
};

export const { apiBaseUrl, apiRoutes } = appConfig;
export default appConfig;
