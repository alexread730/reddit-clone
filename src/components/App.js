import React from 'react';
import Nav from './Nav';
import Post from './Post';
import samplePosts from '../sample-posts.js';
import PostContainer from './PostContainer.js';

class App extends React.Component {
  constructor() {
    super();

    this.click = this.click.bind(this);
    this.state = {
      posts: samplePosts
    };

  }

  click() {
    console.log('hello');

  }

  render() {

    return (
      <div className="app">
        <Nav />
        <button onClick={this.click}>Create Post</button>
        <PostContainer posts={this.state.posts}/>
      </div>
    )
  }
}

export default App;
