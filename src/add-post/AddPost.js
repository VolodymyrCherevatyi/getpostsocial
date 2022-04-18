import { Component } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import Services from "../services/Services";

import "./AddPost.scss";

class AddPost extends Component {
	state = {
		title: "",
		body: ""
	};
	
	service = new Services();

	onInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onAddPost = () => {
		const data = JSON.stringify(this.state);
		this.service.getResourse("https://simple-blog-api.crew.red/posts", "POST", data)
			.then((result) => {
				this.props.onSuccess(result);
			})
			.then(this.setState({
				title: "",
				body: ""
			}));
	};

	render() {
		const {title, body} = this.state;
		const disable = (!title || !body)? true : false; 
		return (
			<div className="add-new-post">
				<Form>
					<FloatingLabel
						controlId="floatingInput"
						label="Add post title"
						className="mb-3"
					>
						<Form.Control 
							onChange={this.onInput} 
							name="title" 
							type="text" 
							placeholder="Add post title" 
							className="title"
							value={title}
						/>
					</FloatingLabel>
					<FloatingLabel 
						controlId="floatingTextarea2" 
						label="Write your post"
					>
						<Form.Control
							onChange={this.onInput}
							name="body"
							as="textarea"
							className="add-post"
							placeholder="Write your post"
							value={body}
						/>
					</FloatingLabel>
					<Button variant="outline-primary" className="add-post-btn" onClick={this.onAddPost} disabled={disable}>
						Add Post
					</Button>
				</Form>
			</div>
		);
	}
}

export default AddPost;
// {
// 	"title": "test",
// 	"body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias laborum voluptas quia porro ullam alias? Deleniti velit iure inventore rerum, commodi sit fuga in labore quo, laudantium ducimus repudiandae?"
// }
