import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props

		return (
			<div>
				<p>
					{data[selectedBuilding - 1] && data[selectedBuilding - 1].address
						?
						<i>{data[selectedBuilding - 1].name + ': ' + data[selectedBuilding - 1].address}</i>
						:
						data[selectedBuilding - 1] && !data[selectedBuilding - 1].address
							?
							<i>{data[selectedBuilding - 1].name + ': N/A'}</i>
							:
							<i>Click on building name or code to view more information.</i>
					}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;