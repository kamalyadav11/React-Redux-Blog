import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { Component } from "react";

import { fetchPost, deletePost } from "../actions";
import "../styles/singlepost.css";

class SinglePost extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  deletePost = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  };

  render() {
    const { post } = this.props;

    if (!post) {
      return <div className="Loading">Loading...</div>;
    }

    return (
      <div className="SinglePost">
        <Link to="/">Back to Feed</Link>
        <button className="delete-button" onClick={this.deletePost}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h5 className="category">Categories: {post.categories}</h5>
        <p>{post.content}</p>
      </div>
    );
  }
}

//@ownProps is simply equal this.props [this.props == ownProps]
const mapStateToProps = ({ fetchPosts }, ownProps) => ({
  post: fetchPosts[ownProps.match.params.id]
  //@now our component is only ever going to recieve a single post with that matching id
});

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(SinglePost);
