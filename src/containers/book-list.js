import React, { Component } from 'react';

// STEP 3: forge connection between react and redux
import { connect } from 'react-redux';

class BookList extends Component {

    /* STEP 2: helper function renderList will then map over an array of books
       then for each book in the array, create an li that contains the books title
    */
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key="book.title" className="list-group-item">{book.title}</li>
            );
        });
    }

    // STEP 1: create a ul then call the renderList helper function
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// STEP 4: take the application state and whatever is returned from it, will show up as props inside of the BookList container
function mapStateToProps(state) {
    return {
        books: state.books
    };
}

// STEP 5: make use of the connect function, take the component and this map.state.props and return a container

export default connect(mapStateToProps)(BookList);