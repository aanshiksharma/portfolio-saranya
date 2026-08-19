import { createBrowserRouter, Navigate } from "react-router-dom";

import PublicLayout from "@/components/layout/public-layout";
import CMSLayout from "@/cms/components/layout/cms-layout";
import CMSAuthGuard from "@/cms/components/layout/cms-auth-guard";

import Home from "@/pages/public/home";
import Projects from "@/pages/public/projects";

import Login from "@/pages/cms/login";
import Dashboard from "@/pages/cms/dashboard";

import NotFound from "@/pages/public/not-found";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      //   {
      //     path: "work/:slug",
      //     element: <Project />,
      //   },
    ],
  },

  // Protected CMS application
  {
    path: "cms/login",
    element: <Login />,
  },

  {
    path: "cms",
    element: <CMSAuthGuard />,
    children: [
      {
        element: <CMSLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/cms/dashboard" replace />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
