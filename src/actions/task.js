import * as taskApis from "../apis/task";
import * as taskConstants from "../constants/task";

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListTaskFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};

// export const fetchListTaskRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchListTask());
//     taskApis
//       .getList()
//       .then((resp) => {
//         const {data} = resp;
//         dispatch(fetchListTaskSuccess(data));
//       })
//       .catch((error) => {
//         dispatch(fetchListTaskFailed(error));
//       });
//   };
// };


export const filterTask = keyword => {
  return {
    type: taskConstants.FILTER_TASK,
    payload: {
      keyword
    },
  };
};

export const filterTaskSuccess = data => {
  return {
    type: taskConstants.FILTER_TASK_SUCCESS,
    payload: {
      data
    },
  };
};