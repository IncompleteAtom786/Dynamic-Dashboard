import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

export default function SelectAutoWidth() {
    const [chart, setChart] = useState('Defualt');

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
            <FormControl sx={{ m: 1, width: 200, height: 50 }}>
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
                    {/* <MenuItem value={"Pie Chart"}> Pie Chart</MenuItem>
                    <MenuItem value={"Bar Chart"}>Bar Chart</MenuItem>
                    <MenuItem value={"Line Graph"}>Line Graph</MenuItem>
                    <MenuItem value={"Scatter Plot"}>Scatter Plot</MenuItem>
                    <MenuItem value={"Stacked Bar Chart"}>Gauge Chart</MenuItem>
                    <MenuItem value={"Heat Map"}>Heat Map</MenuItem> */}
                </Select>
            </FormControl>
        </div>
    );
}
