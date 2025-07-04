import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import GetInTouch from "./GetInTouch";

export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      {/* <> */}
      <Outlet />
      {/* </> */}
    </>
  );
}
