import './AddPost.scss';

import { Component } from "react";


class AddPost extends Component {

	state = {
		title: '',
		body: ''
	}

	addPost = async (data) => {

		let result = await fetch('https://simple-blog-api.crew.red/posts', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: data

		})
			.then(response => response.json())
			.then(result => {
				console.log(result);
				this.props.update();
			});
	}

	onInput = (e) => {
		if (e.target.name === 'title') {
			this.setState({
				title: e.target.value
			})
		} else {
			this.setState({
				body: e.target.value
			})
		}

	}

	onAddPost = () => {
		const res = JSON.stringify(this.state);
		this.addPost(res);

	}
	check = () => {
		this.props.update();
	}

	render() {

		return (
			<div className="add-new-post">
				<input onChange={this.onInput} type='text' placeholder='add title' name='title' />
				<textarea onChange={this.onInput} className='textarea' placeholder='write your post' name='body'></textarea>
				<button onClick={this.check}>Add Post</button>
			</div>
		);
	}
}

export default AddPost;
// onClick={this.onAddPost}
// {
// 	"title": "test",
// 	"body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias laborum voluptas quia porro ullam alias? Deleniti velit iure inventore rerum, commodi sit fuga in labore quo, laudantium ducimus repudiandae?"
// }