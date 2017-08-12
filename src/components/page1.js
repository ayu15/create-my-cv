import React from 'react';
import SkewColumn from './skewColumn';
import Avatar from 'material-ui/Avatar';
import MyStyles from '../styles/materialUIStyles';
import avatarPic from '../assets/img/avatar.png';
import Divider from 'material-ui/Divider';

export default class Page1 extends React.Component {

	constructor(props) {
		super(props);
		this.isActive = this.isActive.bind(this);
	}

	isActive() {
		return ((1 === this.props.active) ? 'active' : 'inactive');
	}

	render() {
		const leftContent =<Avatar src={avatarPic} style={MyStyles.avatarPic}
		/>;

		const rightContent = <div><h2 className="skw-page__heading">Ayush Sharma</h2>
			<Divider/>
			<p className="skw-page__description">Front-end developer</p></div>;

		return (
			<div className={`skw-page skw-page-1 ${this.isActive()}`}>
				<SkewColumn side='left' content={leftContent}/>
				<SkewColumn side='right' content={rightContent}/>
			</div>
		)
	}
}