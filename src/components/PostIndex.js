import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { Component } from "react";

import { fetchPosts } from "../actions";

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return _.values(this.props.posts).map(post => (
      <p key={post.id}>{post.title}</p>
    ));
  };

  render() {
    return (
      <div>
        <Link to="/posts/new">
          <button>Add a Post</button>
        </Link>
        <h3>Posts</h3>
        <ul>{this.renderPosts()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostIndex);
