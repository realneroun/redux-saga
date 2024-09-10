import { Grid2 } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import styles from "./styles";

const TaskForm =(props)=> {
    const { classes } = props;
    return (
      <form>
        <Grid2 size={{ md: 12 }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tên công việc"
            fullWidth
            variant="standard"
          />
        </Grid2>
        <Grid2>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mô tả công việc"
            fullWidth
            variant="standard"
          />
        </Grid2>
        <Grid2 size={{ md: 12 }}>
          <Button color="primary">Lưu lại</Button>
          <Button color="danger">Huỷ bỏ</Button>
        </Grid2>
      </form>
    );
  }

export default withStyles(styles)(TaskForm);
