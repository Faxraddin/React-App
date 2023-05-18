import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/footer";

const MainRoot = () => {
  return (
    <>
      <Outlet />
      <Footer/>
    </>
  );
};

export default MainRoot;
