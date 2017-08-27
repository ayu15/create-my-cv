import React from 'react';
import SkewColumn from './skewColumn';
import Avatar from 'material-ui/Avatar';
import MyStyles from '../styles/materialUIStyles';
import avatarPic from '../assets/img/avatar.png';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import IconPersonAdd from 'material-ui/svg-icons/social/person-add';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


export default class Page1 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {drawerOpen: false};
		this.isActive = this.isActive.bind(this);
		this.openSocialDrawer = this.openSocialDrawer.bind(this);
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
	}

	openSocialDrawer = () => this.setState({drawerOpen: true});

	handleDrawerToggle = () => this.setState({drawerOpen: !this.state.open});

	handleDrawerClose = () => this.setState({drawerOpen: false});

	isActive = () => {
		return ((1 === this.props.active) ? 'active' : 'inactive');
	}

	render() {
		const leftContent = <div className='cnt'><Avatar src={avatarPic} style={MyStyles.avatarPic}/>
			<h2 className="skw-page__heading">Ayush Sharma</h2>
			<Divider style={MyStyles.divider}/>
			<p className="skw-page__description">Front-end developer</p></div>;

		const rightContent = <div className='cnt'>
			<List>
				<Subheader inset={true}
				           style={{"font-weight":"bolder", color:"#000", "font-size":"1.3rem"}}>Contact me</Subheader>
				<Divider style={MyStyles.divider}
				         inset={true}
				/>
				<ListItem
					leftIcon={<CommunicationEmail style={MyStyles.icon.contact}/>}
					primaryText="ayush.sharma1505@gmail.com"
				/>
				<ListItem
					leftIcon={<CommunicationCall style={MyStyles.icon.contact}/>}
					primaryText="(+44)7721825549"
					secondaryText="Mobile"
				/>
				<ListItem
					leftIcon={<IconPersonAdd style={MyStyles.icon.contact}/>}
					primaryText="Social platforms"
					onClick={this.openSocialDrawer}
				/>
			</List>
		</div>;

		return (
			<div className={`skw-page skw-page-1 ${this.isActive()}`}>
				<SkewColumn side='left' content={leftContent}/>
				<SkewColumn side='right' content={rightContent}/>
				<Drawer
					docked={false}
					openSecondary={true}
					width={"20%"}
					open={this.state.drawerOpen}
					onRequestChange={(open) => this.setState({drawerOpen:open})}
				>
					<MenuItem onClick={this.handleDrawerClose}>Menu Item</MenuItem>
					<MenuItem onClick={this.handleDrawerClose}>Menu Item 2</MenuItem>
				</Drawer>
			</div>
		)
	}
}