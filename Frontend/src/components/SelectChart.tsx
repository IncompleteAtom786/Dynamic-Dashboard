import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

export default function SelectAutoWidth() {

    const [chart, setChart] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setChart(event.target.value);
    };

    const menuToSelect = [
        "Pie Chart",
        "Bar Chart",
        "Line Graph",
        "Scatter Plot",
        "Stacked Bar Chart",
        "Heat Map"
    ]

    return (
        <div>
            <FormControl sx={{ m: 1, width: 250, height: 50 }}>
                <InputLabel>Charts</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={chart}
                    onChange={handleChange}
                    autoWidth
                    label="Charts"
                >
                    <MenuItem value={"Default"}>
                        <em>Default</em>
                    </MenuItem>
                    {menuToSelect.map((menu, index) => {
                        return <MenuItem
                        key={index}
                        value = {menu}>
                            {menu}
                        </MenuItem>

                    })}
                </Select>
            </FormControl>
        </div>
    );
}
