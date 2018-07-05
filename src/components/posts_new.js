import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField (field) {
    return (
      <div className={`form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <span className="text-help">{field.meta.touched ? field.meta.error : ''}</span>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => this.props.history.push('/'));
  }


  render() {

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field label="Categories" name="categories" component={this.renderField} />
        <Field label="Post Content" name="content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors ={};

  if (!values.title || values.title.length <3 ) {
    errors.title = "Enter a title that is at least 3 characters!"
  }

  if (!values.categories) {
    errors.categories= "Enter a categories!"
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
