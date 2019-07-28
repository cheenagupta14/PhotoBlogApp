import {GET_USER_POSTS_SUCCESS} from "../actions/posts";

const userPostsInitState = [
    {
       id:"",
       title: "",
       body: "",
       comments: [{
           name:"",
           email: "",
           body: ""
       }
       ]
    }
]

const PostsReducer = (state = userPostsInitState,action) => {
    switch(action.type){
        case GET_USER_POSTS_SUCCESS: {
            const posts = action.posts;
            const comments = action.comments;
            // map comments to posts
            posts.map((post, index) => {
               const commentsForPost = comments.filter((comment) => comment.postId === post.id);
               post["comments"] = commentsForPost;
               return {...post}
            });
            return action.posts;
        }
        default:
            return state;
    }
}

export default PostsReducer;