import React from 'react';
import SkewColumn from './skewColumn';
import Avatar from 'material-ui/Avatar';
import MyStyles from '../styles/materialUIStyles';
import avatarPic from '../assets/img/avatar.png';
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

const email = "ayush.sharma1505@gmail.com";
const mobile = "+44 77218 25549";
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
				<ReactTooltip id='emailTooltip'><p>copy to clipboard</p></ReactTooltip>
				<CopyToClipboard text={email} onCopy={this.copyEmail}>
					<ListItem
						leftIcon={<CommunicationEmail style={MyStyles.icon.contact}/>}
						primaryText={email}
						data-tip data-for="emailTooltip"
					/>
				</CopyToClipboard>
				<Snackbar
					open={this.state.copyEmail}
					message={msgEmailCopy}
					autoHideDuration={3200}
					onRequestClose={this.handleSnackbarClose}
				/>
				<ListItem
					leftIcon={<CommunicationCall style={MyStyles.icon.contact}/>}
					primaryText={mobile}
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
					width={'15%'}
					open={this.state.drawerOpen}
					onRequestChange={(open) => this.setState({drawerOpen: open})}
				  children={<SocialIcons/>}
				>
				</Drawer>
			</div>
		)
	}
}