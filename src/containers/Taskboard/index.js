import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import { Box, Grid2 } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { STATUSES } from "../../constants";
import TaskList from "../../components/TaskList";
import Typography from "@mui/material/Typography";
import TaskForm from "../../components/TaskForm";
import styles from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/task";
import { toast } from "react-toastify";
import SearchBox from "../../components/SearchBox";

class TaskBoard extends Component {
  state = {
    open: false,
  };

  notify = () => toast.success("Wow so easy !");

  // componentDidMount() {
  //   const { taskActionsCreators } = this.props;
  //   const { fetchListTaskRequest } = taskActionsCreators;
  //   fetchListTaskRequest();
  // }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderForm() {
    let xhtml = null;
    const { open } = this.state;
    xhtml = <TaskForm open={open} abc={this.handleClose} />;
    return xhtml;
  }
  renderBoard() {
    const { listTask } = this.props;
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
  }

  loadData = () => {
    // componentDidMount() {
    const { taskActionsCreators } = this.props;
    const { fetchListTask } = taskActionsCreators;
    fetchListTask();
    // }
  };

  renderSearchBox(){
    let xhtml=null;
    xhtml=(
      <SearchBox/>
    )
    return xhtml
  }

  render() {
    return (
      <div className="">
        <Button
          variant="contained"
          color="primary"
          className=""
          onClick={this.loadData}
        >
          <AddIcon />
          <Typography component="h2">LoadData</Typography>
        </Button>
        <Button
          variant="contained"
          color="primary"
          className=""
          onClick={this.openForm}
        >
          <AddIcon />
          <Typography component="h2">Thêm mới công việc</Typography>
        </Button>
        <Box>
          <button onClick={this.notify}>Notify !</button>
        </Box>
        {this.renderSearchBox()}
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskActionsCreators: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
