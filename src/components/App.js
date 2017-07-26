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
    this.addVote = this.addVote.bind(this);
    this.deleteVote = this.deleteVote.bind(this);
    this.addComment = this.addComment.bind(this);
    this.state = {
      posts: samplePosts,
      showForm: false,
      editPost: '',
      formType: ''
    };

  }

  click(post, type) {
    this.setState({
      showForm: !this.state.showForm,
      editPost: post,
      formType: type
    });
  }

  addPost(post) {
    const posts = {...this.state.posts};
    const timestamp = Date.now();
    post['name'] = `post-${timestamp}`;
    posts[`post-${timestamp}`] = post;

    this.setState({
      posts: posts,
      showForm: !this.state.showForm,
      filterVal: ''
    })
  }

  addVote(post) {
    const posts = {...this.state.posts};
    this.state.posts[post].votes = this.state.posts[post].votes + 1
    this.setState({
      posts
    })
  }

  deleteVote(post) {
    const posts = {...this.state.posts};
    this.state.posts[post].votes = this.state.posts[post].votes - 1
    this.setState({
      posts
    })
  }

  editPost(post) {
    const posts = {...this.state.posts};

  }

  addComment(comment, post) {
    const posts = {...this.state.posts};
    this.state.posts[post].comments.push(comment);
    this.setState({
      posts
    })
  }

  render() {

    return (
      <div className="app">
        <Nav />
        <button onClick={this.click.bind(this, null, 'create')} className="btn btn-primary create-button">Create Post</button>
        {
            this.state.showForm
              ? <CreateForm addPost={this.addPost} showForm={this.state.showForm} formType={this.state.formType}/>
              : null
        }
        <PostContainer posts={this.state.posts} addVote={this.addVote} deleteVote={this.deleteVote} addComment={this.addComment} click={this.click} showForm={this.state.showForm} formType="this.state.formType"/>

        </div>
    )
  }
}

export default App;
