import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import styles from "./styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid2 } from "@mui/material";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    const { id, title, description } = task;
    return (
      <Card key={task.id}>
        <CardContent>
          <Grid2 container justifyContent="space-between">
            <Grid2 item size={{ md: 8 }}>
              <Typography component="h2">{title}</Typography>
            </Grid2>
            <Grid2 item size={{ md: 4 }}>
              {status.label}
            </Grid2>
          </Grid2>
          <Typography component="p">{description}</Typography>  
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab color="primary" aria-label="add" size="small">
          <EditIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit" size="small">
            <DeleteIcon/>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
