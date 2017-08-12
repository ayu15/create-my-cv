import React from 'react';

export default class Page3 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.isActive = this.isActive.bind(this);
	}

	isActive(){
		return ((3===this.props.active) ?'active':'inactive');
	}

	render() {
		return (
			<div className={`skw-page skw-page-3 ${this.isActive()}`}>
				<div className="skw-page__half skw-page__half--left">
					<div className="skw-page__skewed">
						<div className="skw-page__content"></div>
					</div>
				</div>
				<div className="skw-page__half skw-page__half--right">
					<div className="skw-page__skewed">
						<div className="skw-page__content">
							<h2 className="skw-page__heading">Page 3</h2>
							<p className="skw-page__description">The end is near, I promise!</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}