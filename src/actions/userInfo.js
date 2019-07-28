export const GET_USER_INFO = "GET_USER_INFO";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILURE = "GET_USER_INFO_FAILURE";
// export const GET_USER_INFO = "GET_USER_INFO";

export const fetchUserInfoAction = (userId) => ({
  type: GET_USER_INFO,
  userId
})

export const fetchUserInfoSuccessAction = (data) => ({
    type: GET_USER_INFO_SUCCESS,
    data
  })

  export const fetchUserInfoFailureAction = (userId) => ({
    type: GET_USER_INFO_FAILURE,
    userId
  })