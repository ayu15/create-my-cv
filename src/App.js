import React, { Component } from 'react';
import FrontPagePoster from "./components/frontPagePoster";
import Summary from "./components/summary";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Skills from "./components/skills";
import Education from "./components/education";
import Experience from "./components/experience";

class App extends Component {
  constructor() {
		injectTapEventPlugin();
		super();
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="mainContainer">
					<FrontPagePoster />
					<Summary />
					<Skills />
					<Experience/>
					<Education />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
