import _ from "lodash";
import { connect } from "react-redux";
import React, { Component } from "react";

import { fetchPosts } from "../actions";

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        {_.values(this.props.posts).map(post => (
          <p key={post.id}>{post.title}</p>
        ))}
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
