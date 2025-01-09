import { ADD_BOOK, REMOVE_BOOK } from "./actions";

const initialState = {
  booksList: [],
};

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return { ...state, booksList: [...state.booksList, action.payload] };
    }
    case REMOVE_BOOK: {
      return {
        ...state,
        booksList: state.booksList.filter(
          (book) => book.ISBN !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
export default libraryReducer;
