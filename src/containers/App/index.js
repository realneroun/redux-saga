import React, { Component } from "react";
import TaskBoard from "../Taskboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../components/GlobalLoading";
import Modals from "../../components/Modal";

const App = () => {
  return (
    <div className="">
      <ToastContainer />
      <Modals />
      <GlobalLoading />
      <TaskBoard />
    </div>
  );
};

export default App;
