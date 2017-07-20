import React from 'react';
import Post from './Post';


class PostContainer extends React.Component {


  render() {
    return (
      <div className='post-container'>
        <ul>
          {
            Object
            .keys(this.props.posts)
            .map((key) => <Post key={key} name={key} details={this.props.posts[key]}/>)
          }
        </ul>
      </div>
    )
  }
}

export default PostContainer;
