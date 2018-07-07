// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as HomeActions from '../actions/user';

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user.user,
    loading: state.user.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
