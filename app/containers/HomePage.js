// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignInForm from '../components/Home';
import * as HomeActions from '../actions/user';
import * as models from './../server';

function mapStateToProps(state) {
  return {
    user: state.user.user,
    loading: state.user.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
