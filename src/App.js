import React, { Component } from 'react';
import './App.css';

// Load in the Comment Component
import Comments from './Comments.js';
import Authors from './Authors.js';

class Post extends Component {
  render() {
    let allComments = [
      <Comments body={this.props.comments[0]} />,
      <Comments body={this.props.comments[1]} />,
      <Comments body={this.props.comments[2]} />
    ];

    let allAuthors = [
      <Authors body={this.props.authors[0]} />,
      <Authors body={this.props.authors[1]} />,
      <Authors body={this.props.authors[2]} />,
    ];

    return (
      <div id="post">
        <h1 className="title">
          {this.props.title}
        </h1>
        {allAuthors}
        <p className="body">{this.props.body}</p>
        <h3 className="comments">Comments:</h3>
        {allComments}
        {/* <Comments body={this.props.comments[0]} /> */}

      </div>
    );
  }
}

export default Post;
