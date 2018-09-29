import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import "../styles/newpost.css";

class NewPost extends Component {
  renderField = field => {
    return (
      <div>
        <label className="title__lable">{field.label}</label>
        <input {...field.input} className="input__title" />
      </div>
    );
  };

  render() {
    return (
      <form>
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
          label="Categories"
        />
        <Field
          name="content"
          type="text"
          component={this.renderField}
          label="Content"
        />
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
})(NewPost);
