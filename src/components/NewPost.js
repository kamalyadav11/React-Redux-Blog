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
          name="tags"
          type="text"
          component={this.renderField}
          label="Tags"
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

export default reduxForm({
  form: "NewPost"
})(NewPost);
