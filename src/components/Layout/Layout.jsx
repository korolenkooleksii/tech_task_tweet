import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import {Loader} from "../Loader/Loader";
import { Container } from "./Layout.styled";
import { Header } from "../Header/Header";

export const Layout = () => {
  return (
    <Container>
      <Header/>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Container>
  );
};
