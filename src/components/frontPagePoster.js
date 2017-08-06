import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import { black } from 'material-ui/styles/colors';
import ReactDOM from 'react-dom';
import MaterialUIStyles from '../styles/materialUIStyles'

export default class FrontPagePoster extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			arrowVisible: true,
			firstScroll: true
		};
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		if (this.state.firstScroll && this.state.arrowVisible && document.body.clientWidth > 720) {
			this.setState({
				arrowVisible: false,
				firstScroll: false
			});
			window.scrollTo(0, ReactDOM.findDOMNode(this.myFPosterCard).offsetHeight)
		} else if (document.documentElement.scrollTop === 0 && document.body.scrollTop === 0) {
			this.setState({arrowVisible: true});
		} else {
			this.setState({arrowVisible: false});
		}
	}

	render() {
		return (
			<Card className="wFPoster" ref={(ref) => this.myFPosterCard = ref} style={MaterialUIStyles.card}>
				<div className="poster-text-wrapper">
					<div className="pName">Hi, I'm Ayush Sharma</div>
					<div className="pDesignation">Front-end web developer</div>
					{this.state.arrowVisible &&
					<ArrowDownward color={black} style={MaterialUIStyles.arrowDown} className="downArrow"/>}
				</div>
			</Card>
		)
	}
}