import React from 'react';
import SkewColumn from './skewColumn';
import Avatar from 'material-ui/Avatar';
import MyStyles from '../styles/materialUIStyles';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import IconPersonAdd from 'material-ui/svg-icons/social/person-add';
import Subheader from 'material-ui/Subheader';
import Drawer from 'material-ui/Drawer';
import Snackbar from 'material-ui/Snackbar';
import CopyToClipboard from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';
import SocialIcons from './socialIcons';
import RaisedButton from 'material-ui/RaisedButton';
import IconSend from 'material-ui/svg-icons/content/send';

import avatarPic from '../assets/img/avatar2.jpg';
import data from '../data/data.json';

const email = data.ayush123.emailID;
const mobile = data.ayush123.mobileNumber;
const msgEmailCopy = "Email id copied to clipboard";

export default class Page1 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			drawerOpen: false,
			copyEmail: false
		};
		this.isActive = this.isActive.bind(this);
		this.openSocialDrawer = this.openSocialDrawer.bind(this);
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
		this.copyEmail = this.copyEmail.bind(this);
		this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
	}

	openSocialDrawer = () => this.setState({drawerOpen: true});

	handleDrawerToggle = () => this.setState({drawerOpen: !this.state.open});

	handleDrawerClose = () => this.setState({drawerOpen: false});

	copyEmail = () => {
		this.setState({copyEmail: true});
	}

	handleSnackbarClose = () => this.setState({copyEmail: false});

	isActive = () => {
		return ((1 === this.props.active) ? 'active' : 'inactive');
	}

	render() {
		const leftContent = <div className='cnt'><Avatar src={avatarPic} style={MyStyles.avatarPic} alt=""/>
			<h2 className="skw-page__heading">Ayush Sharma</h2>
			<Divider style={MyStyles.divider}/>
			<p className="skw-page__description">Front-end developer</p></div>;

		const rightContent = <div className='cnt'>
			<List>
				<Subheader inset={true}
				           style={{"font-weight": "bolder", color: "#000", "font-size": "1.3rem"}}>Contact me</Subheader>
				<Divider style={MyStyles.divider}
				         inset={true}
				/>
				<ReactTooltip id='copyClipboard'>
					<p>copy to clipboard</p>
				</ReactTooltip>
				<ReactTooltip id='sendEmail'>
					<p>send Email</p>
				</ReactTooltip>
				<ListItem
					leftIcon={<CommunicationEmail style={MyStyles.icon.contact}/>}
					rightIcon={<a href="mailto:ayush.sharma1505@gmail.com"><IconSend style={MyStyles.icon.contact} data-tip data-for="sendEmail"/></a>}
					primaryText={<CopyToClipboard text={email} onCopy={this.copyEmail}>
						<div style={{color: '#000', "font-weight": 'bolder'}} data-tip data-for="copyClipboard">{email}</div>
					</CopyToClipboard>}
					onKeyboardFocus={null}
				/>
				<Snackbar
					open={this.state.copyEmail}
					message={msgEmailCopy}
					autoHideDuration={3200}
					onRequestClose={this.handleSnackbarClose}
				/>
				<ListItem
					leftIcon={<CommunicationCall style={MyStyles.icon.contact}/>}
					primaryText={<div style={{color: '#000', "font-weight": 'bolder'}}>{mobile}</div>}
					secondaryText="Mobile"
					onKeyboardFocus={null}
				/>
				<ListItem
					leftIcon={<IconPersonAdd style={MyStyles.icon.contact}/>}
					primaryText={<RaisedButton
						label="Social platforms"
						disableTouchRipple={true}
						disableFocusRipple={true}
						primary={true}
						onClick={this.openSocialDrawer}
						labelStyle={{color: '#000', "font-weight": 'bolder'}}
						style={{"margin-top": '-0.7rem'}}
					/>}
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
					width={'15%'}
					open={this.state.drawerOpen}
					onRequestChange={(open) => this.setState({drawerOpen: open})}
					children={<SocialIcons/>}
				/>
			</div>
		)
	}
}