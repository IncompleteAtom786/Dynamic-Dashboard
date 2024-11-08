import { Box } from "@mui/material";
import Item from "./Item";
import DashedLineChart from "./Charts/LineChart";
import ScatterPlot from "./Charts/ScatterPlot";
import StackedBarChart from "./Charts/StackedBar";
import PieChartWithCenterLabel from "./Charts/PieChart";
import HorizontalBars from "./Charts/HorizontalBar";
import HighlightHeatmap from "./Charts/HeatMap";
import ScatterDataset from "./Charts/ScatterPlot";

export default function Charts() {
    return <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyItems: "center", alignItems: "center", width: "100%", padding: 1}}>

        <ScatterDataset />

        <DashedLineChart />

        <StackedBarChart />

        <PieChartWithCenterLabel />

        <HorizontalBars />

        <HighlightHeatmap />

    </Box>

}
