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

      </span>
    )
  }
}

export default Votes;
