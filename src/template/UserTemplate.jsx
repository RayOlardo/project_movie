import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import Loading from './../pages/Loading/Loading'
const UserTemplate = () => {
  const { isLoading } = useSelector((state) => {
    return state.loading;
  });
  return (
    <Fragment>
    {isLoading ? <Loading/> : <></>}
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
};

export default UserTemplate;
