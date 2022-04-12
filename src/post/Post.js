import { Component } from "react";
import './Post.scss';

class Post extends Component {
	render() {
		return (
			<div className="post">
				<div className="title">{this.props.title}</div>
				{this.props.post}
			</div>
		);
	}
}

export default Post;