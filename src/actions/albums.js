export const GET_USER_ALBUMS_SUCCESS = "GET_USER_ALBUMS_SUCCESS";
export const GET_USER_ALBUMS_FAILURE = "GET_USER_ALBUMS_FAILURE";

export const fetchUserAlbumsSuccessAction = (albums, photos) => ({
    type: GET_USER_ALBUMS_SUCCESS,
    albums,
    photos
  })

  export const fetchUserAlbumsFailureAction = (error) => ({
    type: GET_USER_ALBUMS_FAILURE,
    error
  })