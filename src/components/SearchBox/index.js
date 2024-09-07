import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import styles from "./styles";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';


class SearchBox extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormControl className={classes.search}>
          <TextField size="small" variant="outlined" />
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(SearchBox);
