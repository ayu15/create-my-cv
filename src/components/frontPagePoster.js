import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import { white } from 'material-ui/styles/colors';
import ReactDOM from 'react-dom';

const iconStyles = {
	"height": "10%",
	"width": "10%"
};
const posterCard = {
	"background-color": "orange"
};
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
		if (this.state.firstScroll && this.state.arrowVisible) {
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
			<Card className="wFPoster" ref={(ref) => this.myFPosterCard = ref} style={posterCard}>
				<h1 className="pName">Hi, I'm Ayush Sharma</h1>
				<h2 className="pDesignation">Front-end web developer</h2>
				{this.state.arrowVisible && <ArrowDownward color={white} style={iconStyles} className="downArrow"/>}
			</Card>
		)
	}
}