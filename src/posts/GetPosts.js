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
					posts: result
				});
			})
	}


	displayPosts = () => {
		const { posts } = this.state;
		const postsCount = posts.length;
		const reversPosts = [];
		posts.map((item, i) => reversPosts[postsCount - i - 1] = item);
		return reversPosts.map(item => (
			<Post post={item.body} title={item.title} key={item.id} />
		));
	}

	addNewPost = (newPost) => {
		const newPosts = this.state.posts;
		newPosts.push(newPost);
		this.setState({
			posts: newPosts
		});

	}

	render() {

		return (
			<div>
				<AddPost onSuccess={this.addNewPost} />
				<div className="posts">
					{this.displayPosts()}
				</div>



			</div>
		);
	}
}

export default Posts;