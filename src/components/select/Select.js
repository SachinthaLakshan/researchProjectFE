import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function DowpDownSelect({question}) {
    return (
        <FormControl  variant="standard"  fullWidth>
            <InputLabel id="demo-simple-select-standard-label">{question}</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
}

export default DowpDownSelect;