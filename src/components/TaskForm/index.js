import React, { Component } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";


export default class TaskForm extends Component {

  render() {
    const { open, abc } = this.props;
    return (
      <Dialog
        open={open}
        onClose={abc}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            abc();
          },
        }}
      >
        <DialogTitle>Thêm mới công việc</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tên công việc"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mô tả công việc"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={abc}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    );
  }
}
