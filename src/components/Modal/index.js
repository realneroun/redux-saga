import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid2 } from "@mui/material";
import Modal from "@mui/material/Modal";
import styles from "./styles";
import { withStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as modalActions from "../../actions/modal";

class Modals extends Component {
  render() {
    const { open, classes, component, modalActionsCreators, title } =
      this.props;
    const { hideModal } = modalActionsCreators;
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
  }
}

const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  component: state.modal.component,
  title: state.modal.title,
});

const mapDispatchToProps = (dispatch) => ({
  modalActionsCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(Modals);
