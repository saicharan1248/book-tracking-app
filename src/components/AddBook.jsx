import React from "react";
import { Box, TextField, Button, Paper } from "@mui/material";

function AddBook({ newBook, setNewBook, onAddBook }) {
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          label="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <TextField
          label="Total Pages"
          type="number"
          value={newBook.totalPages}
          onChange={(e) =>
            setNewBook({ ...newBook, totalPages: e.target.value })
          }
        />
        <Button variant="contained" onClick={onAddBook}>
          Add Book
        </Button>
      </Box>
    </Paper>
  );
}

export default AddBook;
