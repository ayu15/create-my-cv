import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import IconCall from 'material-ui-icons/Call';
import IconEmail from 'material-ui-icons/Email';
import CopyToClipboard from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';
import Snackbar from 'material-ui/Snackbar';
import DrawerSocial from './drawerSocial';
const email = "ayush.sharma1505@gmail.com";
const mobile = "+44 77218 25549";
const msgEmailCopy = "Email id copied to clipboard";
const textPrimary = '#000';

const styles = theme => ({
	root: {
	},
	subheader: {
		"font-weight": "bolder",
		"font-size": "1.3rem",
		color:textPrimary,
	},
	text:{
		"font-weight": "bolder",
		"font-size": "1.3rem",
		color:textPrimary,
	}
});

class ContactList extends React.Component {
	constructor(props) {
		super(props);
		this.propTypes = {
			classes: PropTypes.object.isRequired,
		};
		this.state = {
			drawerOpen: false,
			copyEmail: false
		};
		this.copyEmail = this.copyEmail.bind(this);
		this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
	}

	handleSnackbarClose = () => this.setState({copyEmail: false});

	copyEmail = () => {
		this.setState({copyEmail: true});
	}

	render() {
		return (
			<div className={this.props.classes.root}>
				<List
					subheader={<ListSubheader inset={true} className={this.props.classes.subheader}>Contact me</ListSubheader>}>
					<Divider inset={true}/>

					<ReactTooltip id='emailTooltip'><p>copy to clipboard</p></ReactTooltip>
					<CopyToClipboard text={email} onCopy={this.copyEmail}>

						<ListItem button data-tip data-for="emailTooltip">
							<ListItemIcon>
								<IconEmail />
							</ListItemIcon>
							<ListItemText className={this.props.classes.subheader} primary={email}/>
						</ListItem>
					</CopyToClipboard>
					<Snackbar
						open={this.state.copyEmail}
						message={msgEmailCopy}
						autoHideDuration={3200}
						onRequestClose={this.handleSnackbarClose}
					/>
					<ListItem button>
						<ListItemIcon>
							<IconCall />
						</ListItemIcon>
						<ListItemText primary={mobile} secondary="Mobile"/>
					</ListItem>
				</List>
				<DrawerSocial classes={{root: 'sDrawer'}}/>
			</div>
		);
	}
}

export default withStyles(styles)(ContactList);
