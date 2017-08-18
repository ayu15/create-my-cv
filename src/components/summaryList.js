import React from 'react';

export default class SummaryList extends React.Component {

	render() {
		const listItems = this.props.list.map((item, index) => {
			return (
				<li key={item} className="smr-list-item">{item}</li>
			);
		});
		return (
			<ul className="list-cnt smr-list">
				{listItems}
			</ul>);
	}
}