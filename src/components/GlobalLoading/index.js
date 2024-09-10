import { withStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import LoadingIcon from "../../assets/image/abc.gif";
import styles from "./style";

const GlobalLoading = (props) => {
    const showLoading = useSelector((state)=>state.ui.showLoading)
    const { classes} = props;
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

// const mapStateToProps = (state) => {
//   return {
//     showLoading : state.ui.showLoading
//   };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         uiActions: bindActionCreators(uiActions, dispatch)
//     }
// }

// const withConnect = connect(mapStateToProps, null);

export default withStyles(styles)(GlobalLoading);
