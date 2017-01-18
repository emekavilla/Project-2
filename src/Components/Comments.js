import React, { Component } from 'react';

const propTypes = {
  tweeds: React.PropTypes.array.isRequired
};

class Comments extends Component {

  render() {
    let Comments = this.props.tweeds.map((tweed, i) => {
      console.log(this.props.tweeds);
      return (
        <p key={i}>{tweed.post}<button className="Edit" onClick={()=> this.props.patchRequest(tweed)}>Edit</button>
          <button className="Delete" onClick={()=> this.props.deleteRequest(tweed)}>Delete</button></p>
      );
    });
    return (
      <p>
        {Comments}
      </p>

    );

  }
}

Comments.propTypes = propTypes;

export default Comments;
