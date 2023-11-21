import { TextField } from "@mui/material";

function TextArea() {
    return (
        <TextField
        sx={{margin:2}}
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
        rows={5}
        />
    );
  }
  
export default TextArea;
