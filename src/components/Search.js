import React from 'react';

class Search extends React.Component {
	render() {
		return (
			<form>
				<input type="text" placeholder="Type to Filter" value={this.props.filterText} onChange={this.props.filterUpdate} />
			</form>
		);
	}
}
export default Search;