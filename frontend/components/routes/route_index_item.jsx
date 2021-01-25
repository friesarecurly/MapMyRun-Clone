import React from 'react';
import { Link } from 'react-router-dom'
// import { openModal } from '../../actions/modal_actions' 
import Modal from "../../modal/modal";

class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }  

  render(){
    debugger
    const { route, deleteRoute, openModal } = this.props;

    return (
			<tr className="route-row">
				<td className="route-row-img">
					<Link to={`/routes/${route.id}`}>Image of route</Link>
				</td>
				<td className="route-row-date">
					<Link to={`/routes/${route.id}`}>
						{new Intl.DateTimeFormat("en-US").format(route.created_at)}
					</Link>
				</td>
				<td className="route-row-distance">{route.distance} mi</td>
				<td className="route-row-elevation">Elevation</td>
				<td className="route-row-title">
					<Link to={`/routes/${route.id}`}>{route.route_title}</Link>
				</td>
				<td className="route-row-location">{route.location}</td>
				<td className="route-row-privacy">Privacy</td>
				<td className="route-row-options">
					<Link to={`/routes/${route.id}/edit`}>Edit</Link>
					<Link routeid={route.id} onClick={() => openModal("open")}>
						Delete
					</Link>
					<Modal deleteRoute={(route) => deleteRoute(route.id)} />
				</td>
			</tr>
		);
  }
}


export default RouteIndexItem;