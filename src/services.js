import {fetchUserInfoSuccessAction, fetchUserInfoFailureAction} from "./actions/userInfo";
import {fetchUserPostsSuccessAction, fetchUserPostsFailureAction} from "./actions/posts";
import {fetchUserAlbumsSuccessAction} from "./actions/albums";
const axios = require('axios');

const BASEURL = 'https://jsonplaceholder.typicode.com';

export const getUserInfo = (userId) => {
  return (dispatch) => {
     axios.get(BASEURL+`/users/${userId}`)
    .then(function (response) {
        // handle success
         return dispatch(fetchUserInfoSuccessAction(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return dispatch(fetchUserInfoFailureAction(error));
      })
    }
}

export const getUserPosts = (userId) => {
  return (dispatch) => {
    
  const  posts =   axios.get(BASEURL+`/posts?userId=${userId}`)
    .then(function (response) {
        // handle success
        const posts = response.data;
      axios.get(BASEURL+`/comments`) // Fetch comments from api
        .then(function (response) {
            // handle success
             const comments= response.data;
             return dispatch(fetchUserPostsSuccessAction(posts,comments)); 
          });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return dispatch(fetchUserPostsFailureAction(error));
      })
    }
}

export const getAlbums = (userId) => {
  return (dispatch) => {
    axios.get(BASEURL+`/albums?userId=${userId}`)
    .then(function (response) {
        // handle success
        const albums = response.data;
      axios.get(BASEURL+`/photos`) // Fetch photos
        .then(function (response) {
            // handle success
             const photos= response.data;
             return dispatch(fetchUserAlbumsSuccessAction(albums,photos)); 
          });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return dispatch(fetchUserPostsFailureAction(error));
      })
    }
}


