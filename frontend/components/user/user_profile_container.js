import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import UserProfile from "./user_profile"
import { findFriends } from "../../actions/friend_actions"
import { fetchUser } from "../../actions/user_actions"
import { clearRoutes, fetchRoutes } from "../../actions/route_actions";
import { clearErrors } from "../../actions/comment_actions";
import {
	fetchComments,
	deleteComment,
	createComment,
	clearComments,
} from "../../actions/comment_actions";

const msp = (state, ownProps) => {
	const userId = ownProps.match.params.id;
	return {
		userProfile: state.entities.user,
		routes: Object.values(state.entities.routes),
		comments: state.entities.comments,
		commentErrors: state.errors.comments,
		currentUser: state.session.currentUser,
	};
}

const mdp = (dispatch) => {
  return {
		fetchUser: (id) => dispatch(fetchUser(id)),
		findFriends: (criteria) => dispatch(findFriends(criteria)),
		clearRoutes: () => dispatch(clearRoutes()),
		fetchRoutes: (userId) => dispatch(fetchRoutes(userId)),
		fetchComments: (routeIds) => dispatch(fetchComments(routeIds)),
		clearComments: () => dispatch(clearComments()),
		deleteComment: (commentId) => dispatch(deleteComment(commentId)),
		createComment: (comment) => dispatch(createComment(comment)),
		clearErrors: () => dispatch(clearErrors()),
	};
}

export default withRouter(connect(msp, mdp)(UserProfile))
