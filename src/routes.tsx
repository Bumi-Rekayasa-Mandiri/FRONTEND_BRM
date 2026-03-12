import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./layouts/MainLayout";
import Loader from "./components/common/Loader";

const Home = lazy(() => import("./pages/Home/Home"));
const ServiceCategory = lazy(() => import("./pages/Services/ServiceCategory"));
const ServiceList = lazy(() => import("./pages/Services/ServiceList"));
const ProjectList = lazy(() => import("./pages/Project/ProjectList"));
const ArticleDetail = lazy(() => import("./pages/Articles/ArticleDetail"));
const Gallery = lazy(() => import("./pages/Project/Gallery"));
const ProjectDetail = lazy(() => import("./pages/Project/ProjectDetail"));
const ClientDetail = lazy(() => import("./pages/Clients/ClientDetail"));
const Clients = lazy(() => import("./pages/Clients/Clients"));
const About = lazy(() => import("./pages/About/AboutUs"));
const Contact = lazy(() => import("./pages/About/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "articles/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <ArticleDetail />
          </Suspense>
        ),
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <ServiceCategory />
              </Suspense>
            ),
          },
          {
            path: ":slug",
            element: (
              <Suspense fallback={<Loader />}>
                <ServiceList />
              </Suspense>
            ),
          },
          {
            path: ":categorySlug/:slug",
            element: (
              <Suspense fallback={<Loader />}>
                <ProjectList />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "projects",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <Gallery />
              </Suspense>
            ),
          },
          {
            path: ":slug",
            element: (
              <Suspense fallback={<Loader />}>
                <ProjectDetail />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "clients",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <Clients />
              </Suspense>
            ),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<Loader />}>
                <ClientDetail />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default router;
