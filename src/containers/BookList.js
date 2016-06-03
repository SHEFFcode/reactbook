import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={ () => this.props.selectBook(book) }
          key={ book.title } className="list-group-item">{ book.title }</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props inside book list
  return ({
    books: state.books
  });
}

//Anything returns from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
  //Whenever selectbook is called the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
//Promote booklist from a component ot a container - it needs to know about the dispatch method selectBook,
//Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);