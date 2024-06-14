import React, { Suspense } from "react";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootPage from "pages";
const MarketingLazy = lazy(() => import("pages/MarketingApp"));

const HomePage = lazy(() => import("pages/HomePage"));

export const routeItems = [
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={null}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={null}>
            <MarketingLazy />
          </Suspense>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routeItems);

export default router;
