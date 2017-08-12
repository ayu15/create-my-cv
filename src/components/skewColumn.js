import React from 'react';

export default class SkewColumn extends React.Component {

	render() {
		return (
				<div className={`skw-page__half skw-page__half--${this.props.side}`}>
					<div className="skw-page__skewed">
						<div className="skw-page__content">
							{this.props.content}
						</div>
					</div>
				</div>
		)
	}
}