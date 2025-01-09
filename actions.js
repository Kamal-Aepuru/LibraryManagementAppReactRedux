export const ADD_BOOK = "add/book";
export const REMOVE_BOOK = "remove/book";

export const addBook = (bookToBeAdded) => {
  return {
    type: ADD_BOOK,
    payload: bookToBeAdded,
  };
};

export const removeBook = (ISBN) => {
  return {
    type: REMOVE_BOOK,
    payload: ISBN,
  };
};
