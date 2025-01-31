import React from "react";
import { List } from "@mui/material";
import BookItem from "./BookItem";

function BookList({ books, onUpdateProgress, onDeleteBook }) {
  return (
    <List>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onUpdateProgress={onUpdateProgress}
          onDeleteBook={onDeleteBook}
        />
      ))}
    </List>
  );
}

export default BookList;
