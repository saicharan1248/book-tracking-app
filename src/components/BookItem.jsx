import React from "react";
import {
  ListItem,
  Box,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function BookItem({ book, onUpdateProgress, onDeleteBook }) {
  return (
    <ListItem component="paper" sx={{ mb: 2, p: 2 }}>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h6">{book.title}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            label="Pages Read"
            type="number"
            value={book.pagesRead}
            onChange={(e) => onUpdateProgress(book.id, e.target.value)}
            sx={{ width: 120 }}
          />
          <Typography>
            of {book.totalPages} pages (
            {Math.round((book.pagesRead / book.totalPages) * 100)}%)
          </Typography>
          {book.completed && (
            <Typography color="success.main">Completed!</Typography>
          )}
          <IconButton
            onClick={() => onDeleteBook(book.id)}
            color="error"
            sx={{ marginLeft: "auto" }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </ListItem>
  );
}

export default BookItem;
