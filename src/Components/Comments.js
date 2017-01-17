import React, { Component } from 'react';

const propTypes = {
  tweeds: React.PropTypes.array.isRequired
};

class Comments extends Component {

  render() {
    let Comments = this.props.tweeds.map((tweed, i) => {
      return (
        <p key={i}>{tweed.post}<button className="Edit">Edit</button>
          <button className="Delete" >Delete</button></p>
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
