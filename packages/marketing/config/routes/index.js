// import PrivateRoute from "@components/Molecule/PrivateRoute";
// import PublicRoute from '@components/Molecule/PublicRoute'
// import UnauthorizedPage from '@pages/UnauthorizedPage'
import React, { Suspense } from "react";
import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import RootPage from "pages";
// const MarketingLazy = lazy(() => import("pages/MarketingApp"));

// import ROUTE_PATHS from "./routes.path";
// import onboardingRoutes from './onboarding.routes'
// import userManagementRoutes from './userManagement.routes'
// import alertingRoutes from './alerting.routes'
// import tenantManagementRoutes from './tenant.routes'
// import reportRoutes from './report.routes'
// import monitoringRoutes from './monitoring.routes'
// import roleManagementRoutes from './rolesManagement.routes'
// import publicRoutes from "./public.routes";
// import { PublicRoute } from "../..";

const HomePage = lazy(() => import("components/Pricing"));
// import Pricing from "./components/Pricing";

export const routeItems = [
  {
    path: "/",
    element: <RootPage />,
    children: [
      // {
      //   index: true,
      //   element: <Navigate to="/" replace />,
      // },
      // {
      //   path: "/",
      //   element: (
      //     <Suspense fallback={null}>
      //       <HomePage />
      //     </Suspense>
      //   ),
      // },
      {
        path: "/about",
        element: (
          <Suspense fallback={null}>
            <HomePage />
          </Suspense>
        ),
      },
      // {
      //   path: "/about",
      //   element: (
      //     // <PublicRoute pageTitle="Welcome to ...">
      //     <Suspense fallback={null}>
      //       <MarketingLazy />
      //     </Suspense>
      //     // <MarketingLazy />
      //     // </PublicRoute>
      //   ),
      // },
      // {
      //   path: "/",
      //   element: <div>test</div>,
      // },
      // {
      //   path: ROUTE_PATHS.OVERALL_MONITORING,
      //   element: (
      //     <PublicRoute pageTitle="Welcome to ...">
      //       <OverallMonitoring />
      //     </PublicRoute>
      //   ),
      // },
      //   {
      //     path: ROUTE_PATHS.NO_PERMISSION,
      //     element: (
      //       <PublicRoute pageTitle="Unauthorized">
      //         <UnauthorizedPage />
      //       </PublicRoute>
      //     ),
      //   },
      //   onboardingRoutes,
      //   userManagementRoutes,
      //   roleManagementRoutes,
      //   tenantManagementRoutes,
      // monitoringRoutes,
      //   alertingRoutes,
      //   reportRoutes,
    ],
  },
  // ...publicRoutes,
];
// export const routeItems = [
//   ...publicRoutes,
// ]

const router = createBrowserRouter(routeItems);

export default router;
