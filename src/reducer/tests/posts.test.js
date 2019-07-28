import { userPostsInitState } from "../posts";
import { GET_USER_POSTS_SUCCESS } from "../../actions/posts";
import { expect } from "chai";

describe("Post Reducer", () => {
   const state = [...userPostsInitState];

   it(`Action : ${GET_USER_POSTS_SUCCESS}`, () => {
    const fetchUserPostsSuccessAction = {
      type: GET_USER_POSTS_SUCCESS,
      posts: [{
       id:"1",
       title: "post1 details",
       body: "post body",
      }],
      comments: [{
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "comment body"
      }]
    };

    const expectedResult = {
      ...state,
      posts: [{
        id:"1",
        title: "post1 details",
        body: "post body",
        comments: [{
          "name": "id labore ex et quam laborum",
          "email": "Eliseo@gardner.biz",
          "body": "comment body"
        }]
      }]
    }
    // checks for the result of reducer with expected result
    expect(reducer(state, fetchUserPostsSuccessAction)).to.be.deep.equal(expectedResult);
  });

  it(`Action : ${GET_USER_POSTS_FAILURE}`, () => {
    const expectedError = "Service Error";
    const fetchUserPostsFailureAction = {
      type: GET_USER_POSTS_FAILURE,
      error: expectedError
    };
     
    // check error secnario , according to current implementation there is no state when error occurs
    expect(reducer(state, fetchUserPostsFailureAction)).to.be.deep.equal(state);
  });
});
