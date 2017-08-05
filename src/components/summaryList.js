import React from 'react';

export default class SummaryList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const listItems = this.props.list.map((item, index) => {
			return (
				<li key={item}>{item}</li>
			);
		});
		return (
			<ul className="listContent">
				{listItems}
			</ul>);
	}
}