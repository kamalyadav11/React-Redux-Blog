import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import "../styles/newpost.css";
import { createPost } from "../actions";

class NewPost extends Component {
  renderField = field => {
    const { touched, error } = field.meta;
    const className = `input__title ${
      touched && error ? "red-border__error" : ""
    }`;
    return (
      <div className="flex-containers">
        <label className="title__lable">{field.label}</label>
        <input {...field.input} className={className} />
        <div className="red-text__error">{touched && error}</div>
      </div>
    );
  };

  //@history.push is coming from react-router
  //basically if the createPost request is successfully accomplished only then we redirect to Home page
  onSubmit = values => {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="title"
          type="text"
          component={this.renderField}
          label="Title"
        />
        <Field
          name="categories"
          type="text"
          component={this.renderField}
          label="Category"
        />
        <Field
          name="content"
          type="text"
          component={this.renderField}
          label="Content"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
        <Link to="/">
          <button className="button-cancel">Cancel</button>
        </Link>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) errors.title = "Title is Required";
  if (!values.categories) errors.categories = "Enter some categories";
  if (!values.content) errors.content = "Content is Required";

  return errors;
};

export default reduxForm({
  validate,
  form: "NewPost"
})(
  connect(
    null,
    { createPost }
  )(NewPost)
);
