import React from 'react';

export default class Page1 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
	}

	render() {
		return (
		<div>hello world</div>
		)
	}
}