import { Component } from "react";
import Post from "../post/Post";

class Posts extends Component {
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
					return <Post post={item.body} key={id} />
				});
				this.setState({
					posts: res
				});
			});
	}


	render() {
		const { posts } = this.state;
		this.getPosts();
		return (
			<div> {posts} </div >
		);
	}
}

export default Posts;