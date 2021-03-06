import { connect } from 'react-redux';
import { fetchFriends, unFriend } from "../../actions/friend_actions"
import FriendMain from './friend_main.jsx'


const msp = (state, ownProps) => {
	const currentUserId = state.session.currentUser.id;
	return {
		currentUser: state.session.currentUser,
		friends: Object.values(state.entities.friends),
	};
}

const mdp = dispatch => {
	return {
		fetchFriends: () => dispatch(fetchFriends()),
		unFriend: (friendId) => dispatch(unFriend(friendId)),
	};
}

export default connect(msp, mdp)(FriendMain)