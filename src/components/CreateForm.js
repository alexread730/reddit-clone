import React from 'react';

class CreateForm extends React.Component {

  createPost(event) {
    event.preventDefault();

    const post = {
      title: this.title.value,
      author: this.author.value,
      description: this.description.value,
      img_url: this.img_url.value
    }

    this.props.addPost(post);
    this.postForm.reset();

  }

  render() {
    return (
      <form ref={(input) => this.postForm = input} className="container" onSubmit={this.createPost.bind(this)}>
        <div>
          <label>Title</label>
          <input ref={(input) => { this.title = input; }} id="title" className="form-control"/>
        </div>
        <div>
          <label>Description</label>
          <textarea id="body" className="form-control" ref={(input) => { this.description = input; }}></textarea>
        </div>
        <div>
          <label>Author</label>
          <input id="author" className="form-control" ref={(input) => { this.author = input; }}/>
        </div>
        <div>
          <label>Image URL</label>
          <input id="image-url" className="form-control"ref={(input) => { this.img_url = input; }} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary submit-button">
            Create Post
          </button>
        </div>
      </form>
    );
  }
}

export default CreateForm;
