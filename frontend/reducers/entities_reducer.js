import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import routesReducer from './routes_reducer';
import friendsReducer from "./friends_reducer";
import peopleReducer from "./people_reducer";
import friendRequestReducer from "./friend_request_reducer"
import commentsReducer from "./comments_reducer"

export default combineReducers({
  users: usersReducer,
  routes: routesReducer,
  friends: friendsReducer,
  friendReq: friendRequestReducer,
  people: peopleReducer,
  comments: commentsReducer,
})

