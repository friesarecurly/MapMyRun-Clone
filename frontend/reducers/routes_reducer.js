import {
	RECEIVE_ROUTES,
	RECEIVE_ROUTE,
	REMOVE_ROUTE,
	CLEAR_ROUTES,
} from "../actions/route_actions";
import merge from 'lodash/merge'

const RoutesReducer = (state = {}, action) => {
	Object.freeze(state);
	const { routesInfo, route, routeId } = action;

	 ;

	switch (action.type) {
		case RECEIVE_ROUTES:
			if (Object.keys(routesInfo).length) {
				return routesInfo.routes;
			} else {
				return state;
			}
		case RECEIVE_ROUTE:
			return { [route.id]: route };
		case REMOVE_ROUTE:
			 ;
			const newState = merge({}, state);
			delete newState[routeId];
			return newState;
		case CLEAR_ROUTES:
			return {};
		default:
			return state;
	}
}

export default RoutesReducer;