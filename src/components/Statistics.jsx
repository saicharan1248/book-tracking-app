import React from "react";
import { Box, Typography } from "@mui/material";

function Statistics({ books }) {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Statistics</Typography>
      <Typography>Total Books: {books.length}</Typography>
      <Typography>
        Completed Books: {books.filter((book) => book.completed).length}
      </Typography>
    </Box>
  );
}

export default Statistics;
