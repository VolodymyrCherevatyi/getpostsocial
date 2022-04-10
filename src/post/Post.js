import { Component } from "react";
import './Post.scss';

class Post extends Component {
	render() {
		return (
			<div className="post">
				{this.props.post}
			</div>
		);
	}
}

export default Post;