import React from 'react';
import Post from './Post';


class PostContainer extends React.Component {



  render() {

    let postArray = [];

    let originArray = Object.keys(this.props.posts);
    //push objects into an array
    originArray.map((key) => postArray.push(this.props.posts[key]));

    //sort posts by votes and make new array in order
    let newArray = postArray.sort((a, b) => {return b.votes - a.votes});

    return (
      <div className='post-container container'>
        <div className="input-group filter">
          <input type="text" className="form-control" aria-label="filter"/>
        </div>
        <ul>
          {

            newArray.map((post) => <Post key={post.name} name={post.name} details={post} addVote={this.props.addVote} deleteVote={this.props.deleteVote}/>)

          }
        </ul>
      </div>
    )
  }
}

export default PostContainer;
