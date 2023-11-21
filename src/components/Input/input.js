import { TextField } from "@mui/material";

function Input({question}) {
    return (
        <TextField fullWidth  id="standard-basic" label={question} variant="standard" />
    );
  }
  
export default Input;