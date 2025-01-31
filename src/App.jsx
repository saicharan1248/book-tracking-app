import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import Statistics from "./components/Statistics";

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    totalPages: "",
    pagesRead: 0,
    completed: false,
  });

  const handleAddBook = () => {
    if (newBook.title && newBook.totalPages) {
      setBooks([...books, { ...newBook, id: Date.now() }]);
      setNewBook({
        title: "",
        totalPages: "",
        pagesRead: 0,
        completed: false,
      });
    }
  };

  const updateProgress = (id, pagesRead) => {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          const completed = parseInt(pagesRead) >= parseInt(book.totalPages);
          return { ...book, pagesRead, completed };
        }
        return book;
      })
    );
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Book Reading Tracker
        </Typography>

        <AddBook
          newBook={newBook}
          setNewBook={setNewBook}
          onAddBook={handleAddBook}
        />

        <BookList
          books={books}
          onUpdateProgress={updateProgress}
          onDeleteBook={deleteBook}
        />

        <Statistics books={books} />
      </Box>
    </Container>
  );
}

export default App;
