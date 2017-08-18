import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SkwPages from "./components/skwPages";

class App extends Component {
  constructor() {
		injectTapEventPlugin();
		super();
	}

	componentDidMount() {
		document.querySelectorAll("div.loader")[0].setAttribute("style", "display : none");
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="mainContainer">
					<SkwPages/>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
