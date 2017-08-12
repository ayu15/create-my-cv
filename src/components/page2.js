import React from 'react';

export default class Page2 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.isActive = this.isActive.bind(this);
	}

	isActive() {
		return ((2 === this.props.active) ? 'active' : 'inactive');
	}

	render() {
		return (
			<div className={`skw-page skw-page-2 ${this.isActive()}`}>
				<div className="skw-page__half skw-page__half--left">
					<div className="skw-page__skewed">
						<div className="skw-page__content">
							<h2 className="skw-page__heading">Page 2</h2>
							<p className="skw-page__description">Nothing to do here, continue scrolling.</p>
						</div>
					</div>
				</div>
				<div className="skw-page__half skw-page__half--right">
					<div className="skw-page__skewed">
						<div className="skw-page__content"></div>
					</div>
				</div>
			</div>
		)
	}
}