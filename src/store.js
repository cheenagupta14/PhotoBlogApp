// const routingElements = connectRoutes(createHistory(), routesMap, { initialDispatch: false });
import { createStore, combineReducers, applyMiddleware} from 'redux';
import UserInfoReducer  from "./reducer/userInfo";
import PostsReducer from "./reducer/posts";
import AlbumsReducer from "./reducer/albums";
import thunk from 'redux-thunk';

const configureStore = () => {
    return createStore(
        combineReducers({userInfo: UserInfoReducer,
                          posts: PostsReducer,
                        albums: AlbumsReducer}),
        applyMiddleware(thunk)
    );
  };
  
 const store = configureStore();
 export default store;