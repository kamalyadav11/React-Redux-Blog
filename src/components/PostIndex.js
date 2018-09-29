import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { Component } from "react";

import "../styles/postindex.css";
import { fetchPosts } from "../actions";

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return _.values(this.props.posts).map(post => (
      <p className="post__title" key={post.id}>
        {post.title}
      </p>
    ));
  };

  render() {
    return (
      <div className="container">
        <div>
          <h3>Posts</h3>
          <div>{this.renderPosts()}</div>
        </div>
        <Link to="/posts/new">
          <button className="add-post__button">Add a Post</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.fetchPosts
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostIndex);
