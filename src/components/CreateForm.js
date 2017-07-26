import React from 'react';

class CreateForm extends React.Component {

  createPost(event) {
    event.preventDefault();

    const post = {
      title: this.title.value,
      author: this.author.value,
      description: this.description.value,
      img_url: this.img_url.value,
      comments: [],
      votes: 0,
      created: Date.now()
    }
    this.props.addPost(post);
    this.postForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.postForm = input} className="container" onSubmit={this.createPost.bind(this)}>
        <div>
          <label>Title</label>
          <input ref={(input) => { this.title = input; }} id="title" className="form-control" required/>
        </div>
        <div>
          <label>Description</label>
          <textarea id="body" className="form-control" ref={(input) => { this.description = input; }} required></textarea>
        </div>
        <div>
          <label>Author</label>
          <input id="author" className="form-control" ref={(input) => { this.author = input; }} required />
        </div>
        <div>
          <label>Image URL</label>
          <input id="image-url" className="form-control"ref={(input) => { this.img_url = input; }} required />
        </div>
        <div className="form-group">
          {
            (this.props.formType == 'edit')
              ? <button type="submit" className="btn btn-danger submit-button">
                Edit Post
              </button>
              : <button type="submit" className="btn btn-primary submit-button">
                Create Post
              </button>
          }

        </div>
      </form>
    );
  }
}

export default CreateForm;
