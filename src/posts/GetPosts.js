import {Component} from "react";
import Post from "../post/Post";

import './Posts.scss';
import AddPost from "../add-post/AddPost";

class GetPosts extends Component {
  state = {
    posts: []
  }

  // це не правильно
  getPosts = async () => {
    let result = await fetch('https://simple-blog-api.crew.red/posts')
      .then(response => response.json())
      .then(result => {
        let id = 0;
        const res = result.map(item => {
          id++;
          return <Post post={item.body} title={item.title} key={id}/>
        });
        this.setState({
          posts: res
        });
      });
  }

  // варіант 1 з async/await
  getPostsAwait = async () => {
    const postResponse = await fetch('https://simple-blog-api.crew.red/posts');
    const postJson = await postResponse.json();

    this.setState({posts: postJson});
  };

  // варіант 2 з then()
  getPostsThen = () => {
    fetch('https://simple-blog-api.crew.red/posts')
      .then(response => response.json())
      .then(result => {
        this.setState({posts: result});
      })
  }

  componentDidMount() {
    this.getPostsThen();
  }

  // componentDidUpdate() {
  // 	if (this.props.update) {
  // 		this.getPosts();
  // 	}
  // }

  render() {
    const {posts} = this.state;

    return (
      <div>

        <AddPost onSuccess={(newPost) => {
          // todo add to current state
        }} />


        <div className="posts">
          {posts.map(item => (
            <Post post={item.body} title={item.title} key={item.id}/>
          ))}
        </div>



      </div>
    );
  }
}

export default GetPosts;