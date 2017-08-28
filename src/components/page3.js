import React from 'react';
import SkewColumn from './skewColumn';
import PastExp from './pastExp';
import MyStyles from '../styles/materialUIStyles';
import Divider from 'material-ui/Divider';
import IconPastExp from 'material-ui/svg-icons/notification/event-note';

export default class Page3 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.isActive = this.isActive.bind(this);
	}

	isActive() {
		return ((3 === this.props.active) ? 'active' : 'inactive');
	}

	render() {
		const leftContent = <div className='cnt'><div className="skw-page__heading"><IconPastExp style={MyStyles.icon.section}/>Past Experience</div>
			<Divider style={MyStyles.divider}/>
			<PastExp/></div>;

		const rightContent = <div className='cnt'></div>;

		return (
			<div className={`skw-page skw-page-3 ${this.isActive()}`}>
				<SkewColumn side='left' content={leftContent}/>
				<SkewColumn side='right' content={rightContent}/>
			</div>
		)
	}
}