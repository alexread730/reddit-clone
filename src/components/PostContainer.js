import React from 'react';
import Post from './Post';


class PostContainer extends React.Component {



  render() {
    return (
      <div className='post-container container'>
        <div className="input-group filter">
          <div className="input-group-btn">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action <span className="caret"></span></button>
            <ul className="dropdown-menu">
              <li>Thing</li>
              <li>Thing 2</li>
              <li>Thing 3</li>
              <li role="separator" className="divider"></li>
              <li>OtherThing</li>
            </ul>
          </div>
          <input type="text" className="form-control" aria-label="..."/>
        </div>
        <ul>
          {
            Object
            .keys(this.props.posts)
            .map((key) => <Post key={key} name={key} details={this.props.posts[key]} addVote={this.props.addVote} deleteVote={this.props.deleteVote}/>)
          }
        </ul>
      </div>
    )
  }
}

export default PostContainer;
