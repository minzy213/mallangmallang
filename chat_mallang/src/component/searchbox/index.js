import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function QuestionField() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        width: "100%",
        height: "80%",
        display: "flex",
        borderRadius: 3,
        opacity: 1,
        // bgcolor: "#F3F6FC",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="질문을 입력하세요."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default QuestionField;