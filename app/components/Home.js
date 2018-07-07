// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {};

const signInUser = (values, dispatch) => {
  console.log(values.target.value);
}

export default class Home extends Component<Props> {
  props: Props;

  render() {
    const {
      logging,
      logged,
      user,
      loading
    } = this.props;
   
    return (
      <div className={styles.login}>
      <div className="row">
        <div data-tid="container" className="container">
          <h2 className="text-center">Login</h2>
          <form className="col-sm-4 offset-sm-4"  onSubmit={signInUser}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1"
               aria-describedby="emailHelp" name="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" 
              name="password" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary text-center">Login</button>
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
