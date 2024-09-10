import CloseIcon from "@mui/icons-material/Close";
import { Grid2 } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { withStyles } from "@mui/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalActions from "../../actions/modal";
import styles from "./styles";

const Modals = (props) => {
  const { classes } = props;
  const { open, title, component } = useSelector(({ modal }) => ({
    open: modal.showModal,
    title: modal.title,
    component: modal.component,
  }));
  const dispatch = useDispatch();
  const hideModal = () =>{
    dispatch(modalActions.hideModal())
  }
  return (
    <Modal open={open} onClose={hideModal}>
      <div className={classes.modal}>
        <form>
          <Grid2 container>
            <div className={classes.title}>{title}</div>
            <Button>
              <CloseIcon onClick={hideModal}></CloseIcon>
            </Button>
            <div className={classes.content}>{component}</div>
          </Grid2>
        </form>
      </div>
    </Modal>
  );
};

// const mapStateToProps = (state) => ({
//   open: state.modal.showModal,
//   component: state.modal.component,
//   title: state.modal.title,
// });

// const mapDispatchToProps = (dispatch) => ({
//   modalActionsCreators: bindActionCreators(modalActions, dispatch),
// });

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withStyles(styles)(Modals);
