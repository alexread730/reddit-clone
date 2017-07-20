import React from 'react';

class CreateForm extends React.Component {

  render() {
    return (
      <form className="container">
        <div>
          <label>Title</label>
          <input id="title" className="form-control"/>
        </div>
        <div>
          <label>Body</label>
          <textarea id="body" className="form-control"></textarea>
        </div>
        <div>
          <label>Author</label>
          <input id="author" className="form-control"/>
        </div>
        <div>
          <label>Image URL</label>
          <input id="image-url" className="form-control"/>
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
