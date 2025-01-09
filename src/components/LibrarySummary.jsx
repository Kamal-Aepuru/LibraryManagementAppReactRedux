import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "../../actions";

const LibrarySummary = () => {
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.booksList);

  const removeHandler = (ISBN) => {
    dispatch(removeBook(ISBN));
  };

  return (
    <>
      <h2>Library Summary</h2>
      <p>Total Books: {booksList.length}</p>
      {booksList.map((book) => (
        <li key={book.ISBN}>
          {book.title} by {book.author} (ISBN: {book.ISBN})
          <button onClick={() => removeHandler(book.ISBN)}>Remove</button>
        </li>
      ))}
    </>
  );
};

export default LibrarySummary;
