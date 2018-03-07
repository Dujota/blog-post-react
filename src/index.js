import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Post from './App';
// import registerServiceWorker from './registerServiceWorker';

var post = {
  title: "I will learn React no matter what!",
  authors: [
    "Papa Sanch",
    "Tiny T-Rex",
    "Joe Blake"
  ],
  postBody: "One Step at a time, with no stone unturned!",
  comments: [
    "First!",
    "Great post dude!",
    "Hire this guy right meow!"
  ]
}

ReactDOM.render(
  <Post
    title={post.title}
    authors={post.authors}
    postBody={post.postBody}
    comments={post.comments}
  />,
  document.getElementById('root'));
  // registerServiceWorker();
