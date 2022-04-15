import './AddPost.scss';

import { Component } from "react";


class AddPost extends Component {

	state = {
		title: '',
		body: ''
	}

	addPost = (url, data) => {
		return fetch(url, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: data
		})
			.then(response => response.json())
			.then(result => {
				this.props.onSuccess(result);
			});
	}

	onInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	clearForm = () => {
		this.setState({
			title: '',
			body: ''
		})
	};

	onAddPost = () => {
		const res = JSON.stringify(this.state);
		this.addPost('https://simple-blog-api.crew.red/posts', res)
			.then(this.clearForm)
	}

	render() {
		const {title, body} = this.state;
		const isDisabled = !title || !body;

		return (
			<div className="add-new-post">
				<input onChange={this.onInput} type='text' placeholder='add title' name='title' value={title} />
				<textarea onChange={this.onInput} className='textarea' placeholder='write your post' name='body' value={body} />
				<button disabled={isDisabled} onClick={this.onAddPost}>Add Post</button>
			</div>
		);
	}
}

export default AddPost;
// {
// 	"title": "test",
// 	"body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias laborum voluptas quia porro ullam alias? Deleniti velit iure inventore rerum, commodi sit fuga in labore quo, laudantium ducimus repudiandae?"
// }