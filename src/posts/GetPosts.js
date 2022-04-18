import { Component } from "react";
import Post from "../post/Post";
import AddPost from "../add-post/AddPost";
import Services from "../services/Services";

import "./Posts.scss";

class Posts extends Component {
	state = {
		posts: [],
	};

	service = new Services();

	componentDidMount() {
		this.service
			.getResourse("https://simple-blog-api.crew.red/posts")
			.then((result) => {
				this.setState({
					posts: result,
				});
			});
	}

	displayPosts = () => {
		const { posts } = this.state;
		const postsCount = posts.length;
		const reversPosts = [];
		posts.map((item, i) => (reversPosts[postsCount - i - 1] = item));
		return reversPosts.map((item) => (
			<Post post={item.body} title={item.title} id={item.id} key={item.id} onDelete={this.deletePost}/>
		));
	};

	addNewPost = (newPost) => {
		const newPosts = this.state.posts;
		newPosts.push(newPost);
		this.setState({
			posts: newPosts,
		});
	};
	
	deletePost = (id) => {
		let posts = this.state.posts;
		posts = posts.filter(item=>{return item.id != id;});
		this.service.getResourse(`https://simple-blog-api.crew.red/posts/${id}`,"DELETE")
			.then(console.log('Ok'));
		this.setState({	posts});
	};

	render() {
		return (
			<div>
				<AddPost onSuccess={this.addNewPost} />
				<div className="posts">{this.displayPosts()}</div>
			</div>
		);
	}
}

export default Posts;
