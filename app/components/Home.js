// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import styles from './Home.css';
import { logging, logged }  from '../actions/user';

type Props = {};

const signInUser = (values, dispatch) => {
  console.log(values);
  return dispatch(logging(values));
}

class Home extends Component<Props> {
  props: Props;
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.user === "Librarian") {
      this.context.router.history.push('/main');
    }
    // if (nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
    //   this.context.router.push('/');
    //}
  }

  render() {
    const {
      logging,
      logged,
      user,
      loading,
      handleSubmit, pristine, reset, submitting      
    } = this.props;
   
    return (
      <div className={styles.login}>
      <div className="row">
        <div data-tid="container" className="container">
          <h2 className="text-center">Login</h2>
          <form className="col-sm-4 offset-sm-4"  onSubmit={handleSubmit(signInUser)}>
            <div>
              <label>Email</label>
              <div>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Email"
                  className="col-sm-12"
                />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder="Password"
                  className="col-sm-12"
                />
              </div>
            </div>            
            <div className={styles.submit}>
              <button type="submit" disabled={pristine || submitting}>
                Submit
              </button>
            </div>
            {loading ? (
              <div className="text-center">Logging In</div>
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
  form: 'SignInForm', // a unique identifier for this form
})(Home)
