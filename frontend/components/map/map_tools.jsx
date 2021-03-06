import React from 'react'

class MapTools extends React.Component {


  // contains, distance in miles
  // undo button aka pop from markers array
  // clear button aka clear markers array
  // center button aka center map to default lat.lng
  // reverse button aka reverse markers array
  // return button aka markers array .push(markers[0])


  render() {
    const { distance, undo, clear, center, reverse, returnHome } = this.props
    // const miles = (distance * 0.000621371).toFixed(2);

    return (
			<div className="map-toolbar-cntr">
				<div className="tb-1">
					<label>
						Distance
						<h2>{distance}</h2>
					</label>
				</div>
				<div className="tb-2">
					<div className="tb2-row 1">
						<button className="tb undo" onClick={undo}>
							<i className="fas fa-undo fa"></i>
							<p>Undo</p>
						</button>
						<button className="tb clear" onClick={clear}>
							<i className="fas fa-times"></i>
							<p>Clear</p>
						</button>
						<button className="tb center" onClick={center}>
							<i className="fas fa-compress-arrows-alt"></i>
							<p>Center</p>
						</button>
					</div>
					<div className="tb2-row 2">
						<button className="tb reverse" onClick={reverse}>
							<i className="fas fa-exchange-alt"></i>
							<p>Reverse</p>
						</button>
						<button className="tb return" onClick={returnHome}>
							<i className="fas fa-sync"></i>
							<p>
                Return
              </p>
						</button>
					</div>
				</div>
			</div>
		);
  }

}

export default MapTools;