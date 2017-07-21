import React from 'react';

class Votes extends React.Component {

  upVote() {
    this.props.addVote(this.props.postKey);
  }

  render() {
    return (
      <span>
        <a key={this.props.votes} onClick={this.upVote.bind(this)}><i className="glyphicon glyphicon-arrow-up"></i></a>
        <a><i className="glyphicon glyphicon-arrow-down"></i></a>
        {
          console.log(this.props)
        }
        <span>{this.props.votes}</span>
      </span>
    )
  }
}

export default Votes;
