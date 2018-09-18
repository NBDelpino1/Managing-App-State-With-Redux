import { combineReducers } from 'redux';
// import and name reducer_books file to BooksReducer
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({

  // map the BookReducer value to the key
  books: BooksReducer
});

export default rootReducer;
