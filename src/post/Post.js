import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./Post.scss";

class Post extends Component {

	onDelete = (e) => {
		this.props.onDelete(e.target.getAttribute(['data-post-id']));
	};

	render() {
		return (
			<div className="post">
				{/* <div className="title">{this.props.title}</div>
				{this.props.post} */}
				<Card border="primary" >
					<Card.Header className="post__title">
						{this.props.title}
						<Button variant="outline-primary" className="post__delete" data-post-id={this.props.id} onClick={this.onDelete}>
							Delete
						</Button>
					</Card.Header>
					<Card.Body>
						<Card.Text className="post__body">
							{this.props.post}
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default Post;
