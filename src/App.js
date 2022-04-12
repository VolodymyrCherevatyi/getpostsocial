import { Component } from 'react';
import './App.css';
import Header from './header/Header';
import GetPosts from './posts/GetPosts';
import AddPost from './add-post/AddPost';

class App extends Component {

	state = {
		update: false
	}

	toggleUpdatePosts = () => {
		if (!this.state.update) {
			this.setState({
				update: !this.state.update
			})
		}
		console.log(this.state.update)
	}

	componentDidUpdate() {
		if (this.state.update) {
			this.setState({
				update: !this.state.update
			})
		}

		console.log(this.state.update)
	}

	render() {
		return (
			<div className="App">
				<Header />
				<GetPosts update={this.state.update} />
				<AddPost update={this.toggleUpdatePosts} />
			</div>
		)
	}

}

export default App;
