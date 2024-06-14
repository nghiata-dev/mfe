import React from "react";
import MainLayout from "components/MainLayout";
import { Outlet } from "react-router-dom";

export const RootPage = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default RootPage;
