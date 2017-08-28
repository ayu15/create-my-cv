import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import IconPersonAdd from 'material-ui-icons/PersonAdd';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List';

const styles = {
	list: {
		width: 250,
		flex: 'initial',
	},
	listFull: {
		width: 'auto',
		flex: 'initial',
	},
};

class DrawerSocial extends Component {

	constructor(props) {
		super(props);
		this.propTypes = {
			classes: PropTypes.object.isRequired,
		};
		this.state = {
			drawerOpen: false
		};
		this.openSocialDrawer = this.openSocialDrawer.bind(this);
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
	}
	openSocialDrawer = () => this.setState({drawerOpen: true});

	handleDrawerToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});

	render() {
		const socialIcons = (
			<div>
				<List disablePadding>
					<ListItem button>
						<ListItemIcon>
							<div onClick={this.handleDrawerToggle}><a><svg className="icon-linkedin" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg></a></div>
						</ListItemIcon>
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<div onClick={this.handleDrawerToggle}><a><svg className="icon-github" aria-labelledby="title" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a></div>
						</ListItemIcon>
					</ListItem>
				</List>
			</div>
		);

		return (
			<div>
				<List>
					<ListItem button onClick={this.openSocialDrawer}>
						<ListItemIcon>
							<IconPersonAdd />
						</ListItemIcon>
						<ListItemText primary='Social platforms'/>
					</ListItem>
				</List>
				<Drawer
					anchor='right'
					open={this.state.drawerOpen}
					onRequestClose={this.handleDrawerToggle}
					onClick={this.handleDrawerToggle}
				>
					<div>{socialIcons}</div>
				</Drawer>
			</div>
		);
	}
}

export default withStyles(styles)(DrawerSocial);