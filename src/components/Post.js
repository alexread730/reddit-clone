import React from 'react';
import Comments from './Comments';
import Votes from './Votes';
import moment from 'moment';

class Post extends React.Component {
  constructor() {
    super();
    this.toggleComments = this.toggleComments.bind(this);

    this.state = {
      showComments: false
    }
  }

  toggleComments() {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  render() {

    return (
      <div className="post container">
        <div className="row">
          <div className="col-md-12">
            <div className="well">
              <div className="media-left">
                <img src={this.props.details.img_url} className="media-object" alt={this.props.details.img_url}/>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                  {this.props.details.title}
                  |
                  <Votes votes={this.props.details.votes} postKey={this.props.name} addVote={this.props.addVote} deleteVote={this.props.deleteVote}/>
                </h4>
                <div className="text-right">
                  {this.props.details.author}
                </div>
                <p>
                  {this.props.details.description}
                </p>
                <div>
                  {
                    moment(this.props.details.created).fromNow()
                  }
                  <span> </span>
                  |
                  <span> </span>
                  <i className="glyphicon glyphicon-comment"></i>
                  <span> </span>
                  <a onClick={this.toggleComments}>
                    {this.props.details.comments.length} Comments
                  </a>
                </div>
                <Comments postKey={this.props.name} addComment={this.props.addComment} showComments={this.state.showComments} posts={this.props.details}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Post;
