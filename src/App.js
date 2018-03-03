import React, { Component } from 'react';
import './App.css';

// Load in the Comment Component
import Comments from './Comments.js';

class Post extends Component {
  render() {
    return (
      <div id="post">
        <h1 className="title">
          {this.props.title}
        </h1>
        <p className="author">by {this.props.author}</p>
        <p className="body">{this.props.body}</p>
        <h3 className="comments">Comments:</h3>

        <Comments body={this.props.comments[0]} />

      </div>
    );
  }
}

export default Post;
