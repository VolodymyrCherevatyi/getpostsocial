import { Component } from 'react';
import Header from './header/Header';
import Posts from './posts/GetPosts';

import './App.css';

class App extends Component {

	render() {
		return (
			<div className="App">
				<Header />
				<Posts />
			</div>
		)
	}

}

export default App;
