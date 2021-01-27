import React from 'react';

class RouteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.route

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
    this.setState({ [field]: e.currentTarget.value})
    }
  }


  // handleSubmit(e){
  //   e.preventDefault();

  // }

  render () {
		const { formType } = this.props;
		
    return (
			<div className="create-route-cntr">
				<div className="cr-form">
					<div className="cr-search-bar">
						<input
							id="geocoder-addr"
							type="text"
							placeholder="Enter location"
							// value={this.state.search}
							// onChange={this.update("search")}
						/>
						<button id="geocoder-submit">Search</button>
					</div>

					<br />

					<div>
						<h3>{formType} Route Details</h3>
						<input
							type="text"
							// value={this.state.route_title}
							// onChange={this.update("route_title")}
							placeholder="Route title"
						/>

						<select>
							<option>Choose an Activity</option>
							<option value="walk">Walk</option>
							<option value="run">Run</option>
							<option value="bike">Bike</option>
						</select>
					</div>
				</div>
				

			</div>
		);
  }
}

export default RouteForm;