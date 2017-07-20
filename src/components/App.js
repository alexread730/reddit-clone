import React from 'react';
import Nav from './Nav';
import samplePosts from '../sample-posts.js';
import PostContainer from './PostContainer.js';
import CreateForm from './CreateForm';

class App extends React.Component {
  constructor() {
    super();

    this.click = this.click.bind(this);
    this.addPost = this.addPost.bind(this);
    this.state = {
      posts: samplePosts,
      showForm: false
    };

  }

  click() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  addPost(post) {
    const posts = {...this.state.posts};
    const timestamp = Date.now();
    posts[`post-${timestamp}`] = post;

    this.setState({
      posts: posts,
      showForm: !this.state.showForm
    })
  }

  render() {

    return (
      <div className="app">
        <Nav />
        <button onClick={this.click} className="btn btn-primary create-button">Create Post</button>
        {
          this.state.showForm
            ? <CreateForm addPost={this.addPost} showForm={this.state.showForm}/>
            : null
        }
        <PostContainer posts={this.state.posts} />

      </div>
    )
  }
}

export default App;
