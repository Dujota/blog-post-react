import React, { Component } from 'react';

class Authors extends Component {
  render() {
    return (
      <div>
        <p>Written by: {this.props.body}</p>
      </div>
    )
  }
}

export default Authors