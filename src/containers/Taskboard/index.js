import AddIcon from "@mui/icons-material/Add";
import { Box, Grid2 } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as modalActions from "../../actions/modal";
import * as taskActions from "../../actions/task";
import SearchBox from "../../components/SearchBox";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import { STATUSES } from "../../constants";
import styles from "./styles";

const TaskBoard = () => {
  const [currState, setCurrState] = useState({ open: false, count: 1 });
  const listTask = useSelector((state) => state.task.listTask);
  const [currKeyword, setCurrKeyword] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(taskActions.fetchListTask());
  }, []);
  useEffect(() => {
    dispatch(taskActions.filterTask(currKeyword));
  }, [currKeyword]);
  const notify = () => toast.success("Wow so easy !");

  // componentDidMount() {
  //   const { taskActionsCreators } = this.props;
  //   const { fetchListTaskRequest } = taskActionsCreators;
  //   fetchListTaskRequest();
  // }

  const handleClose = () => {
    // const _state={
    //   ...currState,
    //   open: false
    // };
    // setCurrState(_state);
    setCurrState((prevState) => {
      return {
        ...prevState,
        open: false,
      };
    });
  };

  const openForm = () => {
    dispatch(modalActions.showModal());
    dispatch(modalActions.changeModalTitle("Them moi cong viec"));
    dispatch(modalActions.changeModalContent(<TaskForm />));
  };

  const renderForm = () => {
    let xhtml = null;
    const { open } = this.state;
    xhtml = <TaskForm open={open} abc={this.handleClose} />;
    return xhtml;
  };
  const renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid2 container spacing={2}>
        {STATUSES.map((status) => {
          const taskFiltered = listTask.filter(
            (task) => task.status == status.value
          );
          return (
            <TaskList tasks={taskFiltered} key={status.value} status={status} />
          );
        })}
      </Grid2>
    );
    return xhtml;
  };

  const loadData = () => {
    dispatch(taskActions.fetchListTask());
  };

  const handleFilter = (e) => {
    const { value } = e.target;
    setCurrKeyword(value);
    // dispatch(taskActions.filterTask(value))
  };

  const renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={handleFilter} />;
    return xhtml;
  };

  return (
    <div className="">
      <Button
        variant="contained"
        color="primary"
        className=""
        onClick={loadData}
      >
        <AddIcon />
        <Typography component="h2">LoadData</Typography>
      </Button>
      <Button
        variant="contained"
        color="primary"
        className=""
        onClick={openForm}
      >
        <AddIcon />
        <Typography component="h2">Thêm mới công việc</Typography>
      </Button>
      <Box>
        <button onClick={notify}>Notify !</button>
      </Box>
      {renderSearchBox()}
      {renderBoard()}
    </div>
  );
};

export default withStyles(styles)(TaskBoard);
