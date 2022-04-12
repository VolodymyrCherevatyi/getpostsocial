import { Component } from "react";
import Post from "../post/Post";

import './Posts.scss';

class GetPosts extends Component {
	state = {
		posts: []
	}

	getPosts = async () => {

		let result = await fetch('https://simple-blog-api.crew.red/posts')
			.then(response => response.json())
			.then(result => {
				let id = 0;
				const res = result.map(item => {
					id++;
					return <Post post={item.body} title={item.title} key={id} />
				});
				this.setState({
					posts: res
				});
			});
	}

	componentDidMount() {
		this.getPosts();
	}

	// componentDidUpdate() {
	// 	if (this.props.update) {
	// 		this.getPosts();
	// 	}
	// }

	render() {
		const { posts } = this.state;

		return (
			<div className="posts"> {posts} </div >
		);
	}
}

export default GetPosts;