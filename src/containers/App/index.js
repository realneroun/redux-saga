import React, { Component } from "react";
import TaskBoard from "../Taskboard";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../components/GlobalLoading";

class App extends Component {
  render() {

    return (
      <div className="">
        <ToastContainer />
        <GlobalLoading/>
        <TaskBoard />
      </div>
    );
  }
}

export default App;
