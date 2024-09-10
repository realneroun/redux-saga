import { withStyles } from "@mui/styles";
import React, { Component } from "react";

import {Grid2} from "@mui/material";
import styles from "./styles";
import Box from "@mui/material/Box";
import TaskItem from "../TaskItem";

const TaskList = (props) => {
    const { classes,tasks,status } = props;
    return (
      <Grid2 item size={{ xs: 12, md: 4 }} key={status.value}>
        <Box sx={{ mt: 1, mb: 1 }}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className="wrapperListTask">
          {tasks.map((task) => {
            // const { title, description } = task;
            return(
                <TaskItem task={task} status={status} key={task.id}/>
            );
          })}
        </div>
      </Grid2>
    );
  }


export default withStyles(styles)(TaskList);
