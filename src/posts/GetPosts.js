import { Component } from "react";
import Post from "../post/Post";
import AddPost from "../add-post/AddPost";

import './Posts.scss';
import Services from "../services/Services";


class Posts extends Component {
	state = {
		posts: []
	}

	service = new Services();

	//   // варіант 1 з async/await
	//   getPostsAwait = async () => {
	//     const postResponse = await fetch('https://simple-blog-api.crew.red/posts');
	//     const postJson = await postResponse.json();

	//     this.setState({posts: postJson});
	//   };

	//   // варіант 2 з then()
	//   getPostsThen = () => {
	//     fetch('https://simple-blog-api.crew.red/posts')
	//       .then(response => response.json())
	//       .then(result => {
	//         this.setState({posts: result});
	//       })
	//   }

	componentDidMount() {
		this.service.getPosts('https://simple-blog-api.crew.red/posts')
			.then(result => {
				this.setState({
					posts: result.reverse()
				});
			})
	}

	addNewPost = (newPost) => {
		const newPosts = this.state.posts;
		newPosts.unshift(newPost);
		this.setState({
			posts: newPosts
		});

	}

	render() {
		const { posts } = this.state;

		return (
			<div>
				<AddPost onSuccess={this.addNewPost} />
				<div className="posts">
					{posts.map(item => (
						<Post post={item.body} title={item.title} key={item.id} />
					))}
				</div>



			</div>
		);
	}
}

export default Posts;