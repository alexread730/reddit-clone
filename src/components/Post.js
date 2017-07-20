import React from 'react';
import Comments from './Comments';

class Post extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="post container">
        <div className="row">
          <div className="col-md-12">

            <div className="well">
              <div className="media-left">
                <img src={this.props.details.img_url} className="media-object"/>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  {this.props.details.title}
                  |
                  <a><i className="glyphicon glyphicon-arrow-up"></i></a>
                  <a><i className="glyphicon glyphicon-arrow-down"></i></a>
                  10
                </h4>
                <div className="text-right">
                  {this.props.details.author}
                </div>
                <p>
                  {this.props.details.description}
                </p>
                <div>
                  {Date.now()}
                  |
                  <i className="glyphicon glyphicon-comment"></i>
                  <a>
                    Comments
                  </a>
                </div>
                <Comments />
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Post;
