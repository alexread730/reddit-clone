import React from 'react';

class Comments extends React.Component {

  render() {

    let comments = <div className="comments">
      <div className="row">
        <div className="col-md-offset-1">
          <hr/>
          <h5>Comments</h5>
          {
            this.props.posts.comments.map((comment, i) => <p key={i}>{comment}</p>)
          }
          <form className="form-inline">
            <div className="form-group">
              <input className="form-control"/>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary"/>
            </div>
          </form>
        </div>
      </div>
    </div>

    return (
      <div>
        {
          this.props.showComments
            ? comments
            : null
        }
      </div>
    )
  }
}

export default Comments;
