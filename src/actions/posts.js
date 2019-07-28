export const GET_USER_POSTS = "GET_USER_POSTS";
export const GET_USER_POSTS_SUCCESS = "GET_USER_POSTS_SUCCESS";
export const GET_USER_POSTS_FAILURE = "GET_USER_POSTS_FAILURE";
export const GET_USER_COMMENTS = "GET_USER_COMMENTS";
export const GET_USER_COMMENTS_SUCCESS = "GET_USER_COMMENTS_SUCCESS";
export const GET_USER_COMMENTS_FAILURE = "GET_USER_COMMENTS_FAILURE";

export const fetchUserPostsSuccessAction = (posts, comments) => ({
    type: GET_USER_POSTS_SUCCESS,
    posts,
    comments
  })

  export const fetchUserPostsFailureAction = (error) => ({
    type: GET_USER_POSTS_FAILURE,
    error
  })

  export const fetchCommentsSuccessAction = (data) => ({
    type: GET_USER_COMMENTS_SUCCESS,
    data
  })

  export const fetchCommentsFailureAction = (error) => ({
    type: GET_USER_COMMENTS_FAILURE,
    error
  })
