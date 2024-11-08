import { Box } from "@mui/material";
import Item from "./Item";
import DashedLineChart from "./Charts/LineChart";
import ScatterPlot from "./Charts/ScatterPlot";
import StackedBarChart from "./Charts/StackedBar";
import TwoLevelPieChart from "./Charts/TwoLevelPieChart";
import PieChartWithCenterLabel from "./Charts/TwoLevelPieChart";
import HorizontalBars from "./Charts/HorizontalBar";

export default function Charts() {
    return <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyItems: "center", alignItems: "center", width: "100", padding: 1}}>
        <Item sx={{border: "3px solid grey", margin: 2}}>
            <ScatterPlot />
        </Item>

        <Item sx={{ border: "3px solid grey", margin: 2}}>
            <DashedLineChart />
        </Item>

        <Item sx={{ border: "3px solid grey", margin: 2 }}>
            <StackedBarChart />
        </Item>

        <Item sx={{ border: "3px solid grey", margin: 2}}>
            <PieChartWithCenterLabel />
        </Item>

        <Item sx={{ border: "3px solid grey", margin: 2 }}>
            <HorizontalBars />
        </Item>

        <Item sx={{ border: "3px solid grey", margin: 2 }}>
            {/* <BasicGauges /> */}
        </Item>

    </Box>

}
