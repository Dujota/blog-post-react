import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <p>{this.props.comments[0]}</p>


      </div>
    );
  }
}

export default Post;
