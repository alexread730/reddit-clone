import React from 'react';
import Post from './Post';


class PostContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      search: '',
      sort: 'votes'
    };
  }

  updateSort(event) {
    this.setState({sort: this.sort.value});
  }

  updateSearch(event) {
    this.setState({search: this.filter.value.substr(0,20)});
  }

  render() {

    let postArray = [];
    let newArray = [];
    let originArray = Object.keys(this.props.posts);
    //push objects into an array
    originArray.map((key) => postArray.push(this.props.posts[key]));


    //sort posts by selected value and make new array in order
    if (this.state.sort === 'votes') {
      newArray = postArray.sort((a, b) => {return b.votes - a.votes});
    } else if (this.state.sort === 'title') {
        newArray = postArray.sort((a, b) => {return a.title - b.title});
    } else if (this.state.sort === 'date') {
        newArray = postArray.sort((a, b) => {return b.created - a.created});
      }

    //filter array based on input box
    newArray = newArray.filter(
      (post) => {
        return post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className='post-container container'>
        <div className="input-group filter">
          <input onChange={this.updateSearch.bind(this)} ref={(input) => { this.filter = input; }} type="text" className="form-control" aria-label="filter"/>
        </div>
        <select className="dropdown" onChange={this.updateSort.bind(this)} ref={(input) => { this.sort = input; }}>
          <option value="votes" defaultValue>Votes</option>
          <option value="date">Date</option>
          <option value="title">Title</option>
        </select>
        <ul>
          {
            newArray.map((post) => <Post key={post.name} name={post.name} details={post} addVote={this.props.addVote} deleteVote={this.props.deleteVote} addComment={this.props.addComment} click={this.props.click} showForm={this.props.showForm} editPost={this.props.editPost}/>)
          }
        </ul>
      </div>
    )
  }
}

export default PostContainer;
