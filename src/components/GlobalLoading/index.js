import React, { Component } from "react";
import styles from "./style";
import LoadingIcon from "../../assets/image/abc.gif";
import { withStyles } from "@mui/styles";
import * as uiActions from "../../actions/ui";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img src={LoadingIcon} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}

const mapStateToProps = (state) => {
  return {
    showLoading : state.ui.showLoading
  };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         uiActions: bindActionCreators(uiActions, dispatch)
//     }
// }

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
