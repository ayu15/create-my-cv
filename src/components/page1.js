import React from 'react';
import SkewColumn from './skewColumn';
import Avatar from 'material-ui/Avatar';
import MyStyles from '../styles/materialUIStyles';
import avatarPic from '../assets/img/avatar.png';
import Divider from 'material-ui/Divider';
import ContactList from './contactList';

export default class Page1 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
		this.isActive = this.isActive.bind(this);
	}

	isActive = () => {
		return ((1 === this.props.active) ? 'active' : 'inactive');
	}

	render() {
		const leftContent = <div className='cnt'><Avatar src={avatarPic} style={MyStyles.avatarPic} alt=""/>
			<h2 className="skw-page__heading">Ayush Sharma</h2>
			<Divider style={MyStyles.divider}/>
			<p className="skw-page__description">Front-end developer</p></div>;

		const rightContent = <div className='cnt'>
			<ContactList classes={{root:'contact',
			subheader:'contact-subheader',
			text: 'contact-listItem'}}/>
		</div>;

		return (
			<div className={`skw-page skw-page-1 ${this.isActive()}`}>
				<SkewColumn side='left' content={leftContent}/>
				<SkewColumn side='right' content={rightContent}/>
			</div>
		)
	}
}
//