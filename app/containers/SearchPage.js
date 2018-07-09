// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchForm from '../components/Search';
import * as SearchActions from '../actions/search';

function mapStateToProps(state) {
    console.log(state);
  return {
    loading: state.search.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SearchActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
