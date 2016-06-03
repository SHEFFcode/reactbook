import React, { Component } from 'react';
import BookList from '../containers/BookList';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    books: state.books
  });
}

export default connect(mapStateToProps)(BookList);