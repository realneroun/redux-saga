import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import styles from "./styles";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';


const SearchBox = (props)=> {
    const { classes, handleChange } = props;
    return (
      <div>
        <FormControl className={classes.search}>
          <TextField size="small" variant="outlined" onChange={handleChange} autoComplete="off" placeholder="Nhap tu khoa"/>
        </FormControl>
      </div>
    );
  }


export default withStyles(styles)(SearchBox);
