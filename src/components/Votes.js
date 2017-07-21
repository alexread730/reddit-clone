import React from 'react';

class Votes extends React.Component {

  upVote() {
    this.props.addVote(this.props.postKey);
  }

  downVote() {
    if (this.props.votes > 0) {
      this.props.deleteVote(this.props.postKey);
    }
  }

  render() {
    return (
      <span>
        <a key={this.props.votes} onClick={this.upVote.bind(this)}><i className="glyphicon glyphicon-arrow-up"></i></a>
        <a key={"Down:"+this.props.votes} onClick={this.downVote.bind(this)}><i className="glyphicon glyphicon-arrow-down"></i></a>
        <span>{this.props.votes}</span>
      </span>
    )
  }
}

export default Votes;
