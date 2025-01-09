import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../actions";

const LibraryManagementForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [valiationText, setValidationText] = useState(false);

  const dispatch = useDispatch();

  const bookHandler = () => {
    if (!title || !author || !ISBN) {
      setValidationText(true);
    } else {
      const newBook = {
        title: title,
        author: author,
        ISBN: Number(ISBN),
      };
      dispatch(addBook(newBook));
      setTitle("");
      setAuthor("");
      setISBN("");
    }
  };

  return (
    <>
      <main>
        <h1>Library Management</h1>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder="ISBN"
            value={ISBN}
            onChange={(e) => setISBN(e.target.value)}
          />
          <button onClick={bookHandler}> Add Book</button>
          {valiationText && <p>Please fill all the details</p>}
        </div>
      </main>
    </>
  );
};

export default LibraryManagementForm;
