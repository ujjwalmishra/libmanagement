// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import styles from './Search.css';
import { search, searching, searchComplete }  from '../actions/search'

type Props = {};

const searchBooks = (values, dispatch) => {
  return dispatch(search(values))
  .then( (res) => {
    console.log("data-----------------")
    console.log(res);
    dispatch(searchComplete(res));
  } );
}

class Search extends Component<Props> {
  props: Props;

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.user === "Librarian") {
      this.context.router.push('/searchlist');
    }
    // if (nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
    //   this.context.router.push('/');
    //}
  }

  render() {
    const {
        search,
        searching,
        searchComplete,
        loading,
        handleSubmit, pristine, reset, submitting      
    } = this.props;
   
    return (
      <div className={styles.search}>
      <div className="row">
        <div data-tid="container" className="container">
          <h2 className="text-center">Search Books</h2>
          <form className="col-sm-4 offset-sm-4"  onSubmit={handleSubmit(searchBooks)}>
            <div>
              <label>ISBN OR Title OR Author</label>
              <div>
                <Field
                  name="query"
                  component="input"
                  type="text"
                  placeholder="Search"
                  className="col-sm-12"
                />
              </div>
            </div>
         
            <div className={styles.submit}>
              <button type="submit" disabled={pristine || submitting}>
                Search
              </button>
            </div>
            {loading ? (
              <div className="text-center">Searching...</div>
            ) : (
              <span></span>
            )}
            
          </form>
         
        </div>
      </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'SearchForm', // a unique identifier for this form
})(Search)
